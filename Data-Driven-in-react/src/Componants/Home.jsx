
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../App.css"
import  data from  "../data.js"
const Home = () => {
  
     console.log(data)
  return (
    <div>
        {/* header  */}
      <header className="  bg-[#F55A5A] text-white h-20 flex justify-center items-center font-bold gap-4"> 
       <FaGlobeAmericas className="text-5xl"> </FaGlobeAmericas> 
       <p>My Traveled Journal (May be) </p>
      </header>
      {/* main */}
      <main className="mx-auto w-[50%] mt-10">
        {
          data.map( (data) => 
        {
           return (
             <article key={data.id} className="flex flex-col md:flex-row w-[123%] gap-6 mb-12">
                 <img src={data.img.src} alt={data.img.alt} className="md:w-[50%] w-[100%] rounded " />
                 {/* details */}
                 <div className="flex flex-col justify-center  gap-4">
                     <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-red-500"></FaMapMarkerAlt>
                        <p className="text-[ #2B283A] uppercase ">{data.country}</p> 
                      <a href={data.googleMapsLink} className="text-gray-500 underline">View on Google Map </a>
                     </div>
                     <p className="text-5xl bold">{data.title}</p>
                     <p>{data.dates}</p>
                     <p>{data.text}</p>
                 </div>
                 </article>
           )
        }
    )
                  }
      </main>

    </div>
  )
}

export default Home
