import React,{ useState } from 'react'
import axios from "axios";
import logo from '../images/logo.png'
import image from '../images/Sign up-rafiki (1) 1.png'
import { Link, useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({ name: "", email: "", password: "" });

    const [errors, setErrors] = useState({ email: "", password: "" });

    const [isFormValid, setIsFormValid] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {

      const { name, value } = e.target;

      setState({
        ...state,
        [name]: value,
      });

      if (name === "confirmPassword") {
        setConfirmPassword(value);
      }

      // Password matching validation
      if (name === "password" || name === "confirmPassword") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: state.password !== confirmPassword ? "Passwords do not match" : "",
        }));
      }

      // Password matching validation
      const passwordsMatch = state.password === confirmPassword;
      
      // Check if any field is empty
      const isAnyFieldEmpty = Object.values(state).some((field) => field.trim() === "");
    
      // Update form validity
      setIsFormValid(!isAnyFieldEmpty && passwordsMatch);
      
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      axios.post("https://demo.schautomate.com.ng/api/users/register", userData).then((response) => {
        console.log(response, response.data);
        localStorage.setItem('signup-id', JSON.stringify(response))

        navigate("/identification")
      });
    };

  return (
    <div className='register-container'>

        <section className='registration'>

        <h2>registration</h2>

        <form onSubmit={handleSubmit} style={{marginTop: '-1em'}}>

            <fieldset>
                <legend>Name</legend>
                <input type='text' placeholder='Enter your full name here' 
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset>
                <legend>Email</legend>
                <input type='email' placeholder='Enter your email address here' 
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset>
                <legend>Password</legend>
                <input type='password' placeholder='Enter your password here' 
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset>
                <legend>Confirm Password</legend>
                <input type='text' placeholder='Confirm Password' 
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
            </fieldset>

            {/* <Link className='register-btn' to='/identification'>Register</Link> */}

            <button className='register-btn' type='submit' disabled={!isFormValid}>Proceed</button>

            <p className='enquiry'>Already Registered ? <Link to='/login' style={{color: '#E91818'}}>Login</Link></p>

        </form>

        </section>

        <aside className='register-left'>

            <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
                 width: '20%', alignSelf: 'end', marginTop: '2em'
            }}>
                <img src={logo} alt='logo' id='logo' />
            </Link>

            <img src={image} alt='' id='image' />

        </aside>

    </div>
  )
}

export { Register }