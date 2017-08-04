import React, { Component} from 'react';
import { Button,Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const styles = {
  button:{
    background: '#FFD84A',
    marginRight: '5px',
  },
};

class Modal extends Component {

  render() {
   return (
<div>
<Form horizontal style={{fontSize:'10px'}}>
<FormGroup controlId="formHorizontalEmail" bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
    RSVP Status
  </Col>
  <Col xs={8}>
    <FormControl type="text" placeholder="RSVP Status"  />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
    RSVP Date
  </Col>
  <Col xs={8}>
    <FormControl type="date"/>
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
   Cost Center
  </Col>
  <Col xs={8}>
    <FormControl type="text"/>
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
    Food Preference
  </Col>
  <Col xs={8}>
    <FormControl type="text" />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
    Special Needs
  </Col>
  <Col xs={8}>
    <FormControl type="text"  />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
    Assigned Location
  </Col>
  <Col xs={8}>
    <FormControl type="text" placeholder="NA" />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail"  bsSize='small'>
  <Col componentClass={ControlLabel} xs={4}>
   Assigned Seat
  </Col>
  <Col xs={8}>
    <FormControl type="number" placeholder="NA" />
  </Col>
</FormGroup>
</Form>

</div>
);
}
}
export default Modal;
