import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Col, Row } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function Home() {



  return (
  
    <div style={{ backgroundColor: '#686868', minHeight: '100vh', color: '#c9d1d9' }}>
      <Header />
     
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col xs={12} md={10} lg={8}>
            <h4 className="mb-4">
              <i>🏠 Welcome to <span style={{ color: '#58a6ff' }}>Know Your Scheme</span></i>
            </h4>
            <p>
              Discover the government schemes you’re eligible for — all in one place.
              <br />
              <br />
              <strong>Know Your Scheme</strong> helps you easily explore, understand, and apply for welfare programs across education, employment, health, startups, and more.
              <br />
              Stay informed, save time, and never miss an opportunity meant for you.
            </p>
            <div className="d-grid mt-4">
              <Link to="/knowmore" className="d-grid">
                <Button
                  variant="outline-primary"
                  className="fw-bold"
                  style={{
                    borderColor: '#58a6ff',
                    color: '#58a6ff',
                    backgroundColor: '#0d1117',
                  }}
                >
                Know more
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    
      </div>
  )
}
