import React from 'react'
//import './Contact.css';
const Contact = () => {
    return (
        <>
            <div className="main">
                <div className='contact'>
                <h1 className="py-4 text-center">Contact</h1>
                </div><br></br><br></br><br></br>
                <div className="card-a">
                    <div className="card-a-1">
                        <div className='card-heading'>
                            <h2 className='py-4 text-center'>Doctor Help Corner</h2>
                        </div>
                        <div className='card-content'>

                        <h3>
                            Start working with us today. To get added as a doctor please email your details to any of the given admin below :
                        </h3>
                        <ul style={{color : "blue"}}>
                            <li>
                                <h4>ajinkyaoa@gmail.com</h4>
                            </li>
                            <li>
                                <h4>jeonnik19@gmail.com</h4>
                            </li>
                    
                        </ul>
                           
                        </div>
                    </div>
                </div>
                <div className="card-b">
                    <div className="card-b-1">
                        <div className='card-heading'>
                            <h2 className='py-4 text-center'>Patient Help Corner</h2>
                        </div>
                        <div className='card-content'>

                        <h3>
                        If you have faced any problem please write us to the given email id :
                        </h3>
                        <ul style={{color : "blue"}}>
                            <li>
                                <h4>singh.nitish.nk@gmail.com</h4>
                            </li>
                            <li>
                                <h4>bhagyshree@gmail.com</h4>
                            </li>
                    
                        </ul>
                           
                        </div>
    
                    </div> 
                </div>
                <div className="card-c">
                    <div className="card-c-1">
                        <div className='card-heading'>
                            <h2 className='py-4 text-center'>Blood Donor Help Corner</h2>
                        </div>
                        <div className='card-content'>

                        <h3>
                        If want to donate your blood please contact us on given emails :
                        </h3>
                        <ul style={{color : "blue"}}>
                            <li>
                                <h4>nikitagholave335@gmail.com</h4>
                            </li>
                            <li>
                                <h4>rushia32@gmail.com</h4>
                            </li>
                    
                        </ul>
                           
                        </div>
    
                    </div> 
                </div>
                
            
                
            </div>
        </>
    )
}

export default Contact