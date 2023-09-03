import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
    const array = useSelector(state => state.user)
    let { user } = array;
    user = user[0];

    // Check if the user's email is 'admin@admin.com'
    const isAdmin = user.email === 'admin@admin.com';

    return (
        <>
            <div className='kk'>
                <div className="profile-container">
                    <div className="profile-picture">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.NUOL5Zb95p2vrhWBPPSVQwHaFj&pid=Api&P=0&h=180" alt="ProfilePicture" />
                    </div>
                    <div className="profile-info">
                        <h1>{user.name}</h1>
                        <ul className="contact-info">
                            <li>Email: {user.email}</li>
                            <li>Phone: {user.phone}</li>
                            <li>Address: mohanbabu college, tirupati</li>
                        </ul>
                    </div>
                </div>
                <div className='div-like'>
                    {/* Conditionally render the button if the user is an admin */}
                    {isAdmin && (
                        <Link to='/addProduct' className='btn btn-primary Liked'>Add Product</Link>
                    )}
                    {/* Products liked by user */}
                    <Link to='/products' state={{ name: "Liked_Products" }} className='btn btn-primary Liked'>View Liked Products</Link>
                </div>
            </div>
        </>
    ) 
}

export default Profile
