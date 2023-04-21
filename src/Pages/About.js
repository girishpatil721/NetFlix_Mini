import { Component } from "react";

class About extends Component{
    constructor(){
        this.state={
            name:'Karan'
        }
    }

    change(){
        this.setState({name:"Raj"})
    }

    componentDidMount(){
        console.log('Component Did Mount');
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        return true
    }

    componentWillUnmount(){
        console.log('Updated');
    }



    render(){
        return(
            <>
            <h1>Hello From Class component 😎 {this.setState.name}</h1>
            <button onClick={this.change}>Change</button>
            </>
        )
    }
}

export default About;