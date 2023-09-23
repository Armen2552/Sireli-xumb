import React, {useEffect, useState} from "react";

export const Functional = (props)=>{
    const [key,setKey] = useState(45)

    useEffect(()=>{
        console.log("Mounted")


    },[key])

    useEffect(()=>{
        return ()=>{
            console.log("Unmount")
        }
    },[])

    return <>
        <button onClick={()=>setKey(key+1)}>Click</button>
        <p>{key}</p>
        <p>{props.sexan}</p>
        {/*<p>{sexan}</p>*/}
    </>
}