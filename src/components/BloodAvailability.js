
import React, { Component } from 'react'
import axios from 'axios'

class BloodAvailability extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         states:[]
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

   
  render() {
    
     
    return (
      <div>
      BloodAvailability Page
       
      </div>
    )
  }
}

export default BloodAvailability