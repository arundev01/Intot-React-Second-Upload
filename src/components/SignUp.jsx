
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'


function SignUp() {

  let navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/SignUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
        phone,
				password,
			}),
		})
    
  const data = await response.json()
  
  if (data.status === 'ok') {
    navigate("/login")
  }
  else {
    alert('This email already in use. Use a different email !!')
  }

  }

    
    return (
        
        <React.Fragment>

      <section className="vh-100">
        
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>
      
                      <form className="mx-1 mx-md-4" onSubmit={registerUser}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Name</label>
                            <input required type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                            
                          </div>
                        </div>
                        <br/>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Email</label>
                            <input required type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            
                          </div>
                        </div>
                        <br/>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Phone</label>
                            <input required type="text" name="phone" className="form-control" error={isError} value={phone}  
                            onChange={(e) => setPhone(e.target.value)}/>
                            
                          </div>
                        </div>
                        <br/>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label">Password</label>
                            <input required type="password" name="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                            
                          </div>
                        </div>
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <br/>
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
      
                    </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </React.Fragment>
    );
}

export default SignUp;
