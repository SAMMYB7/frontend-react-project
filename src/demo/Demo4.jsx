import React, { useState } from 'react'
import empdata from "./data.json"

export default function Demo4() {
    const [data, setData] = useState(empdata);
    return (
        <div>
            <table border={2} cellPadding={5}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
                {
                    data.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
