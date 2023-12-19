import React from "react";
import swal from "sweetalert2";
const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    swal
      .fire({
        title: "Are you sure?",
        showDenyButton: true,
        confirmButtonText: "logout",
        denyButtonText: `cancel`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("is_authenticated", false);
          swal
            .fire({
              position: "center",
              icon: "success",
              title: "logged out successfully",
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              setIsAuthenticated(false);
            });
        } else if (result.isDenied) {
        }
      });
  };
  return (
    <div className="container py-3 px-2 flex justify-end ">
      <button
        className="bg-indigo-500 hover:bg-indigo-600 duration-500 px-8 py-2 rounded-md text-white font-semibold shadow-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
