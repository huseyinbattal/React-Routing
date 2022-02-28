import logo from './logo.svg';
import './App.css';
import { Link, NavLink, Routes, Route } from "react-router-dom";
import PersonDetail from './components/PersonDetail';
const userIds = [1, 3, 5, 7, 123]

function App() {
  return (
    <div className="App">
      <Link to="/Link1">First Link</Link> |{" "}
      <Link to="/Link2" style={{ display: "block", color: "yellowgreen" }}>Second Link</Link>
      <NavLink to="/ActiveLink">Active Link Test</NavLink>
      {userIds.map((id, index) => (
        <Link key={index} to={`/PersonDetail/${id}`}><br />User {index}</Link>
      ))}
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route index element={<h1>Home Page</h1>} />
        <Route path='/ActiveLink' style={({ isActive }) => {
          return {margin:"1rem 0", color: isActive ? "red" : "gray"}
        }} element={<h1>ActiveLink Page</h1>} />
        <Route path='/Link2' element={<h1>Link2 Page</h1>} />
        <Route path='PersonDetail/:personId' element={<PersonDetail />}></Route>
        <Route path='*' element={<h1>There's nothing here!<br /><b>404 Not Found!</b></h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
