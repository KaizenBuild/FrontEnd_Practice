import React from 'react'

const PropDestructuring = (prop) => {
    let {fname, lname, id, role, add} = prop

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID No</th>
                <th>Job Role</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{id}</td>
                <td>{role}</td>
                <td>{add}</td>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default PropDestructuring
