import React from 'react'
import MainPage from '../../components/Layout/MainPage'
import User from './User'
import './Users.css'
import { Link } from "react-router-dom" 
import { getUsers } from '../../api/userApi'


const Users = () => {

    const [data, setData] = React.useState();
    React.useEffect(()=>{
        getUsers().then(d=>{
            console.log(d)
            setData(d)})
        
    },[])
  return (
    <MainPage>
            <div className='card-top' >
                <h2 className='mt-5'>Users</h2>   
                <div className='import-csv'>
                        <button className="import-btn"><Link style={{ textDecoration: 'none', color: '#363949'}} to="/users/import">Import CSV</Link></button>
                    </div>
                <table className='table'>
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index)=> <User key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Users