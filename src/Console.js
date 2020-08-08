
import React from 'react';

const Console = (props) => {
    return (
        <div className="console-container">
            {
                props.messages ?
                props.messages.map( (message, index) => {
                    return (
                        <p 
                         key={ index } 
                         style={ {color: message.color} }>
                            { message.msg }
                        </p>
                    );
                }) :
                null
            }
        </div>
    );
}

export default Console;