
import React from 'react';

export default function NoData({ message = "No Data Found", suggestion = "Try adjusting your search or check back later." }) {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#c9d1d9',
        marginTop: '100px',
        padding: '30px',
        backgroundColor: '#161b22',
        borderRadius: '12px',
        boxShadow: '0 0 12px rgba(88, 166, 255, 0.3)',
      }}
    >
      <h4 style={{ color: '#58a6ff', fontWeight: 'bold' }}>🔍 {message}</h4>
      <p style={{ color: '#8b949e' }}>{suggestion}</p>
    </div>
  );
}
