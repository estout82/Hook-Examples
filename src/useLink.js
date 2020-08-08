
import { useState } from 'react';

const useLink = ( initalValue ) => {
    const [ value, set ] = useState(initalValue);

    return { value, set };
}

export default useLink;