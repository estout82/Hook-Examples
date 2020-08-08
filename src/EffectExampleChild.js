
import React, { useEffect } from 'react';

const EffectExampleChild = (props) => {

    // runs everytime component is rendered
    useEffect(() => {
        props.logger('child rendered');
    });

    // runs everytime component is mounted.. cleanup everytime unmounted
    useEffect(() => {
        props.logger('child mounted', 'var(--highlight-color-one)');

        return () => {
            props.logger('child unmounted', 'var(--highlight-color-two)');
        }
        //eslint-disable-next-line
    }, []);

    // runs every time props.msg or props.logger changes
    useEffect(() => {
        props.logger('child msg hook ran', 'var(--highlight-color-three)');

        return () => {
            props.logger('child msg cleanup hook ran', 'var(--highlight-color-three)');
        }
        //eslint-disable-next-line
    }, [props.msg, props.logger]);

    return (
        <div className="label">
            <header className="label-header">Child</header>
            <p className="label-data">
                { props.msg ? props.msg : 'Default message' }
            </p>
        </div>
    );
}

export default EffectExampleChild;