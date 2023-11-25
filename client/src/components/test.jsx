import CarouselItem from "./carouselItem";
import personImg1 from "/src/assets/person1.avif"
import "/src/App.css"
const Test = () => {

  return (
    <div className="w-full grid grid-flow-col auto-cols-[85%] md:auto-cols-[35%] gap-x-5 overflow-x-auto py-4 mb-8 review-container">
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's helps me to beter organize my life",
          }}
        />
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's help me to beter organize my life",
          }}
        />
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's help me to beter organize my life",
          }}
        />
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's help me to beter organize my life",
          }}
        />
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's help me to beter organize my life",
          }}
        />
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's help me to beter organize my life",
          }}
        />
        <CarouselItem
          person={{
            img: personImg1,
            name: "John Smith",
            mark: 4,
            reviewText:
              "This is very usefull application, it's help me to beter organize my life",
          }}
        />
    </div>
  );
}

export default Test;