import heroImg from '/src/assets/bg1.avif'
const Hero = () => {

  return (
    <div className="pb-10 pl-16  flex items-top">
        <div className='w-1/2 flex flex-col gap-y-10 items-center'>
          <h1 className="text-7xl font-extrabold pt-20 text-white w-[85%]">
            Focus on your <span className='text-green-400'>main tasks </span>
            and avoid <span className='text-rose-500'>distractions</span> with the
            <span className='text-sky-400'>ToDoList </span>App
          </h1>
          <p className="w-[85%] font-normal leading-8 text-justify text-lg">
          A task list app is an invaluable tool that proves exceptionally useful in aiding individuals to organize and manage their tasks effectively. By providing a structured platform for creating and prioritizing tasks, these applications empower users to systematically tackle their daily activities, assignments, and goals.This not only facilitates better time management but also contributes to a more organized and streamlined approach to work. The convenience of accessing these apps across various devices ensures that users can stay organized and on track, whether they are at their desk, on the move, or working remotely.
          </p>
          <button className='w-[85%] py-4 text-xl rounded-md bg-gradient-to-r from-sky-500 to-indigo-500'>Get started</button>
        </div>
        <div className='w-1/2 flex justify-end'>
          <img src={heroImg} alt="bg-img" className="rounded-l-lg w-[90%]"/> 
        </div>
    </div>
  )
}

export default Hero;