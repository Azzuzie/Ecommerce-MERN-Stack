import React,{useEffect, useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  toast } from 'react-toastify';
import axios from 'axios';
import {addUser} from '../redux/userSlice'
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate=useNavigate()
	const dispatch=useDispatch()
	useEffect(()=>{

	},[dispatch])
	
	const login = async (e) => {
		e.preventDefault();
		setLoading(true);
		const data = { email: email, password: password };
		// console.log(data);
		const promise = new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve();
		  }, 3000);
		});
	
		toast.promise(
		  promise,
		  {
			pending: 'Loading...'
		  },
		);
	
		promise
		  .then(() => {
			setLoading(false);
			axios.post('http://localhost:3300/login', data)
			  .then((result) => {
				if (result) {
				  localStorage.setItem("token",result.data.result.token)
				  localStorage.setItem("user",JSON.stringify(result.data.result.user))
				  
				  toast.success('Login Successful!');
				  
				  navigate('/home')
				}
				setEmail('')
				setPassword('')
			  })
			  .then(()=>{
				const user=JSON.parse(localStorage.getItem("user"))
				console.log(user)
				dispatch(addUser(user))
			  })
			  .catch((error) => {
				toast.error(error.response.data.error);
				// dispatch(removeUser())
			  });
		  })
		  .catch(() => {
			setLoading(false);
		  });
	  };

  return (
    <>
        <div className="container boxl">
		<h2 className="lgn">Login</h2>
		<form className="forml" onSubmit={(e) => login(e)}>
			<div className="form-group">
				<label for="email">E-mail:</label>
				<input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(ev) => setEmail(ev.target.value)}/>
			</div>
			<div className="form-group">
				<label for="pwd">Password:</label>
				<input type="password" className="form-control" placeholder="Enter password" id="password" onChange={(ev) => setPassword(ev.target.value)}/>
			</div>
			<button type="submit" className="btn btn-success buttonl" disabled={loading}>Login</button>
		</form>
        <br/>
        <h5 style={{textAlign:'center'}}>Dont have an account?<Link to="/signup">Signup</Link></h5>
	</div>
    </>
  )
}

export default Login