import React from 'react'

const ProjectItem = ({project}) => {
   return (
       <tr>
           <td>
                {project.name}
           </td>
           <td>
               {project.repository_url}
           </td>
           <td>
               {project.users}
           </td>
       </tr>
   )
}

const ProjectList = ({projects}) => {
   return (
       <table>
           <th>
               Project name
           </th>
           <th>
               Project Url
           </th>
           <th>
               Users
           </th>
           {projects.map((project) => <ProjectItem project={project} />)}
       </table>
   )
}


export default ProjectList
