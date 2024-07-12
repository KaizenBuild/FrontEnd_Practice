import React from 'react'
import { UserData } from '../data/UserData';

const PropUserData = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Job Role</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {UserData.map((user, index) => (
                        <Box key={index} prop={user} />
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default PropUserData;


const Box = ({ prop }) => {
    const { fname, lname, id, roles, address } = prop;

    return (
        <tr>
            <td>{id}</td>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{roles}</td>
            <td>{address}</td>
        </tr>
    );
}