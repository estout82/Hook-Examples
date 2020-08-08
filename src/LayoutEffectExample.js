
import React, { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectExample = (props) => {
    const [ count, setCount ] = useState(0);
    const ref = useRef();
    const [ width, setWidth ] = useState(0);

    const onButtonClick = () => {
        setCount(c => c + 1);
    }

    const onAlertRef = () => {
        alert('not a valid ref');
    }

    useLayoutEffect(() => {
        for (let i = 0; i < 100000; i++) {
            console.log(i * i);
        }
    }, [ count ]);

    useLayoutEffect(() => {
        // this will always be non-null because refs are updated during DOM update
        // this hook is gaurenteed to run after the DOM has been updated for the first time
        let newWidth = ref.current.getBoundingClientRect().width;

        // only set state if the new width is different to avoid a render loop
        if (width !== newWidth) {
            setWidth(newWidth);
        }
    }, [ref, width]);

    return (
        <div className="card-container">
            <header className="card-header">
                <h3>Layout Effect Example</h3>
            </header>
            <section className="card-content">
                <p>Example of the useLayoutEffect hook.</p>
                <p className="f-w-400">
                    Use layout effect is almost identical to use effect. Use this hook when you need to read from or
                    make VISIBLE changes to the DOM. Layout effect is good for this because it runs synchroinously
                    directly after DOM mutations BEFORE the brower has a chance to paint so there will be no sync 
                    issues due to updating the DOM after the screen has painted. This also means that you should not 
                    preform expensive async operations or side effects in here because it could cause a delay from
                    a render to browser paint. When you click the 'Re-Render' button an expensive operation will be
                    preformed that blocks the main thread since the hook runs sync, this will cause the app to
                    'freeze' until the operation completes. You should use this hook over effect only when ABSOLUTLEY
                    required. One typical use case of this is reading the dimensions of an element as demonstrated. it
                    is usually safe to read from refs in this hook because the refs are updated after the DOM has
                    been modified but BEFORE this hook runs.
                </p>
                <div className="row p-md">
                </div>
                <div className="row p-md">
                    <p ref={ ref }>Count: { count }</p>
                    <p>Count p elem width: { width ? width : 'unknown' }</p>
                    <button 
                     className="btn"
                     onClick={ onButtonClick }>
                        Re-Render
                    </button>
                    <button 
                     className="btn"
                     onClick={ onAlertRef }>
                        AlertRef
                    </button>
                </div>
            </section>
        </div>
    );
}

export default LayoutEffectExample;