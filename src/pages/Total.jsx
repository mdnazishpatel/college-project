import React, { useEffect, useState } from 'react';
import Header from './Header';
import total from '../API/Data';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSearch } from '../Context/Searchcontext';
import NoData from './Nodata';

export default function Total() {

  const { searchTerm } = useSearch();

  const filteredstartup = total.startups.filter((startup) =>
    `${startup.name} ${startup.Sector}`.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );


  return (
    <div   style={{ backgroundColor: '#686868', minHeight: '100vh' }}>
      <Header/>
    
      <Container
  fluid
  style={{ backgroundColor: '#686868', paddingTop: '2rem', minHeight: '100vh' }}
>
  <h2 className="mb-4 text-center fw-bold" style={{ color: '#58a6ff' }}>
    Government Startup Sectors
  </h2>
  {filteredstartup.length > 0 ? (
    <Row>
      {filteredstartup.map((startup, index) => (
        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
          <Card
            className="shadow-lg h-100 border-0"
            style={{ backgroundColor: '#161b22', color: '#c9d1d9' }}
          >
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title style={{ color: '#58a6ff' }}>{startup.Sector}</Card.Title>
                <Card.Text>
                  <strong style={{ color: '#8b949e' }}>Recognized Startups:</strong>{' '}
                  {startup.NumberOfRecognizedStartups}
                  <br />
                  <strong style={{ color: '#8b949e' }}>Jobs Created:</strong>{' '}
                  {startup.NumberOfJobsCreated}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <NoData />
  )}
</Container>

    </div>
  );
}
