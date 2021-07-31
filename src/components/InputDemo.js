import React, { Component } from 'react'
import Modal from '../partials/Modal';

export default class InputDemo extends Component {


    constructor(props)
    {
      super(props);
   
      this.state={
   
       name:"",
       email:""
   
      }
   
   
    }
   


    handleChange=(event)=>{
     
        console.log(event);

        this.setState({[event.target.name]:event.target.value})
     }

     saveData=()=>{


        console.log(this.state);
     }

    render() {
        return (
            <div>
                <input type="text" name="name" onChange={(event)=>this.handleChange(event)} />

              <input type="text" name="email" onChange={this.handleChange}/>

              <Modal data="InputDemo"/>

              <button onClick={this.saveData}>Save Data</button>
            </div>
        )
    }
}
