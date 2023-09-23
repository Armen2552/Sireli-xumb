import React, {useEffect, useState} from "react";
import "./style.css"
import Pizza1 from "../../assets/images/pizza1.jpg"
import Pizza2 from "../../assets/images/pizza2.jpg"
import Pizza3 from "../../assets/images/pizza3.jpg"
import Salad1 from "../../assets/images/salad1.jpg"
import Salad2 from "../../assets/images/salad2.jpg"
import Salad3 from "../../assets/images/salad3.jpg"
import Noodle1 from "../../assets/images/noodle1.jpg"
import Noodle2 from "../../assets/images/noodle2.jpg"
import Noodle3 from "../../assets/images/noodle3.jpg"

export const Boxes = ()=>{
    const [name] = useState(["Pizza","Salad","Noodle"])
    const [box,setBox] = useState([])
    const [boxes] = useState([
        {
            img : Pizza1,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Pizza"
        },
        {
            img : Pizza2,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$65 / $70",
            type: "Pizza"
        },
        {
            img : Pizza3,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Pizza"
        },
        {
            img : Salad1,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Salad"
        },
        {
            img : Salad2,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Salad"
        },
        {
            img : Salad3,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Salad"
        },
        {
            img : Noodle1,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Noodle"
        },
        {
            img : Noodle2,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Noodle"
        },
        {
            img : Noodle3,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Noodle"
        },
    ])

    useEffect(()=>{
        setBox(boxes.filter(x=>x.type === "Pizza"))
    },[])

    const Filtrashion = (y)=>{
        setBox(boxes.filter(x=>x.type === y))
    }

    return <>
        <div className="name-boxes">
            {name.map((elem,index)=>{
                return <button onClick={()=>Filtrashion(elem)} key={index}>{elem}</button>
            })}

            {box.map((elem,index)=>{
                return <div key={index}>
                    <img src={elem.img} alt="nkar"/>
                    <h2>{elem.title}</h2>
                    <p>{elem.description}</p>
                    <span>{elem.price}</span>
                </div>
            })}
        </div>
    </>
}