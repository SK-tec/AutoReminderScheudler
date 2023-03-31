import { useEffect, useState } from "react";
import axios from '../axiosInstance';

const StudentDetails = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios.get("/api/students").then((res) => {
      /*console.log(res.data);*/
      setStudentData(res.data);
    }).catch(error => {
      console.log(error.res.data);
    })
  }, []);

  console.log(studentData[0]?.firstName);

  return (
    <>
      {studentData.map(student => 
        student.firstName
      )};
    </>
  );
};

export default StudentDetails;
