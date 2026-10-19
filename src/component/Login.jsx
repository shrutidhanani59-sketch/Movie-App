import { useState } from "react";
import loginImg from "../assets/loginImg.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const Email = "shruti@gmail.com";
    const Password = "123";


    const handelsubmit = (e) => {
        e.preventDefault();

        if (email == Email) {
            if (password == Password) {
                localStorage.setItem("token", "Login");
                navigate("/main");
            }

        }
        return;

    }

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${loginImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="color  pt-5 ">

                <div className="form border p-4  " >
                    <img className="logo " src={logo} alt="" />
                    <h1 className="  text-white  p-4"> Welcome  CineVerse </h1>

                    <form className="mt-3" onSubmit={handelsubmit}>
                        <label className=" fs-3 text-white">Email</label><br />
                        <input className="px-2 py-2" type="email" placeholder="Enter Your Email"
                            onChange={(e) => { setEmail(e.target.value) }} /><br />

                        <label className=" fs-3 text-white mt-3">Password</label><br />
                        <input className="px-2 py-2" type="password" placeholder="Enter Your Password"
                            onChange={(e) => { setPassword(e.target.value) }} /><br />

                        <button className="px-2 py-2 mt-5 text-white">LogIn</button>
                    </form>

                    <div className="or d-flex  gap-3">
                        <hr className="text-white " />
                        <p className="text-white mt-1 fw-bold">OR</p>
                        <hr className="text-white " />
                    </div>

                 
                     <button className="bg-white ms-4  d-flex gap-2 googleBtn">
                        <img className="google mt-4" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
                        <p className=" mt-4 text-black">Continue With Google</p>
                    </button>

                    <button className="bg-white mt-3 ms-4  d-flex gap-2 googleBtn">
                        <img className="google mt-3" src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png" alt="" />
                        <p className=" mt-3 text-black">Continue With Apple</p>
                    </button>
                   </div>
                </div>
            </div>
       
    );
}

export default Login;