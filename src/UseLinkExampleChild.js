
import React from 'react';

const UseLinkExampleChild = ( props ) => {
    return (
        <div className="group">
            <input 
             className="input" 
             placeholder="Change parent state"
             onChange={ (evt) => props.link.set(evt.target.value) }
            />
            <p>{ props.link.value }</p>
        </div>
    );
}

export default UseLinkExampleChild;