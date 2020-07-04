import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col, Button } from 'react-bootstrap';

/**
 * Component
 * @param {object} props - Component props
 */
const Contact = () => {
  return (
    <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
      <div id='contact' className='mb-5'>
        <h2 className='text-center text-primary mb-4 title'>Contacto</h2>
        <Row>
          <Col md={6}></Col>
          <Col md={6}></Col>
        </Row>
      </div>
    </ScrollAnimation>
  );
};

export default Contact;
