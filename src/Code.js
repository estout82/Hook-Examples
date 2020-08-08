
import React from 'react';

const Code = (props) => {
    return (
        <code>
            <pre>
                {
                    props.lines ?
                    props.lines.map((line, index) => {
                        return (
                            <p key={ index }>
                                <span>{ index + 1 }</span>
                                { line }
                            </p>
                        );
                    })
                    : null
                }
            </pre>
        </code>
    );
}

export default Code;