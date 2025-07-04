import React from "react";


const Backendwork =()=>{
    return (
        <div className="container">
            <form action="fileupload" method="post" encType="multipart/form-data">
                <input type="file" name="filetoupload"></input>
                <input type="submit">Submit</input>
            </form>
            {/* <form>
                <label>Name: 
                    <input className="Name"type="text" id="Name"></input>
                </label>
                <label>Email: 
                    <input className="email" type="email" id="Email"></input>
                </label>
                <label>Lucky Number: 
                    <input className="LuckyNumber" type="number" id="LuckyNumber"></input>
                </label>
                <button className="Save" type="submit" >Save</button>
            </form> */}
        </div>
    )
}

export default Backendwork;