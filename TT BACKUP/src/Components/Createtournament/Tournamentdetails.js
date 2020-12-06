import { useParams,useHistory, Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import axios from 'axios'
import profpic from './Tournament.jpg'
import {MdContentCopy,MdDelete} from 'react-icons/md'



export default function Tournamentdetails() {
const history=useHistory()
 let {id}=useParams()
const [tournamentdetails,setTournamentdetails]=useState()
const [menu,setMenu]=useState(false)

const tournamentid={'tournament_id':id}


 useEffect(() => {
    const getData = async () => {
      await axios(
        url+'/tournaments?id='+id,    { headers: {Authorization: "Token "+tokenval }})
         .then(response => 
          {setTournamentdetails(response.data.data)
            console.log(response);
           console.log(response.data.message); 

          })  
             
      };
     getData()

  }, []);

const clonetournament= () => {
     axios.post(
        url+'/tournament/clone/',tournamentid , { headers: {Authorization: "Token "+tokenval }})
        .then(response => 
        {console.log(response);
        console.log(response.data.message);
        alert(response.data.message)
        })
       history.push('/Tournamenthome')
        }
    const deletetournament=()=>{
         axios.post(
            url+'/tournament/delete/',tournamentid , { headers: {Authorization: "Token "+tokenval }})
            .then(response => 
            {console.log(response);
            console.log(response.data.message);
            alert(response.data.message)
            })
            history.push('/Tournamenthome')
            }
const menuhandle = ()=>{
menu?setMenu(false):setMenu(true)
}
const menuclose=()=>{
    if(menu)setMenu(false)
}

  if(!tournamentdetails)
  return <>Loading...</>
  return (  
        <div onClick={menuclose}>
            <h2 className='title' >
                <BiArrowBack onClick={() => history.push('/Tournamenthome')} style={{float:'left'}}/>
                Tournament details 
                <BsThreeDotsVertical onClick={menuhandle} style={{float:'right'}}/>
               
            </h2>
            {menu?<div className="menu">

                    <button className='menubtn' onClick={clonetournament}><MdContentCopy/> Clone Tournament </button>
                    <button className='menubtn' onClick={deletetournament}><MdDelete/> Delete Tournament </button>
                </div>:<></>}
            
            {tournamentdetails.map((data,i) => 
            {if(data.tournament_image==='http://139.59.16.180:8006/media/False')
            return data.tournament_image=false
                
            return (<div key={i}><Container >
                        <h4 className='tournamenttitle'><b>Auriga TT Championship</b></h4>
                        <Row>
                        <div className='tournamentdetailsimagediv'>
                {data.tournament_image?<img alt='Tournamentimage' src={data.tournament_image} className='circleprofpic'/>
                :
                <img alt='Tournamentimage' src={profpic} className='circleprofpic'/>}
                </div>
                        </Row>
                        <Row>
                            <Col className='mutedtext' style={{fontSize:'18px'}}>Starts on  : </Col>
                            <Col>{data.start_date}</Col>      
                        </Row><br/>
                        <Row>
                            <Col>
                            <div className='mutedtext' style={{fontSize:'18px'}}>Last date of Registration  :</div>
                            </Col>
                            <Col>
                            {data.end_date}
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className='mutedtext' style={{fontSize:'18px'}}>
                            Maximum score per set  :
                            </Col>
                            <Col>
                            {data.max_score}
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className='mutedtext' style={{fontSize:'18px'}}>
                            Total players  :
                            </Col>
                            <Col >
                            {data.total_players}
                            </Col>
                        </Row><br/>
                        <b>Matches in the tournament -----------------   </b>
                        <Row><br/>
                            
                        </Row>
                        <br/><br/>
                    <br/>
                    </Container>
              {!data.is_match_created?<Link style={{textDecoration:'none'}} to={'/Tournamentdetails/'+id+'/Createdraws'}><Button style={{borderRadius:'0%'}} size="lg" block>
    Create Draws
  </Button></Link>:
  <Link to={'/Tournamentdetails/'+id+'/Createdraws/Matches'}>
    <Button style={{borderRadius:'0%'}} size="lg" block>Show Generated Draws</Button>
            </Link>}</div>)
            })}
    </div>
    )
}
