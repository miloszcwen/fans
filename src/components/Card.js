import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc gold bg-navy dib br3 pa3 ma3 grow bw2 shadow-5 hover-light-red'>
            <img src={`https://robohash.org/test${id}?set=set5`} alt='loading avatar image' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;