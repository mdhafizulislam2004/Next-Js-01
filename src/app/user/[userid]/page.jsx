import React from 'react';

const UserDitelsPage = async({params}) => {
    const {userid}= await params;
    console.log("User Params: ",userid);
    
    return (
        <div>
            
        </div>
    );
};

export default UserDitelsPage;