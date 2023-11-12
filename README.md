# Munch Map

Munch Map is a web application built with Next.js that displays nearby food places based on user preferences. It leverages the Google Maps API for location services and provides a personalized experience with Google Authentication.

## Features

- **Location-based Search:** Find food places near your current location.
- **Personalized Experience:** Log in with Google to save preferences and view personalized recommendations.
- **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.

## Prerequisites

Before running the application, make sure you have the following:

- [Node.js](https://nodejs.org/) installed
- Google Maps API Key
- Google Authentication API Key

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/SairajBandre16/MunchMap.git
   cd munch-map
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure API Keys:**

   Create a `.env.local` file in the root of the project and add your API keys:

   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_GOOGLE_AUTH_API_KEY=your_google_auth_api_key
   ```

   **Note:** It is crucial to use your own API keys. Do not share them publicly.

4. **Run the Application:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

- Open the Munch Map application.
- Log in with your Google account for a personalized experience.
- Adjust your preferences and explore nearby food places on the map.

## Configuration

- Customize the map behavior and appearance in the `config.js` file.

## Important Note

- **API Keys:**
  - Use your own Google Maps API key and Google Authentication API key.
  - Never share your API keys publicly or embed them in client-side code.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

