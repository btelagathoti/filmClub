import {useState,React} from "react";

const Signup = () =>{

    const [fullname, setFullname]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    console.log(setFullname);
    return (
        <form> 
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
        </form>
    )
}

export default Signup;