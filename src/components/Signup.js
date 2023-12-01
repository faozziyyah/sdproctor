import React,{ useState } from 'react'
import axios from "axios";
import logo from '../images/logo.png'
import image from '../images/Sign up-rafiki (1) 1.png'
import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
      name: "",
      email: "",
      password: ""
    });

    const handleChange = (e) => {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value
      });
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
        navigate("/identification")
      });
    };

  return (
    <div className='register-container'>

        <section className='registration'>

        <h2>registration</h2>

        <form onSubmit={handleSubmit}>

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
                <input type='text' placeholder='Confirm Password' />
            </fieldset>

            {/* <Link className='register-btn' to='/identification'>Register</Link> */}

            <button className='register-btn' type='submit'>Proceed</button>

        </form>

        </section>

        <aside className='register-left'>

            <img src={logo} alt='logo' id='logo' />
            <img src={image} alt='' id='image' />
        </aside>

    </div>
  )
}

export { Register }