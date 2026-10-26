import React from 'react';

const UserPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    return (
        <div>
            <h1>This Is User Data</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    users.map(user => <div key={user.id} className="card mb-2 bg-primary text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.company.catchPhrase}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">{user.phone}</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserPage;