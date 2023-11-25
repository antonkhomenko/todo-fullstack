import heroImg from '/src/assets/bg1.avif'
import {motion} from "framer-motion"
import ReviewsContainer from './reviewsContainer'
import reactImg from "/src/assets/react_icon.svg"
import goImg from "/src/assets/Go-Logo_White.svg"
const Hero = () => {

  return (
    <div>
      <div className="flex items-top flex-wrap content-stretch gap-y-5 lg:gap-y-0 mb-[8rem]">
        <div className=" flex flex-col gap-y-5 items-center px-6 sm:px-8 lg:w-1/2 lg:pt-12 lg:gap-y-10 2xl:pt-14 2xl:gap-y-12">
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[4.3rem] font-black  text-white 2xl:w-[80%] 2xl:text-[4.8rem]"
          >
            Focus on your <span className="text-green-400">main tasks </span>
            and avoid <span className="text-rose-500">distractions</span> with
            the
            <span className="text-sky-400"> ToDoList </span>App
          </motion.h1>
          <p className=" font-normal text-justify text-md sm:text-lg 2xl:w-[80%]">
            A task list app is an invaluable tool that proves exceptionally
            useful in aiding individuals to organize and manage their tasks
            effectively. By providing a structured platform for creating and
            prioritizing tasks, these applications empower users to
            systematically tackle their daily activities, assignments, and
            goals.This not only facilitates better time management but also
            contributes to a more organized and streamlined approach to work.
            The convenience of accessing these apps across various devices
            ensures that users can stay organized and on track, whether they are
            at their desk, on the move, or working remotely.
          </p>
          <button className="self-stretch py-4 text-xl rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 2xl:w-[80%] 2xl:self-center hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600">
            Get started
          </button>
        </div>
        <div className="flex justify-stretch w-full lg:w-1/2 2xl:justify-end">
          <img
            src={heroImg}
            alt="bg-img"
            className="lg:rounded-l-lg w-full 2xl:w-[90%]"
          />
        </div>
      </div>
      <motion.section
        className="flex flex-col items-center mb-[2rem]"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h1 className="font-black text-4xl xl:text-6xl 2xl:text-8xl text-white text-center md:max-w-[80%]">
          Start your{" "}
          <span className="underline text-green-400">new productive life</span>{" "}
          💪 with <span className="text-sky-400">ToDo List</span> App 🤩
        </h1>
      </motion.section>
      <ReviewsContainer />
      <section className="flex flex-col items-center py-8 gap-y-4">
        <h1 className="text-white font-black 2xl:text-8xl">
          Developed with best technology
        </h1>
        <div className="flex w-full justify-around items-center mt-7">
          <motion.div
            initial={{opacity: 0, x: -75}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.3, delay: 0.4}}
            whileHover={{scale: 1.1}} 
            className="ag-courses_item golang-container react-container">
            <a href="#" className="ag-courses-item_link bg-stone-800">
              <div className="golang-container-bg react-container-bg"></div>
              <div className="ag-courses-item_title">
                <img src={reactImg} alt="react-img" className="object-contain w-full h-full" />
              </div>

              <div className="ag-courses-item_date-box">
                Frontend:
                <span className="ag-courses-item_date"> React</span>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 75}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.3, delay: 0.4}}
            whileHover={{scale: 1.1}} 
            className="ag-courses_item golang-container">
            <a href="#" className="ag-courses-item_link bg-stone-800">
              <div className="golang-container-bg"></div>

              <div className="ag-courses-item_title">
                <img src={goImg} alt="golang-img" className="object-contain w-full h-full" />
              </div>

              <div className="ag-courses-item_date-box">
                Backend:
                <span className="ag-courses-item_date"> Golang</span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;