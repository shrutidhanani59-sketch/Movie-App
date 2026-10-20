import { useState } from "react";
import main from "../assets/main.png";

function form (){

    const [title , setTitle] = useState("");
    const [year , setYear] = useState("");
    const [director , setDirector] = useState("");
    const [producer , setProducer] = useState("");
    const [description , setDescription] = useState("");
    return(
            <div
         className="min-h-screen bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${main})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
           height : "100vh"
           
       }}
       >
            <div className="formBox">
                <h1 className="text-white fw-bold text-center mt-4 mb-3">+ ADD MOVIE</h1>

                <lable className="text-white ">Movie Title</lable><br/>
                <input type="text" placeholder="Enter Movie title" onChange={(e)=>{setTitle(e.target.value)}}/><br/><br/>

                <lable className="text-white " >Release Year</lable><br/>
                <input type="text" placeholder="e.g.2024" onChange={(e)=>{setYear(e.target.value)}} /><br/><br/>

                <lable className="text-white ">Director</lable><br/>
                <input type="text" placeholder="Director name" onChange={(e)=>{setDirector(e.target.value)}}/><br/><br/>

                <lable className="text-white ">Producer</lable><br/>
                <input type="text" placeholder="Producer name" onChange={(e)=>{setProducer(e.target.value)}} /><br/><br/>

                <lable className="text-white ">Description</lable><br/>
                <input type="text" placeholder="Write about the movie..." onChange={(e)=>{setDescription(e.target.value)}}/><br/><br/>

                <button>+ Add Movie</button>

            </div>
       </div>
    )
}

export default form;