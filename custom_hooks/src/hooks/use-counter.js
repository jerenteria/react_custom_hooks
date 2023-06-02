import React, { useState, useEffect } from 'react';

// custom hooks MUST start with use
// forward starts off as true as parameter
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter(prevCounter => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
        // need forwards as dependency so that the effect will rerun whenever the dependency changes 
    }, [forwards]);

    return counter;
};

export default useCounter;