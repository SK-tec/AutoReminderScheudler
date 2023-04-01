import axios from '../axiosInstance';
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Table = ({data, column}) => {
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
            {column.map((item, index) => <TableHeadItem item={item}/>)}
            </tr>
        </thead>
        <tbody>
            {/*{data.map((item, index) => <TableRow item={item}/>)}*/}
            {data.map((item, index) =><tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.class_name}</td>
            <td>{item.dueFee}</td>
            <td>{item.dueDate}</td>
            <td>
            <Link to={`/registerForm` }>
              <button >Update</button>
            </Link>
            </td>
            <td>
              <button onClick={handleRemove}  >Delete</button>
            </td>
              
            </tr> )}
        </tbody>
      </table>
    </div>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

