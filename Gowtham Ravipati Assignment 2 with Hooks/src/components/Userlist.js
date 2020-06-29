import React, {useState, useEffect} from 'react';
import { Table} from 'react-bootstrap';
import './Styling.scss';
function Userlist() 
{
    const [lists, setLists] = useState('');
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json()).then(lists => {
          let allLists = [];
          for (let i = 0; i < lists.length; i++) {
              const element = lists[i];
              function userdetails(){
                alert("Address of this person is:\n  Street:"+element.address.street+"\n Suite:"+ element.address.suite +"\n City:"+ element.address.city+"\n Zipcode:"+element.address.zipcode);
              }
              allLists.push(
                      <tr onClick={userdetails} key={i}>
                      <td>
                      <center> {element.id}</center>
                     </td>
                  <td>
                    <center>{element.username} </center>
                    </td>
                   <td>
                    <center>{element.email}</center>
                     </td>
                     <td>
                    <center>{element.phone}</center>
                     </td>
                    <td>
                     <center>{element.website}</center>
                     </td>
                  </tr>
              )
          }
          setLists(allLists);
        
      })
  } , [])
    return (
  <div>
   <h1 className='text-center'>User List</h1>

   <Table className='styling' variant='dark' striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Website</th>

    </tr>
  </thead>
  <tbody>
  {lists}
  </tbody>
</Table>
   
  </div>
     );}
  
  
  export default Userlist;
  