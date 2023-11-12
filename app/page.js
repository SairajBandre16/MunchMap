"use client"
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import CategoryList from './components/Home/CategoryList'
import RangeSelect from './components/Home/RangeSelect'
import SelectRating from './components/Home/SelectRating'
import GoogleMapView from './components/Home/GoogleMapView'
import GlobalApi from '@/Shared/GlobalApi'
import { UserLocationContext } from '@/context/UserLocationContext'
import BusinessList from './components/Home/BusinessList'

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState();
  const router = useRouter();
  const {userLocation, setUserLocation} = useContext(UserLocationContext);
  useEffect(() => {
    console.log("session:", session);
    if (!session?.user) {
      router.push("/login");
    }
  }, [session, router]);

  useEffect(()=>{
    getGooglePlace();
  },[category,radius])

  const getGooglePlace=()=>{
    GlobalApi.getGooglePlace(category,radius, userLocation.lat, userLocation.lng).then(resp=>{
      // console.log(resp.data.product.results);
      setBusinessList(resp.data.product.results);
    })
  }

  return (
    <div className='grid 
    grid-cols-1
    md:grid-cols-4 h-screen'>
      <div className='p-3'>
      <CategoryList onCategoryChange={(value)=>setCategory(value)}/>
      <RangeSelect onRadiusChange={(value)=>setRadius(value)}/>
      <SelectRating />
      </div>
      <div className= 'col-span-3'>
      <GoogleMapView businessList={businessList}/>
      <div className='md:absolute w-[90%] md:w-[71%] ml-6 md:ml-10 bottom-36 relative md:bottom-3'>
      <BusinessList businessList={businessList}/>
      </div>
      </div>

      
    </div>
  );
}





{/* <h2>HELLO</h2>
      <button onClick={() => signOut()}>Sign Out</button> */}