import CarouselItem from "./carouselItem";
import personImg1 from "/src/assets/person1.avif"
import personImg2 from "/src/assets/person2.avif"
import personImg3 from "/src/assets/person3.avif"
import personImg4 from "/src/assets/person4.avif"
import personImg5 from "/src/assets/person5.jpeg"


const data = [
  {
    img: personImg1,
    name: "John Smith",
    mark: 5,
    reviewText:
      "The Todolist app boasts a sleek and intuitive design that makes task management a breeze. Navigating through the app is smooth and user-friendly, allowing me to quickly add, organize, and prioritize tasks without any hassle.",
  },
  {
    img: personImg2,
    name: "Rachel Kim",
    mark: 5,
    reviewText:
      "One of the standout features of the Todolist app is its seamless synchronization across multiple devices. Whether I'm on my computer, tablet, or smartphone, my task list is always up-to-date. This cross-platform functionality ensures that I can stay organized and productive no matter where I am.",
  },
  {
    img: personImg3,
    name: "Alex Thompson",
    mark: 4,
    reviewText:
      "The app offers a high degree of customization, allowing me to tailor my task lists to suit my specific needs. With various sorting options, tags, and due dates, I can organize my tasks in a way that makes the most sense for my workflow. This flexibility is a game-changer for staying organized.",
  },
  {
    img: personImg4,
    name: "Brandon Taylor",
    mark: 5,
    reviewText:
      "Todolist excels in keeping me on track with its timely reminders and notifications. The ability to set reminders for specific tasks ensures that nothing falls through the cracks. This feature has significantly improved my productivity by helping me stay focused on important deadlines.",
  },
  {
    img: personImg5,
    name: "Ethan Mitchell",
    mark: 5,
    reviewText:
      "Whether working on a project with colleagues or sharing a to-do list with family members, the collaboration features of Todolist are outstanding. The app allows for easy task sharing and collaborative editing, fostering teamwork and ensuring everyone is on the same page when it comes to completing tasks and achieving goals.",
  },
];


const ReviewsContainer = () => {

  return (
    <div className="w-full grid grid-flow-col auto-cols-[85%] md:auto-cols-[35%] gap-x-5 overflow-x-auto py-4 mb-8 review-container">
        {data.map(item => <CarouselItem person={item} key={item.name.replace(/\s+/, "") }/>)}
    </div>
  );
}

export default ReviewsContainer;