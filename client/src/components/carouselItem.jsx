import star from "/src/assets/star_icon.svg";
import emptyStar from "/src/assets/empty_star_icon.svg";

const CarouselItem = ({ person }) => {
  return (
    <div className="bg-stone-800 flex flex-col py-4 md:py-8 px-4 rounded-md shadow-md gap-y-4 md:gap-y-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={person.img} alt={`${person.name}-img`} 
             />  
          </div> 
          <p className="font-bold text-lg md:text-xl text-white self-start py-[12px] max-w-[90px]">{person.name}</p>
        </div>
        <div className="flex justify-center items-center gap-x-1">
          {calcReviewStars(person.mark)}
        </div>
      </div>
      <p className="text-justify">
        {person.reviewText}
      </p>
    </div>
  );
};

function calcReviewStars(mark) {
  const maxMark = 5;
  const result = [];
  const imgClass = "w-[18px] md:w-[25px]";
  for (let i = 0; i < maxMark; i++) {
    if (i < mark) {
      result.push(<img src={star} alt="star-img" className={imgClass} key={i}/>);
    } else {
      result.push(<img src={emptyStar} alt="star-img" className={imgClass} key={i}/>);
    }
  }
  return result;
}

export default CarouselItem;
