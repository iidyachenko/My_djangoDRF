import React from 'react'
import {Link} from 'react-router-dom'


const ToDoItem = ({todo}) => {
   return (
       <tr>
           <td>
               {todo.user}
           </td>
           <td>
               <td><Link to={`project/${todo.project}`}>{todo.project}</Link></td>
           </td>
           <td>
               {todo.created}
           </td>
           <td>
               {todo.text}
           </td>
       </tr>
   )
}

const ToDoList = ({todo}) => {
   return (
       <table>
           <th>
               User
           </th>
           <th>
               Project name
           </th>
           <th>
               Created
           </th>
           <th>
               Text
           </th>
           {todo.map((todo) => <ToDoItem todo={todo} />)}
       </table>
   )
}


export default ToDoList