import {useRef,React} from 'react';
import "./contact.css"
import "./commonStyle.css"

const Contact = () => {
    const inputElement = useRef();

    const inputFocus= () =>{
        inputElement.current.focus();
    }
    return (
        <div>
            <div>
                <div className='contactUs_block'>
                    <h1>Get In Touch</h1>
                    <p>Have any Questions or Feedback of our service</p>
                    <p>We'd love to hear from you</p>
                    <form>
                    <input className="nameFromContactUs form" ref={inputElement} id="nameFromContactUs" type="text" placeholder='Full Name'></input>
                    <input className="emailFromContactUs form" ref={inputElement} id="emailFromContactUs" type="email" placeholder='Enter E-mail'></input>
                    <input className="messageFromContactUs form" ref={inputElement} id="messageFromContactUs" type="text" placeholder='Type your Message'></input>
                    <button className="" onClick={inputFocus} type="submit">Message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;