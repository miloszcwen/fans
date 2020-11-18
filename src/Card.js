import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc light-yellow bg-navy dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/test${id}?set=set5`} alt='face' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;