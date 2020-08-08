
import React, { useState, memo, useCallback } from 'react';
import Console from './Console';
import EffectExampleChild from './EffectExampleChild';
import useForm from './useForm';
import Code from './Code';

const EffectExampleChildMemo = memo(EffectExampleChild);
const ConsoleMemo = memo(Console);

const codeLines = [
    'const EffectExampleChild = (props) => {\n',
    '\n',
    '    // runs everytime component is rendered\n',
    '    useEffect(() => {\n',
    '        props.logger(\'child rendered\');\n',
    '    });\n',
    '\n',
    '    // runs everytime component is mounted.. cleanup everytime unmounted\n',
    '    useEffect(() => {\n',
    '        props.logger(\'child mounted\', \'var(--highlight-color-one)\');\n',
    '\n',
    '        return () => {\n',
    '            props.logger(\'child unmounted\', \'var(--highlight-color-two)\');\n',
    '       }\n',
    '    }, []);\n',
    '    \n',
    '   // runs every time props.msg or props.logger changes\n',
    '   useEffect(() => {\n',
    '       props.logger(\'child msg hook ran\', \'var(--highlight-color-three)\');\n',
    '\n',
    '       return () => {\n',
    '           props.logger(\'child msg cleanup hook ran\', \'var(--highlight-color-three)\');\n',
    '        }\n',
    '   }, [props.msg, props.logger]);\n',
    '\n',
    '   return (\n',
    '       <div className="label">\n',
    '            <header className="label-header">Child</header>\n',
    '           <p className="label-data">\n',
    '               { props.msg ? props.msg : \'Default message\' }\n',
    '           </p>\n',
    '       </div>\n',
    '   );\n',
    '}\n',
];

const EffectExample = (props) => {
    const [showChild, setShowChild] = useState(false);
    const [childMsg, setChildMsg] = useState('');

    const [formValues, handleFormChange, handleFormReset] = useForm({ childMsg: '' });

    const [consoleMessages, setConsoleMessages] = useState([]);

    const logger = useCallback((msg, color) => {
        setConsoleMessages(c => [
            ...c,
            { msg: msg, color: color }
        ]);
    }, [setConsoleMessages]);

    const onShowChildClick = () => {
        setShowChild(c => !c); // invert current value of showChild

        // if child is shown and we are hiding, rest the msg
        if (showChild === true) {
            setChildMsg('');
        }
    }

    const onChangeChildPropsClick = () => {
        setChildMsg(formValues.childMsg);
        handleFormReset();
    }

    return (
        <div className="card-container">
            <header className="card-header">
                <h3>Effect Example</h3>
            </header>
            <section className="card-content">
                <p>Example of the useEffect hook.</p>
                <p className="f-w-400">
                    useEffect is used to preform with 'side effects.' (A.K.A. things that effect other components
                    or change state). They are often used to preform setup / cleanup logic, fetch data from an API, 
                    or update the DOM after it has been updated. The useEffect takes a callback and an array of 
                    dependencies. The callback is called whenever any of the dependencies change (note objects 
                    are only compared with a shallow comparision). If an empty array is passed it will be called when 
                    component mounts. A cleanup function can be returned from the callback that will before the next time
                    the hook runs or unmount. If no depencency array is passed, the hook runs on every render. This
                    hook effecitvley replaces componentDidMount(), componentWillUnmount(), and componentDidUpdate(). Lastly,
                    effects always run in the order they were declared.
                </p>
                <div className="row p-md">
                    <input
                     className="input"
                     name="childMsg"
                     placeholder="Child Message"
                     value={ formValues.childMsg }
                     onChange={ handleFormChange }
                    />
                </div>
                <div className="row p-md">
                    <button
                     className="btn"
                     onClick={ onShowChildClick }>
                        { showChild ? 'Hide Child' : 'Show Child' }
                    </button>
                    <button
                     className="btn"
                     onClick={ onChangeChildPropsClick }>
                        Change Child Message
                    </button>
                </div>
                <div className="row p-md">
                    {
                        showChild ?
                        <EffectExampleChildMemo msg={ childMsg } logger={ logger }/> :
                        null
                    }
                </div>
                <div className="row p-md">
                    <ConsoleMemo messages={ consoleMessages } />
                </div>
                <div className="row p-md">
                    <Code lines={ codeLines } />
                </div>
            </section>
        </div>
    );
}

export default EffectExample;