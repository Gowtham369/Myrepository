import React, {useState, useEffect} from 'react'
import {Container,Row,Col, Button, Form } from 'react-bootstrap';
import axios from 'axios'
import tournpic from './Tournament.jpg'
import './Createtournament.scss'
import {url} from '../url'
import {useHistory} from 'react-router-dom'
import {tokenval} from '../Home/Tournamenthome'
import {BiArrowBack} from 'react-icons/bi'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Createtournament() { 
  const history = useHistory();
let x='';
    const [tournamentdetails,setTournamentdetails]=useState()
    const [profilepic,setProfilepic]=useState()
    const formData = new FormData();
    const [issending, setIssending]=useState(true)
  const [submitval,setSubmitval]=useState(0)
  const [valid,setValid]=useState(true)
  const [selectedstartDate, setSelectedStartDate] = useState(new Date());
  const [selectedendDate, setSelectedEndDate] = useState();

    useEffect(() => {
      const postTournamentData = async () => {
        formData.append('name',tournamentdetails.name)
        tournamentdetails.tournament_image?formData.append('tournament_image',tournamentdetails.tournament_image):console.log('')
        formData.append('start_date',tournamentdetails.start_date)
        formData.append('end_date', tournamentdetails.end_date)
        formData.append('total_players',tournamentdetails.total_players)
        formData.append('max_score',tournamentdetails.max_score)
        await axios.post(
          url+'/tournament/add/', formData,   { headers: {'Content-Type':'multipart/form-data','Authorization': "Token "+tokenval }})
           .then(response => 
            {console.log(tournamentdetails)
              console.log(response);
             console.log(response.data.message);
             x=response.data.message
             if(x==='Tournament Successfully Created !'){
              alert(response.data.message+'\nYou will be redirected to Tournaments list')
             history.push("/Tournamenthome")}
             else{setValid(false)}
             })
            };
            issending?(console.log('Sending request')):(postTournamentData())
       
       
    }, [issending,submitval]);

    const handlesubmit= e=>{
      e.preventDefault();
        setIssending(false)
    setSubmitval(submitval+1)
       
    }

    const updatefileField = e => {
      setTournamentdetails({
        ...tournamentdetails,
        [e.target.name]:e.target.files[0],

      });
      const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", () => {
          setProfilepic(reader.result);
        });     
    }

    const updateField = e => {
        setTournamentdetails({
          
          ...tournamentdetails,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div>
            <h2 className='title'><BiArrowBack onClick={() => history.push('/Tournamenthome')} style={{float:'left'}}/>Create Tournament</h2>
            
        <Form onSubmit={handlesubmit}>
        {valid?
    <div style={{color:'red',textAlign:'center'}}>{x}</div>:<></>}
{profilepic?<img alt='Profilepicture' src={profilepic} className='circleprofpic'/>:<img alt='Profilepicture' src={tournpic} className='circleprofpic'/>}

        <label htmlFor='photo-input' className='label'>Add photo</label>
            <input type='file' onChange={updatefileField} name='tournament_image' id='photo-input' accept='image/*' />
            <div className='formcontrol'>
            <Form.Control className='fieldsstyle' style={{width:'94%',marginLeft:'11px'}} onChange={updateField} name='name' required type='text' size='lg' placeholder='Tournament name' />
           <div className='datestyle'> 
            <div>Start Date:</div>
            {/* <input className='fieldsstyle' onChange={updateField} name='start_date' required type='date' placeholder='Start Date(DD/MM/YY}'  /> */}
            <DatePicker className='fieldsstyle' selected={selectedstartDate} onChange={date => setSelectedStartDate(date)} dateFormat='dd/MM/yyyy' showYearDropdown minDate={new Date()}/>
           </div>
           <div className='datestyle'> 
            <div > End Date:</div>
           {/*  <input className='fieldsstyle' onChange={updateField} name='end_date' required type='date' placeholder='Start Date(DD/MM/YY}'  /> */}
           <DatePicker className='fieldsstyle' selected={selectedstartDate} onChange={date => setSelectedEndDate(date)} dateFormat='dd/MM/yyyy' showYearDropdown minDate={selectedstartDate}/>
           </div><br/>
         <Container><Row><Col> <Form.Label style={{fontSize:'20px'}}>Number of Players</Form.Label></Col><Col><Form.Control onChange={updateField} name='total_players' required type='Integer' placeholder='Total Players' /></Col></Row><br/>
         <Row><Col> <Form.Label style={{fontSize:'20px'}}>Max score Per set</Form.Label></Col><Col><Form.Control onChange={updateField} name='max_score' required type='Integer' placeholder='Max Score' /></Col></Row>
    <br/><Form.Label style={{fontSize:'21px'}}><b>Matches in the Tournament</b></Form.Label>
      <Form.Check type='checkbox' style={{fontSize:'18px',margin:'7px'}} label="Men's Singles"      />
      <Form.Check type='checkbox' style={{fontSize:'18px',margin:'7px'}} label="Women's Singles"      />
      <Form.Check type='checkbox' style={{fontSize:'18px',margin:'7px'}} label="Men's Doubles"      />
      <Form.Check type='checkbox' style={{fontSize:'18px',margin:'7px'}} label="Women's Doubles"      />
      </Container>
            </div>
        
        <br></br>
       
            
     <Button style={{borderRadius:'0%'}} type="submit" variant="primary" size='lg' block> Save</Button>
     <br/>
     </Form>
        </div>
    )
}
