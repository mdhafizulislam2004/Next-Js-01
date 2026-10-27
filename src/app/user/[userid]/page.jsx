import React from 'react';

const UserDitelsPage = async({params}) => {
    const {userid}= await params;
    console.log("User Params: ",userid);
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    const user= await res.json()
    
    return (
        <div>
            <h1>{user.phone}</h1>
            <h2>{user.email}</h2>
            <h3>{user.username}</h3>
        </div>
    );
};

export default UserDitelsPage;