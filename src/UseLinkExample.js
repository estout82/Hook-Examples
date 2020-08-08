
import React from 'react';
import useLink from './useLink';
import UseLinkExampleChild from './UseLinkExampleChild';

const UseLinkExample = (props) => {
    const link = useLink('Inital value');

    return (
        <div className="card-container">
            <header className="card-header">
                <h3>Custom Hook UseLink</h3>
            </header>
            <section className="card-content">
                <p>
                    A custom hook that makes it easier to pass mutable state to children. Basically the the useLink
                    hook returns a 'wrapper' that wraps a useState call. This allows you to pass methods and useful
                    functionality down to children. It also allows parents to pass mutable props to children that
                    when are set in the child will set state in the parent.
                </p>
                <p className="f-w-400">
                    
                </p>
                <div className="row p-md">
                    <p>Value of link.value in parent: <span className="highlight">{ link.value }</span></p>
                </div>
                <div className="row p-md">
                    <UseLinkExampleChild link={ link }/>
                </div>
            </section>
        </div>
    );
}

export default UseLinkExample;