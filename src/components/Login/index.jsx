import { useState } from "react";
import swal from "sweetalert2";
const Login = ({ setIsAuthenticated }) => {
  const userEmail = "user@example.com";
  const userPassword = "*#@password1235*#";
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("*#@password1235*#");
  const handleLogin = (e) => {
    e.preventDefault();
    if (userPassword === password && userEmail === email) {
      localStorage.setItem("is_authenticated", true);
      swal
        .fire({
          position: "center",
          icon: "success",
          title: "logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        })
        .then(() => {
          setIsAuthenticated(true);
        });
    } else {
      swal.fire({
        icon: "warning",
        title: "Either Email or Password is incorrect!!",
        showConfirmButton: true,
      });
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className=" relative py-16  z-10 mt-10 flex flex-col rounded-lg bg-white p-8 shadow-lg mx-auto   max-w-md "
    >
      <h2 className="title-font mb-3 text-3xl text-center font-semibold text-gray-900">
        Admin login
      </h2>
      <div className="relative mb-4">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full  rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="text-sm leading-7 text-gray-600">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out  focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button className="rounded border-0 bg-blue-500 px-6 py-2 text-lg font-semibold text-white hover:bg-blue-600 focus:outline-none mx-auto min-w-[50%] duration-300">
        login
      </button>
    </form>
  );
};

export default Login;
