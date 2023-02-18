import React, { useState } from "react";
import './App.css'




function Form() {

    const [data, setData] = useState("")
    const [info, setInfo] = useState("")
    const [message, setMessage] = useState("Try it free 7 days ₹180/month thereafter")


    const handleMessage = (e) => {
        e.preventDefault(setMessage("You have successfully subscribed to our plan ✓"));
        setData("");
        setInfo("");
    }

    const isValid = !data || !info;
    //console.log(isValid);



    return (
        <>
            <form onSubmit={handleMessage}>
                <div className='one'>
                    <div className='oneA'>Learn to code by watching other's</div>
                    <div className='oneZ'>
                        <div className="x">See how experienced developers solve problem in real time.</div>
                        <div className="y">Watching scripted tutorials is great,but understanding how</div>
                        <div className="z">developers think is invaluable</div>
                    </div>
                    <div className='oneB'>{message}</div>

                    <  div className='oneC'>
                        <input type="text" className='A' value={"Shubham Yadav"} />


                        <input type="text" className='B' Placeholder="Email Address" value={data}
                            onChange={(e) => setData(e.target.value)}
                        />


                        <input type="password" className='C' Placeholder="Password" value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />

                        <div className="m-4 " style={{ width: '286px', backgroundColor: "white" }}>
                            <div className="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" style={{ width: '286px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose Your Skills
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">HTML</a></li>
                                    <li><a class="dropdown-item" href="#">CSS</a></li>
                                    <li><a class="dropdown-item" href="#">JAVASCRIPT</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="a">HTML 
                            <div className="l">x</div>    
                            </div>
                            <div className="a">CSS
                            <div className="m">x</div> 
                            </div>
                            <div className="a">JS
                            <div className="n">x</div></div>
                        </div>
                        {isValid ? (
                            <button type="submit" disabled={isValid} className="E">CLAIM YOUR FREE TRIAL</button>
                        ) : (<button type="submit" disabled={isValid} className="EG">CLAIM YOUR FREE TRIAL</button>)

                        }
                        <div className="F"><p>By clicking the button you are agreeing to our <span><b>Terms and Services</b></span></p>
                        </div>
                    </div>
                </div>

            </form>

        </>

    );
}


export default Form