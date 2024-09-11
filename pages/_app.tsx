import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen flex justify-center items-start pt-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="grid grid-cols-12 gap-6 w-full max-w-5xl px-5 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
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
      </div>
    </ThemeProvider>
  );
}

export default MyApp;