import githubImg from "/src/assets/github_icon.svg"
import Logo from "./logo";


const Footer = () => {

  return (
    <footer className="w-full py-9 px-4 md:px-6 flex justify-between items-center">
      <Logo txt="ToDo List" />
      <div className="flex flex-col items-center mr-[15px] md:mr-[110px] text-sm">
        <span>© All rights reserved.</span>
        <span>2023 - 2024</span>
      </div>
      <a
        href="https://github.com/antonkhomenko/todo-fullstack"
        className="block w-8 md:w-10"
      >
        <img
          src={githubImg}
          alt="github-image"
          className="w-full h-full object-contain opacity-75 hover:opacity-100"
        />
      </a>
    </footer>
  );
}

export default Footer;