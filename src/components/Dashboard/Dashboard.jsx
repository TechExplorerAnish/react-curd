import Logout from "../Logout";
import Header from "./Header";
import Table from "./Table";
// import students from "../../../data";
import { useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

const Dashboard = ({ setIsAuthenticated }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [selectedDataForEdit, setSelectedDataForEdit] = useState([]);
  useEffect(() => {
    const savedStudentData = JSON.parse(localStorage.getItem("students"));
    if (savedStudentData) {
      setStudentData([...savedStudentData]);
    } else {
      localStorage.setItem("students", JSON.stringify([]));
    }
  }, []);

  const handleAdd = (newStudentData) => {
    const savedStudentData = JSON.parse(localStorage.getItem("students"));

    if (savedStudentData) {
      savedStudentData.push(newStudentData);
      localStorage.setItem("students", JSON.stringify(savedStudentData));
      setStudentData(savedStudentData);
    }
  };

  const handleDelete = (id) => {
    const remainingStudent = [...studentData].filter(
      (std) => std.rollNo !== id
    );
    localStorage.setItem("students", JSON.stringify(remainingStudent));
    setStudentData(remainingStudent);
  };
  const handleEdit = (editedData, index) => {
    console.log(index);
    let data = [...studentData];
    data[index] = editedData;
    localStorage.setItem("students", JSON.stringify(data));
    setStudentData(data);
  };
  const callEdit = (selectedData, ind) => {
    selectedData.index = ind;
    setSelectedDataForEdit(selectedData);
    setIsEditing(true);
  };
  return (
    <>
      <Header />
      {isAdding && <Add setIsAdding={setIsAdding} handleAdd={handleAdd}></Add>}
      {isEditing && (
        <Edit
          setIsEditing={setIsEditing}
          handleEdit={handleEdit}
          selectedDataForEdit={selectedDataForEdit}
        ></Edit>
      )}
      {!isAdding && !isEditing && (
        <>
          <div className="flex justify-between px-4 lg:px-12">
            <h1 className="text-gray-500 font-semibold">Student Details</h1>
            <span>
              <span className="mr-3 font-semibold">Add new Student</span>
              <button
                onClick={(e) => setIsAdding(true)}
                className="bg-blue-500 hover:bg-blue-600 duration-300 p-1 text-white font-bold  rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </span>
          </div>
          <Table>
            {studentData.map((std, ind) => {
              return (
                <tr key={ind}>
                  <td className="px-4 py-3">{ind + 1}</td>
                  <td className="px-4 py-3">{`${std.firstName} ${std.lastName}`}</td>
                  <td className="px-4 py-3">{std.stdClass}</td>
                  <td className="px-4 py-3 ">{std.rollNo}</td>
                  <td className="px-4 py-3 ">{std.age}</td>
                  <td className="px-4 py-3 ">{std.gender}</td>
                  <td className="px-4 py-3 ">{std.email}</td>
                  <td className="px-2 py-3 ">
                    <button onClick={(e) => callEdit(std, ind)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-2 py-3 ">
                    <button onClick={(e) => handleDelete(std.rollNo)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </Table>
          <Logout setIsAuthenticated={setIsAuthenticated}></Logout>
        </>
      )}
    </>
  );
};

export default Dashboard;
