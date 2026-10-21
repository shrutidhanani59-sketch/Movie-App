import { useState } from "react";
import main from "../assets/main.png";
import { useDispatch } from "react-redux";
import { AddData} from "../Redux/action"
import { useNavigate } from "react-router-dom";

function form (){

    const [title , setTitle] = useState("");
    const [year , setYear] = useState("");
    const [director , setDirector] = useState("");
    const [producer , setProducer] = useState("");
    const [description , setDescription] = useState("");
    const [img , setImg] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleadd = (e)=>{
        e.preventDefault();

        const newmovie = {
    id: Date.now(),
    title: title,
    release_date: year,
    director: director,
    producer: producer,
    description: description,
    img: img
};
        dispatch(AddData(newmovie));
        navigate ('/main');
    }
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
                <h1 className="text-white fw-bold text-center mt-4 mb-4">🎬 + ADD MOVIE</h1>

                <label className="text-white ">Image URL</label>
                <input type="text" placeholder="Enter Img URL" onChange={(e)=>{setImg(e.target.value)}}/>

                <label className="text-white mt-4 ">Movie Title</label><br/>
                <input type="text" placeholder="Enter Movie title" onChange={(e)=>{setTitle(e.target.value)}}/><br/><br/>

                <label className="text-white " >Release Year</label><br/>
                <input type="text" placeholder="e.g.2024" onChange={(e)=>{setYear(e.target.value)}} /><br/><br/>

                <label className="text-white ">Director</label><br/>
                <input type="text" placeholder="Director name" onChange={(e)=>{setDirector(e.target.value)}}/><br/><br/>

                <label className="text-white ">Producer</label><br/>
                <input type="text" placeholder="Producer name" onChange={(e)=>{setProducer(e.target.value)}} /><br/><br/>

                <label className="text-white ">Description</label><br/>
                <input type="text" placeholder="Write about the movie..." onChange={(e)=>{setDescription(e.target.value)}}/><br/><br/>

                <button onClick={handleadd}>+ Add Movie</button>

            </div>
       </div>
    )
}

export default form;