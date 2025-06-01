import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Knowmore() {
  return (
    <div style={{ backgroundColor: '#686868', minHeight: '100vh', color: '#c9d1d9' }}>
      <Header />
      
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#58a6ff' }}>
          Explore Government Resources
        </h2>

        <Row className="justify-content-center gap-4">
          <Col xs={12} md={8} lg={6}>
            <Link to="/total" className="d-grid mb-3">
              <Button
                variant="outline-primary"
                className="fw-bold py-3"
                style={{
                  borderColor: '#58a6ff',
                  color: '#58a6ff',
                  backgroundColor: '#161b22',
                  borderRadius: '12px',
                }}
              >
                Startups & Job Creation Statistics
              </Button>
            </Link>
          </Col>

          <Col xs={12} md={8} lg={6}>
            <Link to="/schemes" className="d-grid mb-3">
              <Button
                variant="outline-primary"
                className="fw-bold py-3"
                style={{
                  borderColor: '#58a6ff',
                  color: '#58a6ff',
                  backgroundColor: '#161b22',
                  borderRadius: '12px',
                }}
              >
                Government Schemes & Application Links
              </Button>
            </Link>
          </Col>

          <Col xs={12} md={8} lg={6}>
            <Link to="/schloarship" className="d-grid mb-3">
              <Button
                variant="outline-primary"
                className="fw-bold py-3"
                style={{
                  borderColor: '#58a6ff',
                  color: '#58a6ff',
                  backgroundColor: '#161b22',
                  borderRadius: '12px',
                }}
              >
                Scholarships & Direct Apply Links
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
