import React, { useState } from 'react'
import MainPage from '../../components/Layout/MainPage'
import Location from './Location'
import "./Location.css"
import { Link } from "react-router-dom";
import { getLocations } from '../../api/locationApi';

const Locations = () => {
    const [data, setData] = useState();
    React.useEffect(()=>{
        getLocations().then(d=>{
            console.log(d)
            setData(d)})
        
    },[])
  return (
        <MainPage>
            <div className='card-top'>
                <h2 className='mt-5'>Locations</h2>
                    <div className='import-csv'>
                        <button className="import-btn"><Link style={{ textDecoration: 'none', color: '#363949'}} to="/locations/import">Import CSV</Link></button>
                    </div>
                    <div className='import-csv'>
                        <button className="import-btn"><Link style={{ textDecoration: 'none', color: '#363949'}} to="/locations/new">Add Location</Link></button>
                    </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">CreatedAt</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index)=> <Location key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Locations