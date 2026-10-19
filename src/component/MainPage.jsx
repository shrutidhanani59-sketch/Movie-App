// import Reducer from "../Redux/reducer";
import { GetData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import main from "../assets/main.png";

function MainPage() {

    const API = "https://ghibliapi.vercel.app/films";
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const [search , setSearch] = useState("");
    useEffect(() => {
        fetch(API).then((res) => {
            res.json().then((data) => {
                dispatch(GetData(data));

            });
        });
    }, [dispatch])

    

    return (

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
            <div className="nav  " style={{width : "100%"}}>
                <div className="logo">
                    <img  src={logo} alt="" />
                </div>

                <div className="search px-3 py-1">
                    <input type="text" placeholder="Search Movie..." 
                    onChange={(e)=>{setSearch(e.target.value)}}
                    />
                </div>

                <div className="logout">
                    <button>Logout</button>
                </div>
            </div>
            <div>


                <div className="container py-5">
                    <h1 className="text-center mb-3 fw-bold name">
                       Discover <span> Movie</span>
                    </h1>
                    <p>Explore amazing stories from studio Ghibli</p>

                    <div className="row g-4">
    {movies.filter((element)=>{
        return element.title.toLowerCase().includes(search.toLowerCase());
    }) .map((movie) => (
        <div className="col-12 col-sm-6 col-lg-4" key={movie.id}>
            <div
                className="card h-100 overflow-hidden rounded-4 border shadow-lg"
                style={{backgroundColor : "rgba(7,18,37,0.9)" }}
            >
                {/* Movie Image */}
                <div className="position-relative overflow-hidden">
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="card-img-top"
                        style={{height : "250px"}}
                    />

                    {/* Release Year */}
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

                    {/* Image Overlay */}
                    <div
                        className="position-absolute bottom-0 start-0 w-100"
                        style={{
                            height: "65px",
                            background:
                                "linear-gradient(transparent, #0D172B)",
                        }}
                    />
                </div>

                {/* Card Content */}
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

                    {/* Movie Information */}
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

                    {/* Explore Button */}
                    <button
                        className="btn w-100 mt-4 rounded-pill fw-bold"
                       style={{backgroundColor : "#F97316"}}
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