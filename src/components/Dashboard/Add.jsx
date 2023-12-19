import React, { useState } from "react";
import swal from "sweetalert2";
const Add = ({ setIsAdding, handleAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [stdClass, setStdClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      age,
      gender,
      stdClass,
      rollNo,
    };
    swal
      .fire({
        title: "data added succesfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      .then(() => {
        handleAdd(data);
        setIsAdding(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 mx-auto mt-10 flex max-w-lg flex-col rounded-lg bg-white p-8 py-16 shadow-lg"
    >
      <h2 className="title-font mb-1 text-lg font-semibold text-gray-900">
        Add new student
      </h2>
      <div className="relative mb-4">
        <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">
          {" "}
          firstName{" "}
        </label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          id="firstName"
          name="firstName"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">
          {" "}
          lastName{" "}
        </label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          id="lastName"
          name="lastName"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="class" className="text-sm leading-7 text-gray-600">
          {" "}
          Class{" "}
        </label>
        <input
          onChange={(e) => setStdClass(e.target.value)}
          value={stdClass}
          type="number"
          id="class"
          name="class"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="rollNo" className="text-sm leading-7 text-gray-600">
          {" "}
          rollNo{" "}
        </label>
        <input
          onChange={(e) => setRollNo(e.target.value)}
          value={rollNo}
          type="number"
          id="rollNo"
          name="rollNo"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="age" className="text-sm leading-7 text-gray-600">
          {" "}
          Age{" "}
        </label>
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          id="age"
          name="age"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="gender" className="text-sm leading-7 text-gray-600">
          {" "}
          Gender{" "}
        </label>
        <div>
          <input
            onChange={(e) => setGender(e.target.value)}
            value={"Male"}
            type="radio"
            id="gender"
            name="gender"
            className="inline-block rounded border border-gray-300 bg-white px-3"
            required
          />
          <span>Male</span>
          <input
            onChange={(e) => setGender(e.target.value)}
            value={"Female"}
            type="radio"
            id="gender"
            name="gender"
            className="inline-block rounded border border-gray-300 bg-white px-3"
          />
          <span>Female</span>
        </div>
      </div>
      <div className="relative mb-4">
        <label htmlFor="Email" className="text-sm leading-7 text-gray-600">
          {" "}
          Email{" "}
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="Email"
          name="Email"
          className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-indigo-700 outline-none transition-colors duration-200 ease-in-out focus:border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>
      <button className="ml-64 min-w-[30%] rounded border-0 bg-blue-500 px-6 py-2 text-lg font-semibold text-white duration-300 hover:bg-blue-600 focus:outline-none">
        add
      </button>
    </form>
  );
};

export default Add;
