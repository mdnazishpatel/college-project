import React from 'react'
import Header from './Header'


export default function Aboutus() {
  return (

    <div style={{ backgroundColor: '#686868', minHeight: '100vh' }}>
      <Header />
      <div
        className="container mt-5"
        style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px" }}
      >
        <div className="row" style={{
          backgroundColor: "#d3d3d3",
          padding: "20px",
          borderRadius: "10px",
        }}
        >
          <div className="col-md-6">
            <h1 style={{ color: "#000" }}>About Us</h1>
            <p style={{ color: "#000" }}>
              Welcome to our website! We are committed to guiding students and professionals through powerful learning pathways. Our mission is to simplify access to the best schemes, career resources, and skill-building tools — all in one place.
            </p>
            <p style={{ color: "#000" }}>
              We aim to bridge the gap between talent and opportunity by providing clear, trusted, and up-to-date information that empowers individuals to make better career decisions.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?semt=ais_hybrid&w=740"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <img
              src="https://img.freepik.com/premium-photo/happy-young-professionals-collaborating-office-space-team-project_817921-94585.jpg?semt=ais_hybrid"
              alt="Our Services"
              className="img-fluid rounded"
            />
            <h2 style={{ color: "#000" }}>Our Mission</h2>
            <p style={{ color: "#000" }}>
              Our mission is to empower students, learners, and young professionals by providing easy access to verified schemes 📄, skill development programs 🧠, and career-building resources 🚀.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
