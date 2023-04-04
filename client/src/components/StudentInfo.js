import axios from "../axiosInstance";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import UpdateForm from "./UpdateForm";
import moment from "moment";

const StudentInfo = ({ data, column }) => {
    const [student, setStudent] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    axios
      .get(`/api/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((e) => console.log(e));
  }, [id]);

    const handleRemove = () => {
    axios
      .delete(`/api/students/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
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
      {data.map((student, index) => (
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.class_name}</td>
              <td>{student.dueFee}</td>
              <td>{moment(student.dueDate).format("MM/DD/YYYY")}</td>

              <td>
                <UpdateForm id={student._id} />
                {/* <Button variant="link">
                  <i class="bi bi-pencil-square"></i>
                </Button> */}
              </td>
              <td>
                <Button variant="link" onClick={handleRemove}>
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    </> 
    );
}
 
export default StudentInfo;