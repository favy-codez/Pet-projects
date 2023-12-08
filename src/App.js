import React, {useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileCard from './Component/ProfileCard'
import './App.css';
import Axios  from 'axios';

function App() {
  const [details, setDetails] =useState({})

  const fetchUsers = async() => {
     const {data} = await Axios.get("https://randomuser.me/api/")
     console.log(data)

     const details = data.results[0]
     setDetails(details)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  
  return (
    <div className="App">
      <Container fluid className="p-4 ">
        <h1 className='text-center'>Random User Generator</h1>
          <Row>
            <Col md={4} className='offset-md-4 mt-4'>
              <ProfileCard details={details}/>
            </Col>
          </Row>
          <div className='mt-3 '>
          <Button onClick={fetchUsers} className='bg-danger px-5 offset-md-5 text-center btn-custom'>Get random user</Button>
          </div>
      </Container>
    </div>
  );
}

export default App;
