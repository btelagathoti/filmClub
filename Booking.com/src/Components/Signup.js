import {useState,React} from "react";

const Signup = () =>{

    const [fullname, setFullname]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    
    const collectData = async (e) => {
        alert("i am started")
        e.preventDefault();
        let result = await fetch('http://localhost:3000/',{
            method: 'post',
            body: JSON.stringify({fullname, email, password}),
            headers:{
                'content-Type' : 'application/json'
            },
            
        });
        result = await result.json;
        localStorage.setItem("user", JSON.stringify(result));
    }
    return (
        <form onSubmit={collectData}> 
            <label> Enter fullname: 
                <input type='text' 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                />
            </label>
            <label> Enter Email: 
                <input type='text' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label> Enter password: 
                <input type='text' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit"> Submit</button>
        </form>
    )
}

export default Signup;