import React from 'react';

const Dashbordlayout = ({children}) => {
    return (
        <div>
           Common Part Of Dashbord
            <main>
                {children}
            </main>
        </div>
    );
};

export default Dashbordlayout;