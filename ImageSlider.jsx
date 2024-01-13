import { useState } from "react";

const data = [
"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=sph",
"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
"https://static.vecteezy.com/system/resources/thumbnails/033/924/962/small/beautiful-mountains-and-flowers-are-reflected-in-the-water-ai-generated-photo.jpg",
"https://static.vecteezy.com/system/resources/thumbnails/033/614/103/small/the-sun-rises-over-a-lake-and-flowers-in-the-mountains-ai-generated-photo.jpg",
];

   const Imageslider = () =>{
      const [Imageindex, setImageindex] = useState(0);
   
      const Previousimage = () => {
        if(Imageindex ===0) setImageindex(data.length-1);
        else setImageindex(Imageindex - 1);
      };
      const Nextimage = () => {
        setImageindex((Imageindex + 1)% data.length);
      };
   
    return(
        <div className="flex justify-center">
   <button className="previous"onClick={Previousimage}> Previous </button>
   <img src={data[Imageindex]} width={400} height={300}/>
      <button onClick={Nextimage}> Next </button>
        </div>
    );
};
export default Imageslider;