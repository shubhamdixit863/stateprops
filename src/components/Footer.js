import React, { Component } from 'react'

export default class Footer extends Component {
   constructor(props)
   {

    super(props);
   }



    render() {
        console.log(this.props);
        return (
            <div >

<ul>
              { this. props.data.map((ele,i)=>(
                  
                  <li key={i}>{ele}</li>


                ))}
            </ul>
  
        
                
            </div>
        )
    }
}
