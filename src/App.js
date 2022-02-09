import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import { Profile } from './Profile';
import { Main } from './Main'

function App() {
  return (
    <>
      <div class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">My test</a>
          </div>
          <ul class="nav navbar-nav d-flex justify-content-around flex-row ">
            <li style={{ marginRight: 10 }} ><a href="/login">Login</a></li>
            <li style={{ marginRight: 10 }} ><a href="/profile">Profile</a></li>
            <li onClick={() => localStorage.clear()} style={{ marginRight: 10 }} ><a href="/">Log out</a></li>

          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;