/* eslint-disable react/prop-types */
function ChapterCard({ location, members, image }) {
  // border-2  rounded-2xl
  return (
    <div className="flex flex-col items-center justify-center h-80" style={{ 'background-image': `url(${image}`, "background-size": "cover" }}>
      <h2 className="text-base font-medium capitalize my-2">{location}</h2>
      <p className="text-base text-center leading-6">{members}</p>
      <button className="py-2 px-12 border-2 border-solid my-8 rounded-lg flex items-center justify-center text-xs capitalize transition-all duration-300 ease-in hover:text-white hover:bg-[#009975]">
        JOIN
      </button>
    </div>
  );
}

export default ChapterCard;
