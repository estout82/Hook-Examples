
import { useState } from 'react';

const useForm = (initalValues) => {
    const [values, setValues] = useState(initalValues);

    const handleChange = (event) => {
        setValues({ 
            ...values, 
            [event.target.name]: event.target.value 
        });
    }

    const handleReset = () => {
        setValues({
            ...initalValues
        });
    }

    return [
        values,
        handleChange,
        handleReset
    ]
}

export default useForm;