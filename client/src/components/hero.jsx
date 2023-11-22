import {motion, useScroll} from "framer-motion"
import heroImg from '/src/assets/bg1.avif'
const Hero = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div> 
     <div className="flex items-top flex-wrap content-stretch gap-y-5 lg:gap-y-0">
        <div className=' flex flex-col gap-y-5 items-center px-6 sm:px-8 lg:w-1/2 lg:pt-12 lg:gap-y-10'>
          <h1 className="text-4xl sm:text-5xl lg:text-[4.3rem] font-black  text-white">
            Focus on your <span className='text-green-400'>main tasks </span>
            and avoid <span className='text-rose-500'>distractions</span> with the
            <span className='text-sky-400'> ToDoList </span>App
          </h1>
          <p className=" font-normal text-justify text-md sm:text-lg">
          A task list app is an invaluable tool that proves exceptionally useful in aiding individuals to organize and manage their tasks effectively. By providing a structured platform for creating and prioritizing tasks, these applications empower users to systematically tackle their daily activities, assignments, and goals.This not only facilitates better time management but also contributes to a more organized and streamlined approach to work. The convenience of accessing these apps across various devices ensures that users can stay organized and on track, whether they are at their desk, on the move, or working remotely.
          </p>
          <button className='self-stretch py-4 text-xl rounded-md bg-gradient-to-r from-sky-500 to-indigo-500'>Get started</button>
        </div>
        <div className="flex justify-stretch w-full lg:w-1/2">
          <img src={heroImg} alt="bg-img" className="lg:rounded-l-lg w-full"/> 
        </div>
      </div>
      
    </div>  
  )
}

export default Hero;