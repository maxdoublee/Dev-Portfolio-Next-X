import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div
        className="min-h-screen flex justify-center items-center" // Flexbox for centering content
        style={{
          backgroundImage: "url('/images/circuits.jpg')", // Custom background image
          backgroundSize: "cover", // Ensure it covers the entire viewport
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent background from repeating
        }}
      >
        {/* Wrapper for Sidebar and Main Content */}
        <div className="grid grid-cols-12 gap-6 w-full max-w-screen-lg p-5">
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