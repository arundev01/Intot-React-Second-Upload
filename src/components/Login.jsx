
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('true', data.user)
			alert('Login successful')
			window.location.href = "/dashboard"
		} else {
			alert('Please check your username and password')
		}
	}
  return (
    <div>
        <React.Fragment>

            <section className="vh-100">
            
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius: "25px"}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log IN</p>

                            <form className="mx-1 mx-md-4" onSubmit={loginUser}>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">

                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                
                                </div>
                            </div>
                            <br/>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">

                                <label className="form-label">Password</label>
                                <input type="password" name="pssword" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <br/>
                                <button type="submit" className="btn btn-primary btn-lg" >LOG IN</button>
                            </div>

                        </form>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <br/>
                                <a ><Link to="/SignUp">Sign Up</Link></a>
                            </div>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
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

    </div>
  )
}

export default Login;
