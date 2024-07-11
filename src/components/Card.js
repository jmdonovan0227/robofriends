import React from 'react';

// Remember with React, we only return one component!
const Card = ({ name, email, id }) => {
    // ES6 Destructuring = props.name, props.email, props.id
    //const { name, email, id } = props;
    return (
        //<h1>RoboFriends</h1>
        // dib = div, br3 = border of 3, pa3 = padding of 3, ma2 = margins of 2, and grow
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;