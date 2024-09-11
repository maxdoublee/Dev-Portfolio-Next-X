import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div
        className="grid grid-cols-12 gap-6 px-5 pt-40 sm:px-20 md:px-32 lg:px-36 xl:px-48"
        style={{
          backgroundImage: "url('/images/circuits.jpg')", // Custom background image
          backgroundSize: "cover", // Make sure it covers the whole page
          backgroundPosition: "center", // Center the background
          backgroundRepeat: "no-repeat", // Prevent background repetition
          minHeight: "100vh" // Ensure the background covers the entire viewport height
        }}
      >
        {/* Sidebar */}
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;