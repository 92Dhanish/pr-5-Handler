// import React, {useRef}  from 'react'
import React, { useRef } from 'react';

function UseRef() {

    let Iref = useRef(0);

    const inc = () => {
        Iref.current.innerHTML = parseInt(Iref.current.innerHTML) + 1;
    }
    const dec = () =>{
        if(Iref.current.innerHTML > 0){
        Iref.current.innerHTML = parseInt(Iref.current.innerHTML) - 1;
        }
    }
    return (
        <div className='counter-container'>
                <h5 ref={Iref}>
                    {
                        Iref.current
                    }
                </h5>   
            <button className='btn-c btn btn-success'  onClick={inc} > Increment </button>
            <button className='btn-c btn btn-danger' onClick={dec} >Decrement </button>

        </div>
    )
}

export default UseRef