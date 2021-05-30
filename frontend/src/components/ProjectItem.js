import React from "react";
import { useParams } from 'react-router-dom'


const Project = ({projects}) => {
    let { name } = useParams();
    let filtered_item = projects.filter(item => item.name == name)[0]
    return (


       <table>
           <th>
               {filtered_item.name}
           </th>
           <th>
               {filtered_item.repository_url}
           </th>
           <th>
               {filtered_item.users}
           </th>
       </table>

   )
}

export default Project