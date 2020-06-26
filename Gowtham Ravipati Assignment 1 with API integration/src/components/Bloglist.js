import React, {Component} from 'react';
import { Table} from 'react-bootstrap';
import './Styling.scss';
class Bloglist extends Component {
    render(){
    return (
  <div className='styling'>
     <h1 className='text-center'>Blog List</h1>
     <br/>
<Table striped bordered hover>
<thead>
 <tr>
   <th>Blog ID</th>
   <th>First Name</th>
   <th>Last Name</th>
   <th>Username</th>
 </tr>
</thead>
<tbody>
 <tr>
   <td>1</td>
   <td>Antony</td>
   <td>Baker</td>
   <td>ABK</td>
 </tr>
 <tr>
   <td>2</td>
   <td>Vedant</td>
   <td>Adusumalli</td>
   <td>Deathpierce</td>
 </tr>
 <tr>
   <td>3</td>
   <td>Karen</td>
   <td>Judy</td>
   <td>KJY</td>
 </tr>
</tbody>
</Table>
  </div>
     );}
  }
  
  export default Bloglist;
  