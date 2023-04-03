import axios from "../axiosInstance";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import UpdateForm from "./UpdateForm";
import moment from "moment";

export const Table = ({ data, column }) => {
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
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            {column.map((student, index) => (
              <TableHeadItem student={student} />
            ))}
          </tr>
        </thead>
        <tbody>
          {/*{data.map((item, index) => <TableRow item={item}/>)}*/}
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
      </table>
    </div>
  );
};

const TableHeadItem = ({ student }) => <th>{student.heading}</th>;
