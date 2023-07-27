import './App.css';
import { useState ,useEffect} from 'react';
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] =useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:5000/api/users").then((response)=>{
          setListOfUsers(response.data);
    });
  },[]) ;
  return (
    <div className="App">
        <div className="UsersDisplay">
            {listOfUsers.map((user)=>{
              return (
                <div>
                  <h1>Name: {user.username}</h1>
                  <h1>Email: {user.email}</h1>
                  {/* <h1>Name: {user.name}</h1> */}
                </div>
               );
            })}
        </div>
    </div>
  );
}

export default App;
 