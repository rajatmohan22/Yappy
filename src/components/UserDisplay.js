import React from 'react';
import './UserDisplay.css'; // Import the CSS file

const UserDisplay = (props) => {
    console.log(props.Users);

    return (
        <>
            {props.Users.map((user) => (
                <div key={user.id} className="user-container">
                    <p className="user-info"><strong>Username:</strong> {user.username}</p>
                    <p className="user-info"><strong>Age:</strong> {user.age}</p>
                </div>
            ))}
        </>
    );
};

export default UserDisplay;
