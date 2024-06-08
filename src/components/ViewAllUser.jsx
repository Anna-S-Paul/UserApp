import React, { useEffect, useState } from 'react'
import NavUser from './NavUser'
import axios from 'axios'

const ViewAllUser = () => {
    const [data,setData] = useState([])
    const fetchData=()=>{
       axios.get("https://jsonplaceholder.typicode.com/users").then(
        (response)=>{
          setData(response.data)
        }
       ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavUser />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone no</th>
                                    <th scope="col">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.username}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.website}</td>
                                            
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllUser