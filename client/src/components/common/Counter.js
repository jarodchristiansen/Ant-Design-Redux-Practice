import React from 'react'
import { useSelector } from 'react-redux';

export const Counter = () => {
    const counter = useSelector((state) => state.count.count)

    return (

    <div>
        <h1>The Current Count is: {counter}</h1>
    </div>
    )
};