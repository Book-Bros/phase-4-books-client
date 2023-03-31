
import {React, useState} from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from "../navbar/Navbar";


export default function Profile() {
    let takeaway = useNavigate()
    const [newPass, setNewPass] = useState("")
        // console.log("Logged out")

        function Logout(){
            fetch('https://booksapi-73rd.onrender.com/users/logout')
            .then(() => takeaway('/'))
        }

        function handleupdate(e){
            e.preventDefault()
            fetch('https://booksapi-73rd.onrender.com/users/update-password', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newPass)
            })
        }


    return (
        <div>
            <Navbar />
            <div>
            <h2>Update Password:</h2>
            <form onSubmit={(e) => handleupdate(e)}>
                <input type="password" required value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                <input type="submit" value="Update"/>
            </form>
        </div>
        
            <h1>Profile</h1>
            <button onClick={() => Logout()}>logout</button>


        </div>
    )
}
