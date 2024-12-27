import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbarr";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = () => {
    if (username === "admin" && password === "1234") {
      document.cookie =
        "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
      let timerInterval;
      Swal.fire({
        title: "موفق",
        html: " ورود تا  <b></b> ثانیه دیگر ",
        timer: 1000,
        color: "#FF7400",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      navigate("/panel");
    } else {
      Swal.fire({
        title: "ناموفق!",
        text: "نام کاربری یا پسورد اشتباه است",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span className="login100-form-title">ورود</span>

              <div
                className="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="نام کاربری"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="پسورد"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100"></span>
              </div>

              <div
                style={{ margin: "30px 0 0 0" }}
                className="container-login100-form-btn"
              >
                <button
                  className="login100-form-btn"
                  type="button"
                  onClick={submitHandler}
                >
                  ورود
                </button>
              </div>

              <div className="flex-col-c p-t-170 p-b-40">
                <span className="txt1 p-b-9">آیا حساب کاربری ندارید؟</span>

                <Link href="#" className="txt3">
                  همین الان ثبت نام کنید
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
