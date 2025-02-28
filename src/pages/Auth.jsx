import React, { useState } from 'react'
import loginImg from '../assets/loginImg.avif'
import { Form, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';


const Auth = ({ insideRegister }) => {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    username:"",email:"",password:""
  })
  console.log(userInput);
  
  const register = async (e)=>{
    e.preventDefault()
    if(userInput.username && userInput.email && userInput.password){
      // api call
      try{
        const result = await registerAPI(userInput)
        if(result.status==200){
          alert(`Welcme ${result.data?.username}, please login to explore more`)
          navigate("/login")
          setUserInput({username:"",email:"",password:""})
        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setUserInput({username:"",email:"",password:""})
          }
        }

      }catch(err){
        console.log(err);
        
      }

    }else{
      alert("please fill the form")
    }
  }


  return (
    <div
      style={{ minHeight: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={loginImg} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h1 className="my-2">
                <i className="fa-brands fa-docker me-2"></i>
                Project Fair
              </h1>
              <h5>Sign {insideRegister ? "Up" : "In"} to your Account</h5>
              <Form>
                {insideRegister && (
                  <FloatingLabel
                    controlId="floatingInputUsername"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      value={userInput.username}
                      onChange={(e) =>
                        setUserInput({ ...userInput, username: e.target.value })
                      }
                      type="email"
                      placeholder="Username"
                    />
                  </FloatingLabel>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    value={userInput.email}
                    onChange={(e) =>
                      setUserInput({ ...userInput, email: e.target.value })
                    }
                    type="email"
                    placeholder="Email"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    value={userInput.password}
                    onChange={(e) =>
                      setUserInput({ ...userInput, password: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>

                {insideRegister ? (
                  <div className="mt-3">
                    <button onClick={register} className="btn btn-primary mb-2">
                      Register
                    </button>
                    <p>
                      New User? Please click here to{" "}
                      <Link to={"/login"}>Login</Link>
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <button className="btn btn-primary mb-2">Login</button>
                    <p>
                      New User? Please click here to{" "}
                      <Link to={"/register"}>Register</Link>
                    </p>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth