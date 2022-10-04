import React ,{ useState } from 'react'
import MainPage from '../../components/Layout/MainPage'
import { classes } from '../../data.js'
import Class from './Class'
import { Link } from "react-router-dom";
import "./Class.css"

const Classes = () => {
    const [data, setData] = useState(classes);
  return (
    <MainPage>
            <div className='card-top2'>
                <h2 className='mt-3'>Classes</h2>
                <div className='new-class'>
                   <button className="new-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to="/classes/new">New class</Link></button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Course</th>
                            <th scope="col">Teacher</th>
                            <th scope="col">Location</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {       
                            data?.map((item, index)=> <Class key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Classes