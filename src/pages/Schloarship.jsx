import React, { useState } from 'react'
import Header from './Header'
import totalschl from '../API/Mainschl'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSearch } from '../Context/Searchcontext';
import NoData from './Nodata';

export default function Schloarship() {


  const { searchTerm } = useSearch();

  const filteredschloarship = totalschl.schloarship.filter((schloarship) =>
    schloarship.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div style={{ backgroundColor: '#686868', minHeight: '100vh' }}>
      <Header />

      <Container fluid className="py-5">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#58a6ff' }}>
          Government schloarship
        </h2>
        {filteredschloarship.length > 0 ? (


          <Row>
            {filteredschloarship.map((schloarship, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <Card
                  className="shadow-lg h-100 border-0"
                  style={{ backgroundColor: '#161b22', color: '#c9d1d9' }}
                >
                  <Card.Body className="d-flex flex-column justify-content-between">

                    <div
                      style={{
                        maxHeight: '220px',
                        overflowY: 'auto',
                        paddingRight: '6px',
                      }}
                    >
                      <Card.Title style={{ color: '#58a6ff' }}>
                        {schloarship.name}
                      </Card.Title>
                      <Card.Text>
                        <strong style={{ color: '#8b949e' }}>
                          Description:
                        </strong>{' '}
                        {schloarship.description}
                        <br />
                        <strong style={{ color: '#8b949e' }}>
                          Eligibility:
                        </strong>{' '}
                        {schloarship.eligibility}
                        <br />
                        <strong style={{ color: '#8b949e' }}>Benefits:</strong>{' '}
                        {schloarship.benefits}
                        <br />
                        <strong style={{ color: '#8b949e' }}>
                          Application Process:
                        </strong>{' '}
                        {schloarship.application_process}
                      </Card.Text>
                    </div>

                    {/* Button Section */}
                    <div className="mt-3">
                      <a
                        href={schloarship.application_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline-primary"
                          className="w-100 fw-bold"
                          style={{
                            borderColor: '#58a6ff',
                            color: '#58a6ff',
                            backgroundColor: '#0d1117',
                          }}
                        >
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) :(<NoData/>)
        }
      </Container>
    </div>
  )
}
