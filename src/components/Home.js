
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import "./css/image.css";
import "./css/home.css";
import "./css/table.css";

import img2 from"../images/blood.PNG";

export class Home extends Component {
    fun=()=> {
        console.log("fun called");
        
    }
    
    
  render() {
   
    const bStyle={
      color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
    }
    return (
      
     
      <>
      
      <div >
          <p className="text">LEARN ABOUT DONATION</p>
      </div>  
      <div className='flexbox-container '>
      
        <div className="col-md-6" id='mydiv'>
            <img  src={img2} alt="blood" />
        </div>
      <div className="col-md-6">
      <table className="table table-striped table-bordered text-center" >
      <tbody>
      <tr>
        <th colSpan='3' style={{ backgroundColor:"red" ,color:"white" }}  >Compatible Blood Type Donors</th>
      </tr>
      <tr>
        <td ><b>Blood Type</b></td>
        <td ><b>Donate Blood To</b></td>
        <td ><b>Receive Blood From</b></td>
      </tr>
      <tr>
        <td  style={bStyle}>A+</td>
        <td >A+ AB+</td>
        <td>A+ A- O+ O-</td>
      </tr>
      <tr>
        <td style={bStyle}>O+</td>
        <td>O+ A+ B+ AB+</td>
        <td>O+ O-</td>
      </tr>
      <tr>
        <td style={bStyle}>B+</td>
        <td>B+ AB+</td>
        <td>B+ B- O+ O-</td>
      </tr>
      <tr>
        <td style={bStyle}>AB+</td>
        <td>AB+</td>
        <td>Everyone</td>
      </tr>
      <tr>
        <td style={bStyle}>A-</td>
        <td>A+ A- AB+ AB-</td>
        <td>A- O-</td>
      </tr>
      <tr>
        <td style={bStyle}>O-</td>
        <td>Everyone</td>
        <td>O-</td>
      </tr>
      <tr>
        <td style={bStyle}>B-</td>
        <td>B+ B- AB+ AB-</td>
        <td>B- O-</td>
      </tr>
      <tr>
        <td style={bStyle}>AB-</td>
        <td>AB+ AB-</td>
        <td>AB- A- B- O-</td>
      </tr>
</tbody>
</table>
</div>
</div>



      <Container style={{backgroundColor:"lightgrey"}} className="info1">
        <h1 style={{color:" #961e1b"}}>TYPES OF DONATION</h1>
        
        <p className='para' style={{marginTop:"40px"}}>
        The human body contains five liters of blood, 
        which is made of several useful components i.e. Whole blood, Platelet, and Plasma.
        </p>
        <p className='para'>Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.</p>
        <p className='para'>For plasma and platelet donation you must have donated whole blood in past two years.</p>

        <hr
        style={{
            color:"black",
            height: 5
        }}
    />

        <p style={{color:"#961e1b",marginLeft:"70px",textAlign:"left"}}>Whole Blood</p>
        <hr
        style={{
            color:"black",
            height: 5
        }}
    />
    
        <div className="row tabInfo" id="wholeblood">
		    <div className="col-md-4 ">
		
			<h3>What is it?</h3>
			
			<p className='para'>
			Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.</p>
			
			<h3>Who can donate?</h3>
			
			<p className='para'>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>
		

		</div>
		<div className="col-md-4 infoContent">
		<h3>User For?</h3>
			
			<p className='para'>
			 Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.</p>
			
			<h3>Lasts For?</h3>
			
			<p className='para'>Red cells can be stored for 42 days.</p>
		
		</div>
		<div className="col-md-4 ">
		<h3>How long does it take?</h3>
			
			<p className='para'>
			15 minutes to donate.</p>
			
			<h3>How often can I donate?</h3>
			
			<p className='para'>Every 12 weeks</p>
		
		</div>
		</div>
   </Container>
    
   
   
         </>
      
    )
  }
}



export default Home