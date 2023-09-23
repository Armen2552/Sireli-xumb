import React, {Component} from "react";
import "./style.css"
import {NavLink} from "react-router-dom";

export class Header extends Component{
    // constructor(props) {
    //
    //     super(props)
    //
    //     this.state = {
    //         key: 15,
    //     }
    //
    //     this.props = {
    //         title : ""
    //     }
    //
    // }

    state = {
        key: 15,
    }

    props = {
        title : ""
    }



    componentDidMount() {
        console.log("Mounted")
    }

    componentDidUpdate() {
        console.log("Update")
    }
    componentWillUnmount() {
        console.log("Unmount")
    }

    c

    Change = ()=>{
        this.setState({key: ++this.state.key})
    }

    InputChange = (e)=>{
        console.log(e)
    }


    render() {
        return <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <p>{this.state.key}</p>
            <button onClick={this.Change}>Click me</button>
            <input onChange={this.InputChange} type="text"/>
            {this.props.title? <p>{this.props.title}</p> : null}
        </div>
    }
}