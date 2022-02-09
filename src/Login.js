import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const clientId = process.env.REACT_APP_CLIENT_ID



function Login() {
    let navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    localStorage.setItem('myoauth', JSON.stringify(res.profileObj))
    // navigate("/profile", { state:  res.profileObj  })
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (

    <div class="container">
    <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
        </div>
    </div>
</div>
   
  );
}

export default Login;