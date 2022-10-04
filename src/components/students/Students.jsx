import React ,{ useState } from 'react'
import MainPage from '../../components/Layout/MainPage'
import Student from './Student'
import { Link } from "react-router-dom";
import "./Students.css"
import { getAllLocation, getAllStudent } from '../../api/studentApi';

const Students = () => {
    const [data, setData] = useState();
    React.useEffect(()=>{
        getAllStudent().then(d=>{setData(d)})
        
    },[])
  return (
    <MainPage>
            <div className='card-top-student'>
                <h2 className='mt-3'>Students</h2>
                <div className="new-student">
                    <button className="new-student-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to="/students/new">New student</Link></button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Note</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {       
                            data?.map((item, index)=> <Student key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Students