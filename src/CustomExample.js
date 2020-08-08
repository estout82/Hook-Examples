
import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import Code from './Code';

const codeLines = [
    'const useForm = (initalValues) => {\n',
    '    const [values, setValues] = useState(initalValues);\n',
    '\n',
    '    const handleChange = (event) => {,',
    '        setValues({\n',
    '            ...values,\n',
    '            [event.target.name]: event.target.value\n',
    '        });\n',
    '    }\n',
    '\n',
    '    const handleReset = () => {\n',
    '        setValues({\n',
    '            ...initalValues\n',
    '        });\n',
    '    }\n',
    '\n',
    '    return {\n',
    '        values: values,\n',
    '        handleChange: handleChange\n',
    '    }\n',
    '}\n'
]

const CustomExample = (props) => {
    const [showData, setShowData] = useState(false);
    const [prevValues, setPrevValues] = useState({ username: '', password: '' });

    const [ values, handleChange, handleReset ] = useForm({ username: '', password: '' });

    // ths runs to fake a submit
    useEffect(() => {
        setShowData(false);
    }, [values]);

    const onSubmit = (event) => {
        event.preventDefault();
        setShowData(true);
        setPrevValues(values);
        handleReset();
    }

    return (
        <form 
         className="card-container"
         onSubmit={ onSubmit }>
            <header className="card-header">
                <h3>Custom Hooks</h3>
            </header>
            <section className="card-content">
                <p>Example of a custom useForm hook. </p>
                <p className='f-w-400 m-no w-min'>
                    State is maintained in the useForm hook. The hook passes the state (form values) and a callback
                    handle change events and set the appropriate value in the hook's state. React sees that the state has
                    changed and updates the parent component which passes the new value to the parent to render. This is 
                    a good example of how to pass data up the tree with a hook. This also allows re-use of logic as the hook
                    can be used in other components and there is no need to add change handler logic to every form component. 
                </p>
                <div className="row p-md">
                    <input 
                     className="input" 
                     name="username"
                     type="text" 
                     placeholder="Username"
                     value={ values.username }
                     onChange={ handleChange }
                    />
                </div>
                <div className="row p-md">
                    <input 
                     className="input"
                     name="password"
                     type="password" 
                     placeholder="Password"
                     value={ values.password }
                     onChange={ handleChange }
                    />    
                </div>
                <div className="row p-md">
                    <button 
                     className="btn"
                     type="submit">
                        Submit
                    </button>
                    <div className="label">
                        <p className="label-header">
                            Username
                        </p>
                        <p className="label-data">
                            { values.username && showData ? 
                              values.username : 
                              ( prevValues.username ? prevValues.username : 'N/A' ) }
                        </p>
                    </div>
                    <div className="label">
                        <p className="label-header">
                            Password
                        </p>
                        <p className="label-data">
                            { values.password && showData ? 
                              values.password : 
                              ( prevValues.password ? prevValues.password : 'N/A' ) }
                        </p>
                    </div>
                </div>
                <div className="row p-md">
                    <Code lines={ codeLines } />
                </div>
            </section>
        </form>
    );
}

export default CustomExample;