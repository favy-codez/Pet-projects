import React from 'react'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {FaEnvelope, FaMapMarkedAlt, FaPhone, FaGenderless} from 'react-icons/fa'

const ProfileCard = ({details}) => {
  return (
    <div>
      <Card>
        <CardBody className='text-center bg-success-subtle'>
          <img className='rounded-circle img-thumbtail border-danger' height="150" width='150' src={details.picture?.large} />
          <CardTitle className=' text-primary'>
            <span>Name: {details.name?.title}.{details.name?.first} {details.name?.last}</span>
          </CardTitle>
          <CardText className='m-1'>
            <span>Age: {details.dob?.age}</span>
          </CardText>
          <CardText className='m-1'>
            <span>Phone number: {details.phone}</span>
          </CardText>
          <CardText className='m-1'>
            <span>Email: {details.email}</span>
          </CardText>
          <CardText className='m-1'>
            <span>
              Location: {details.location?.city}</span>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProfileCard