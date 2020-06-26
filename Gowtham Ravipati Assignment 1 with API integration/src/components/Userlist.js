import React, {Component} from 'react';
import { Table} from 'react-bootstrap';
import axios from 'axios';
import './Styling.scss';
class Userlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists:[]
  }}
  
    componentDidMount()
    {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({lists: res.data}))
     }

    render(){
      const data=this.state.lists;
    const datalist=data.map((nam)=>{return  <tr><td>{nam.id}</td>
<td>{nam.name}</td>
  <td>{nam.username}</td>
  <td>{nam.email}</td>

  </tr>
})
    return (
  <div>
   <h1 className='text-center'>User List</h1>

   <Table className='styling' variant='dark' striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>User Name</th>
      <th>Email</th>
      
    </tr>
  </thead>
  <tbody>
  {datalist}
  </tbody>
</Table>
   
  </div>
     );}
  }
  
  export default Userlist;
  