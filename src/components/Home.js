import React, { Component } from 'react'
import Footer from './Footer';
import Heading from './Heading';

export default class Home extends Component {

    constructor(props)
    {
        super(props);

        this.state={
         inputs:[],
         inputValue:""
            
        }
    }

addField =(event)=>{

 this.setState({inputValue:event.target.value});
}

addData=()=>{


   // this.state.inputs.push(this.state.inputValue);
    this.setState({inputs:[...this.state.inputs,this.state.inputValue],inputValue:""});


   }


    render() {
        return (
            <div>

                <input type="text"  name="inputValue" value={this.state.inputValue}  onChange={this.addField}/>

                <button onClick={this.addData}>Push</button>

                <Heading  data={this.state.inputs}/>
                <Footer data={this.state.inputs}/>
            </div>
        )
    }
}
