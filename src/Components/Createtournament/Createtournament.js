import React, {useState, useEffect} from 'react'
import {Container,Row,Col, Button, Navbar, Form } from 'react-bootstrap';
import axios from 'axios'
import profpic from './profile.png'
import './Createtournament.scss'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'

export default function Createtournament() { 

    const [tournamentdetails,setTournamentdetails]=useState()
    const [issending, setIssending]=useState(true)

    useEffect(() => {
      const postTournamentData = async () => {
        await axios.post(
          url+'/tournament/add/', tournamentdetails,   { headers: {'Authorization': "Token "+tokenval }})
           .then(response => 
            {console.log(tournamentdetails)
              console.log(response);
             console.log(response.data.message);
             })
            };
            issending?(console.log('Sending request')):(postTournamentData())
       
       
    }, [issending]);

    const handlesubmit= e=>{
      e.preventDefault();
        setIssending(false)
       
    }

    const updateField = e => {
        setTournamentdetails({
          
          ...tournamentdetails,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div>
            <h2 className='title'>Create Tournament</h2>
            
        <Form onSubmit={handlesubmit}>
        <img alt='Profilepicture' src={profpic} className='circleprofpic'/>
        <label htmlFor='photo-input' className='label'>Add photo</label>
            <input type='file' name='tournament-image-upload' id='photo-input' accept='image/*' />
            <div className='formcontrol'>
            <Form.Control onChange={updateField} name='name' required type='text' size='lg' placeholder='Tournament name' />
           <div className='datestyle'> 
            <label>Start Date:</label>
            <input onChange={updateField} name='start_date' required type='date' placeholder='Start Date(DD/MM/YY}'  />
           </div>
           <div className='datestyle'> 
            <label>Registration End Date:</label>
            <input onChange={updateField} name='end_date' required type='date' placeholder='Start Date(DD/MM/YY}'  />
           </div>
         <Container><Row><Col> <Form.Label>Total Players per tournament</Form.Label></Col><Col><Form.Control onChange={updateField} name='total_players' required type='Integer' placeholder='Total Players' /></Col></Row>
         <Row><Col> <Form.Label>Max score Per set</Form.Label></Col><Col><Form.Control onChange={updateField} name='max_score' required type='Integer' placeholder='Max Score' /></Col></Row>
    <Form.Label ><b>Matches in the Tournament</b></Form.Label>
      <Form.Check type='checkbox' style={{fontSize:'20px'}} label="Men's Singles"      />
      <Form.Check type='checkbox' style={{fontSize:'20px'}} label="Women's Singles"      />
      <Form.Check type='checkbox' style={{fontSize:'20px'}} label="Men's Doubles"      />
      <Form.Check type='checkbox' style={{fontSize:'20px'}} label="Women's Doubles"      />
      </Container>
            </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
             <Navbar bg='dark' fixed="bottom">
     <Button type="submit" variant="primary" block> Save</Button>
     </Navbar></Form>
        </div>
    )
}
