import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
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
        src="https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg"
        alt="avatar"
        className="mx-auto border rounded-full"
        height={128}
        width={128}
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-black">Sumit</span> Dey
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>

      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-gray-500 md:w-full">
        <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer text-[#0A66C2]" />  {/* LinkedIn color */}
        </a>
        <a href="https://www.instagram.com/_sumax__/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />
          <span>Kolkata, India</span>
        </div>
        <p className="my-2">code.sumax@gmail.com</p>
        <p className="my-2">
          <a href="tel:8514961665">8514961665</a> / <a href="tel:8640960375">8640960375</a>
        </p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full my-2"
        onClick={() => window.open("mailto:code.sumax@gmail.com")}
      >
        Email Me
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 mt-4 text-white bg-black rounded-full"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;