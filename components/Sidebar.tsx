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
        src="/images/avatar.jpg"  // Local image path relative to the 'public' directory
        alt="avatar"
        className="mx-auto border rounded-full"
        height={128}
        width={128}
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-black">Max</span> Destil
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Electrical Engineer
      </p>

      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"  // Path to your PDF file
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
          href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A" 
          className="w-8 h-8 cursor-pointer flex items-center justify-center" 
          style={{ backgroundColor: "#FF0000", borderRadius: "4px", padding: "8px" }}  // Red background with padding
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" style={{ color: "#FFFFFF" }} />  {/* White play button */}
        </a>
        <a 
          href="https://www.linkedin.com/in/sumit-dey-4a04431a9/"
          className="w-8 h-8 cursor-pointer flex items-center justify-center" 
          style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" style={{ color: "#0A66C2" }} />  {/* LinkedIn blue color */}
        </a>
        
        <a href="https://github.com/your-github-username">
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

     {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:destim@rpi.edu")}
      >
        Email Me
      </button>

      <button
        onClick={() => window.open('https://github.com/creator-username', '_blank')}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer hover:scale-105 focus:outline-none"
      >
        Project Creator
      </button>
    </>
  );
};

export default Sidebar;