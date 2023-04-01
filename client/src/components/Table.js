

import axios from '../axiosInstance';

export const Table = ({data, column}) => {
  

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
              <button type="submit">update</button></td>
              
            </tr> )}
        </tbody>
      </table>
    </div>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

