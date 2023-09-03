import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className="container-fluid contact-body">
        <h2 className="box">CONTACT US</h2>
        <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 col1">

            </div>

            <div className="col-lg-7 col-md-6 col-sm-12 col2"> 
                <h3>Please Fill The Below Form :-</h3>
                <form action="home.html" >
                    <div className="form-group">
                        <label for="name">Name:</label> <br/>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" required/>
                    </div> <br/>
                    <div className="form-group">
                        <label for="email">Email:</label> <br/>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required/>
                    </div> <br/>
                    <div className="form-group"> 
                        <label for="message">Message:</label> <br/>
                        <textarea className="form-control" id="message" rows="5" name="message" required></textarea>
                    </div> <br/>
                    <button type="submit" className="btn btn-success button" onclick="check()">Submit</button>
                </form>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact;