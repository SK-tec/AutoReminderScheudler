import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosInstance";
import Table from "react-bootstrap/Table";

import UpdateForm from "./UpdateForm";
import moment from "moment";
import DeleteStudent from "./DeleteStudent";

const StudentDetails = () => {
  const [studentData, setStudentData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(isUpdated);

  useEffect(() => {
    axios
      .get("/api/students")
      .then((res) => {
        setStudentData(res.data);
      })
      .catch((error) => {
        console.log(error.res.data);
      });
  }, []);
  useEffect(() => {
    isUpdated &&
      axios
        .get("/api/students")
        .then((res) => {
          setStudentData(res.data);
          setIsUpdated(false);
        })
        .catch((error) => {
          console.log(error.res.data);
        });
    console.log(isUpdated);
  }, [isUpdated]);

  const handleRemove = () => {
    axios
      .delete(`/api/students/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  const column = [
    { heading: "First Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "Class Name" },
    { heading: "Due Fee" },
    { heading: "Due Date" },
    { heading: "Reminder Date" },
    { heading: "Update" },
    { heading: "Delete" },
  ];

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {column.map((student, index) => (
              <th>{student.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.class_name}</td>
              <td>{student.dueFee}</td>
              <td>{moment(student.dueDate).format("MM/DD/YYYY")}</td>
              <td>
                {moment(student.dueDate)
                  .subtract(14, "days")
                  .format("MM/DD/YYYY")}
              </td>
              <td>
                <UpdateForm id={student._id} setIsUpdated={setIsUpdated} />
              </td>
              <td>
                <DeleteStudent id={student._id} setIsUpdated={setIsUpdated} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentDetails;
