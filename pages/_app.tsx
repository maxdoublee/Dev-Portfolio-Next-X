import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div
        className="min-h-screen flex justify-center items-start" // Adjusted alignment to 'items-start' to prevent extra space at the bottom
        style={{
          backgroundImage: "url('/images/circuits.jpg')", // Background image path
          backgroundSize: "cover", // Ensure background covers the full screen
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent repetition
        }}
      >
        {/* Wrapper for Sidebar and Main Content */}
        <div className="grid grid-cols-12 gap-6 w-full max-w-screen-lg p-5 mx-auto">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3 p-4 text-base text-center bg-white dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9 p-6 bg-white dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
