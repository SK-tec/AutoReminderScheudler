import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosInstance";
import FeeUpdateForm from "./FeeUpdateForm";
import StudentInfo from "./StudentInfo";

const StudentDetails = ({ data }) => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/students")
      .then((res) => {
        /*console.log(res.data);*/
        setStudentData(res.data);
      })
      .catch((error) => {
        console.log(error.res.data);
      });
  }, []);

  const column = [
    { heading: "First Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "Class Name" },
    { heading: "Due Fee" },
    { heading: "Due Date" },
    { heading: "Update" },
    { heading: "Delete" },
  ];

  return (
    <>
      <StudentInfo data={studentData} column={column}/>
      
    </>
  );
};

export default StudentDetails;
