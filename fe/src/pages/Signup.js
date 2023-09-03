import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const Signup = () => {
	const [name,setName]=useState('')
	const [username,setUsername]=useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
	const navigate=useNavigate()
	const [loading, setLoading] = useState(false);

	const signup = async (e) => {
		e.preventDefault();
		const data={username:username,name:name,email:email,password:password}
		// console.log(data)
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
		  axios.post('http://localhost:3300/register', data)
			.then((result) => {
			  if (result) {
				toast.success('User registered successfully');
				navigate('/login')
			  }
			  setEmail('')
			  setName('')
			  setPassword('')
			  setUsername('')
			})
			.catch((error) => { 
			  toast.error(error.response.data.error);
			});
		})
		.catch(() => {
		  setLoading(false);
		});
	  };


  return (
    <>
         <div className="container boxl">
		<h2 className="lgn">Signup</h2>
		<form className="forml" onSubmit={(e)=>signup(e)}>
		<div className="form-group">
				<label for="name">Name:</label>
				<input type="text" className="form-control" placeholder="Enter name" id="name" onChange={(ev) => setName(ev.target.value)}/>
			</div>
			<div className="form-group">
				<label for="phone">Phone:</label>
				<input type="text" className="form-control" placeholder="Enter phone" id="phone" onChange={(ev) => setUsername(ev.target.value)} />
			</div>
			<div className="form-group">
				<label for="email">E-mail:</label>
				<input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(ev) => setEmail(ev.target.value)}/>
			</div>
			<div className="form-group">
				<label for="pwd">Password:</label>
				<input type="password" className="form-control" placeholder="Enter password" id="password" onChange={(ev) => setPassword(ev.target.value)}/>
			</div>
			<button type="submit" className="btn btn-success buttonl"  disabled={loading}>Login</button>
		</form>
        <br/>
        <h5 style={{textAlign:'center'}}>Already have an account?<Link to="/login">Login</Link></h5>
	</div>
    </>
  )
}

export default Signup