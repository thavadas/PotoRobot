import React, { Fragment } from 'react';

const card = ({id, name, email}) => {
    return (
        <Fragment>
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='la tête de votre poto' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>  
            </div>
            </div> 
        </Fragment>
    );
}

export default card;