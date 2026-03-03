import React from 'react'

export default function Demo3() {
    const courses = ["OS", "OS", "AWS", "FSAD", "MSWD"]
    const count = courses.length;
    return (
        <div>
            <h1>No. of Courses={count}</h1>
            <table border={1}>
                <tr>
                    <th>S. No.</th>
                    <th>Course</th>
                </tr>
                {
                    courses.map((v, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{v}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
