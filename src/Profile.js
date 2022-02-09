import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const Profile = (props) => {
    const location = useLocation()
    let navigate = useNavigate();

    const details = JSON.parse(localStorage.getItem('myoauth'))

    const [data, setData] = useState(location.state)

    useEffect(() => {
       
        if (!details) {
            navigate('/login')
            alert('not authorized')
        } else {
            setData(details)
        }
    },[])

    return (
        <div class="container">
            <div class="main-body">

              
                <nav aria-label="breadcrumb" class="main-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav>
            
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User" class="rounded-circle" width="150" />
                                    <div class="mt-3">
                                        <h4>{''}</h4>
                                        <p class="text-secondary mb-1">{ data && `ID:  ${data.googleId}`}</p>
                                        <p class="text-muted font-size-sm">{''}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {data && `${data.familyName} ${data.givenName}`}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {data && `${data.email}`}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {data &&`${data.name}`}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )


}