// import Reducer from "../Redux/reducer";
// import { GetData , AddData } from "../Redux/action";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import main from "../assets/main.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainPage() {

    const API = "https://ghibliapi.vercel.app/films/";

    const [data, setData] = useState([]);
    const addedMovies = useSelector((state) => state.movies);
     const [search, setSearch] = useState("");

    const allmovie = [...data, ...(addedMovies)];

    const filterMovie = allmovie.filter((element)=>{
        return element.title.toLowerCase().includes(search.toLowerCase());
    })
    useEffect(() => {
        axios.get(API).then((res) => {
            setData(res.data);
        });
    }, [])

    const navigate = useNavigate();

    const AddBtn = () => {
        navigate("/form");
    }


    return (

        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${main})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
               minHeight: "100vh",

            }}
        >
            <div className="nav  " style={{ width: "100%" }}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="search px-3 py-1">
                    <input type="text" placeholder="Search Movie..."
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>

                <div className="buttons">
                    <button className="add" onClick={AddBtn}>+ Add Movie</button>

                    <button className="logoutBtn" onClick={() => {
                        localStorage.removeItem("token");
                        location.href = "/";
                    }}>Logout</button>
                </div>
            </div>
            <div>


                <div className="container py-5">
                    <h1 className="text-center mb-3 fw-bold name">
                        Discover <span> Movie</span>
                    </h1>
                    <p>Explore amazing stories from studio Ghibli</p>

                    <div className="row g-4">
                       {(filterMovie.length===0)?
                        <div className="col-12 text-center py-5">
           
            <h2 className="text-white fw-bold">
                🎬 Movie Not Found!
            </h2>

            <p className="text-light">
                "{search}" is Not Exit.
            </p>

            <button
                className="btn rounded-pill px-4"
                style={{
                    backgroundColor: "#F97316",
                    color: "#071225"
                }}
                onClick={() => setSearch("")}
            >
                Show All Movies
            </button>
        </div> : 
                        filterMovie.map((movie) => (
                            <div className="col-12 col-sm-6 col-lg-4" key={movie.id}>
                                <div
                                    className="card h-100 overflow-hidden rounded-4 border shadow-lg"
                                    style={{ backgroundColor: "rgba(7,18,37,0.9)" }}
                                >

                                    <div className="position-relative overflow-hidden">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="card-img-top"
                                            style={{ height: "250px" }}
                                        />


                                        <span
                                            className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 fw-bold"
                                            style={{
                                                backgroundColor: "rgba(7,18,37,0.9)",
                                                color: "#FDBA74",
                                                border: "1px solid #F97316",
                                                fontSize: "12px",
                                            }}
                                        >
                                            🎬 {movie.release_date}
                                        </span>


                                        <div
                                            className="position-absolute bottom-0 start-0 w-100"
                                            style={{
                                                height: "65px",
                                                background:
                                                    "linear-gradient(transparent, #0D172B)",
                                            }}
                                        />
                                    </div>


                                    <div className="card-body d-flex flex-column p-4">
                                        <h5
                                            className="card-title fw-bold mb-3"
                                            style={{
                                                color: "#FFFFFF",
                                                fontSize: "21px",
                                            }}
                                        >
                                            {movie.title}
                                        </h5>

                                        <p
                                            className="card-text mb-4"
                                            style={{
                                                color: "#C7D2E0",
                                                fontSize: "13px",
                                                lineHeight: "1.8",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 4,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {movie.description}
                                        </p>


                                        <div
                                            className="mt-auto pt-3"
                                            style={{
                                                borderTop: "1px solid rgba(255,255,255,0.12)",
                                            }}
                                        >
                                            <p className="mb-2" style={{ fontSize: "13px" }}>
                                                <span style={{ color: "#F97316" }}>🎬 Director:</span>{" "}
                                                <span className="text-light">
                                                    {movie.director}
                                                </span>
                                            </p>

                                            <p className="mb-0" style={{ fontSize: "13px" }}>
                                                <span style={{ color: "#F97316" }}>⭐ Producer:</span>{" "}
                                                <span className="text-light">
                                                    {movie.producer}
                                                </span>
                                            </p>
                                        </div>


                                        <button
                                            className="btn w-100 mt-4 rounded-pill fw-bold"
                                            style={{ backgroundColor: "#F97316" }}
                                        >
                                            Explore Movie
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPage;