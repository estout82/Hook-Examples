
import React, { useState, useRef } from 'react';
import Code from './Code';

const codeLines = [
    '// stores a ref to a DOM element\n',
    'const inputRef = useRef();\n',
    '\n',
    '// stores a persistant value that doesn\'t effect re-render\n',
    'let prevInputState = useRef(\'\');\n',
    '\n',
    'const handleSubmit = () => {\n',
    '        prevInputState.current = inputState;\n',
    '    setInputState(\'\');\n',
    '}\n',
    '\n',
    'const handleFocusClick = () => {\n',
    '   inputRef.current.focus();\n',
    '}\n',
    '\n',
    'const handleBlurClick = () => {\n',
    '    inputRef.current.blur();\n',
    '}\n',
    '\n',
    '<input \n',
    ' className="input"\n',
    ' ref={ inputRef }\n',
    ' name="data"\n',
    ' placeholder="Data"\n',
    ' value={ inputState }\n',
    ' onChange={ handleChange }\n',
    '/>\n'
];

const RefExample = (props) => {
    const [inputState, setInputState] = useState('');

    // stores a ref to a DOM element
    const inputRef = useRef();

    // stores a persistant value that doesn't effect re-render
    let prevInputState = useRef('');

    const handleChange = (event) => {
        setInputState(event.target.value);
    }

    const handleFocusClick = () => {
        inputRef.current.focus();
    }

    const handleBlurClick = () => {
        inputRef.current.blur();
    }

    const handleSubmit = () => {
        prevInputState.current = inputState;
        setInputState('');
    }

    return (
        <div className="card-container">
            <header className="card-header">
                <h3>Ref Example</h3>
            </header>
            <section className="card-content">
                <p>Example of the useRef hook.</p>
                <p className="f-w-400">
                    useRef is used to store persistant stateful data and refs to dom elements. The value is persistant
                    between render-cyles. Common use cases include inparetivly manipulating DOM (element.focus()),
                    storing previousState, storing render count (avoid render loop), etc. The sytntax is as follows:
                    useRef(initalValue), the function returns a object whoes .current property stores the current
                    value of the ref. You can get a ref to a dom element by passing the entire ref object to the
                    elements ref attrib, React then sets the .current property of the object to a ref to the dom 
                    element. You can also directly set the .current property in the case of regular (non-ref) values.
                    Treat these like you would treat instance variables on a class.
                </p>
                <div className="row p-md">
                    <input 
                        className="input"
                        ref={ inputRef }
                        name="data"
                        placeholder="Data"
                        value={ inputState }
                        onChange={ handleChange }
                        />
                </div>
                <div className="row p-md">
                    <button
                     className="btn m-md"
                     onClick={ handleFocusClick }>
                        Focus
                    </button>
                    <button
                     className="btn m-md"
                     onClick={ handleBlurClick }>
                        Blur
                    </button>
                    <button
                     className="btn m-md"
                     onClick={ handleSubmit }>
                        Submit
                    </button>
                </div>
                <div className="row p-md">
                    <label className="label">
                        <p className="label-header">Previous State</p>
                        <p className="label-data">
                            { prevInputState.current ?
                              prevInputState.current :
                              'null' }
                        </p>
                    </label>
                    <label className="label">
                        <p className="label-header">Current State</p>
                        <p className="label-data">
                            { inputState ?
                                inputState :
                              'null' }
                        </p>
                    </label>
                </div>
                <div className="row p-md">
                    <Code lines={ codeLines } />
                </div>
            </section>
        </div>
    );
}

export default RefExample;