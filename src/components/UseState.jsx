import React,{useState} from "react";

export default function useState(){
    const [show,setshow]=useState(true);
    function search(){
        setshow(!show)
    }
    return(
        <div className="container">
            {
                show ? <div className="box"></div> : ''
            }

            <button className="btn btn-waring" onClick={search}> {show?"hide":"Show"} </button>
        </div>
    )
}