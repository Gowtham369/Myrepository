import { useParams,useHistory } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'
import { Col, Container, Row } from 'react-bootstrap'
import {url} from '../url'
import {tokenval} from '../Home/Tournamenthome'
import axios from 'axios'



export default function Tournamentdetails() {
const history=useHistory()
 let {id}=useParams()
const [tournamentdetails,setTournamentdetails]=useState()
const [clone,setClone]=useState(false)
 useEffect(() => {
    const getData = async () => {
      await axios(
        url+'/tournaments?id='+id,    { headers: {Authorization: "Token "+tokenval }})
         .then(response => 
          {setTournamentdetails(response.data.data)
            console.log(response);
           console.log(response.data.message); 
          })  //""
             
      };
     getData()

  }, []);

useEffect(()=>{const postData = async () => {
    await axios.post(
        url+'/tournament/clone/',tournamentdetails , { headers: {Authorization: "Token "+tokenval }})
        .then(response => 
        {console.log(response);
        console.log(response.data.message);
        })
        postData()
        console.log('saaf')
        }},[clone])

    const deletetournament=e=>{const postData = async () => {
        await axios.post(
            url+'/tournament/delete/',tournamentdetails , { headers: {Authorization: "Token "+tokenval }})
            .then(response => 
            {console.log(response);
            console.log(response.data.message);
            })
            postData()
            }}
  if(!tournamentdetails)
  return <>Loading...</>
  return (  
        <div>
            <h2 className='title'>
                <BiArrowBack onClick={() => history.push('/Tournamenthome')} style={{float:'left'}}/>
                Tournament details 
                <BsThreeDotsVertical style={{float:'right'}}/>
                <div className="menu">
                    <button onClick={()=>setClone(true)}> Clone Tournament </button>
                    <button onClick={deletetournament}> Delete Tournament </button>
                </div>
            </h2>
            {tournamentdetails.map((data,i) => 
            {return (<Container key={i}>
                        <h4>Auriga TT Championship</h4>
                        <Row>
                            <Col>Starts on  : </Col>
                            <Col>{data.start_date}</Col>      
                        </Row><br/>
                        <Row>
                            <Col>
                            <div>Last date of Registration  :</div>
                            </Col>
                            <Col>
                            {data.end_date}
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col>
                            Maximum score per set  :
                            </Col>
                            <Col>
                            {data.max_score}
                            </Col>
                        </Row><br/>
                        <b>Matches in the tournament -----------------   </b>
                        <Row><br/>
                            
                        </Row>
                    </Container>)
            })}
    </div>
    )
}
