import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/profile pic.PNG"  // Local image path relative to the 'public' directory
        alt="avatar"
        className="mx-auto border rounded-full"
        height={128}
        width={128}
        layout="intrinsic"
        quality="100"
      />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan text-black">
          Max Destil
        </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Electrical Engineer
      </p>

      {/* Resume */}
      <a
        href="/Professional Resume.pdf"  // Path to your PDF file
        target="_blank"  // Opens the PDF in a new tab
        rel="noopener noreferrer"  // Ensures security when opening a new tab
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>View Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-gray-500 md:w-full">
        <a 
          href="https://www.youtube.com/" 
          target="_blank"  // Opens in a new tab
          rel="noopener noreferrer"  // Ensures security
          className="w-8 h-8 cursor-pointer flex items-center justify-center"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" style={{ color: "#FF0000" }} />  {/* Red YouTube logo */}
        </a>
        <a 
          href="https://www.linkedin.com/in/max-destil-75340b221"
          target="_blank"  // Opens in a new tab
          rel="noopener noreferrer"  // Ensures security
          className="w-8 h-8 cursor-pointer flex items-center justify-center" 
          style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" style={{ color: "#0A66C2" }} />  {/* LinkedIn blue color */}
        </a>
        <a 
          href="https://github.com/maxdoublee"
          target="_blank"  // Opens in a new tab
          rel="noopener noreferrer"  // Ensures security
          className="w-8 h-8 cursor-pointer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" style={{ color: "#181717" }} />  {/* GitHub black color */}
        </a>
      </div>

      {/* Contacts */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />
          <span>Greater New York City Area</span>
        </div>
        <p className="my-2">destim@rpi.edu</p>
        <p className="my-2">
          <a href="tel:(917) 273-5876">(917) 273-5876</a> 
        </p>
      </div>

     {/* Buttons - Adjust spacing and layout */}
      <div className="flex flex-col items-center space-y-4 w-full mt-10 mb-10 flex-grow">
        <button
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full"
          onClick={() => window.open("mailto:destim@rpi.edu")}
        >
          Email Me
        </button>

        <a
          href="https://github.com/Dey-Sumit/Dev-Portfolio-Next-X"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full text-center"
        >
          View Source
        </a>
      </div>
    </>
  );
};

export default Sidebar;