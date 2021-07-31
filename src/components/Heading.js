import React from 'react'

function Heading(props) {
    return (
        <div>

            <ul>
              {  props.data.map((ele,i)=>(
                  
                  <li key={i}>{ele}</li>


                ))}
            </ul>
         
        </div>
    )
}

export default Heading
