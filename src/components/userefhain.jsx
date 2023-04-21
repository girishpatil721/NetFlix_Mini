import React, {useRef,useState} from 'react'

const UseR = () => {
    // useRef : uncontrolled
    // useState : controlled
    const name = useRef("Name");
    const [fname,setName] = useState("");
    console.log("re-render")
    function submitted(){
        setName(name.current.value);
    }
    return (
        <div>
            <h1>Name: {fname}</h1>
            <input type="text" ref={name} />
            <button className='btn btn-warning' onClick={submitted} > Submit </button>
        </div>
    );
}

export default userefhain;