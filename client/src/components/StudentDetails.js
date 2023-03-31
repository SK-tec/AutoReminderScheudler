import { useEffect } from "react";
import axios from '../axiosInstance';

const StudentDetails = () => {
  useEffect(() => {
    axios.get("/api/students").then((res) => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.res.data);
    })
  });

  return (
    <>
      <h2>Hello </h2>
    </>
  );
};

export default StudentDetails;
