import React, { useState } from 'react';

const Invitacion = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: 'absolute',
    backgroundColor: '#E74C3C',
    color: '#FFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  const handleMouseEnter = () => {
    const newLeft = Math.random() * (window.innerWidth - 100);
    const newTop = Math.random() * (window.innerHeight - 50);
    setNoButtonStyle({
      ...noButtonStyle,
      left: `${newLeft}px`,
      top: `${newTop}px`,
      transition: '0.5s ease-in-out',
    });
  };

  return (
    <div style={{backgroundColor:'#BCCBEC', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>¿Quieres salir conmigo:3 ?</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type="button"
          style={{ backgroundColor: '#3498DB', color: '#FFF', padding: '10px 20px', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}
          onClick={() => alert('¡Sí, nos vemos!')}
        >
          Sí!!!
        </button>
        <button
          type="button"
          onMouseEnter={handleMouseEnter}
          style={{ ...noButtonStyle, marginLeft: '150px' }}
          onClick={() => alert('¡No!')}
        >
          No :|
        </button>
      </div>
    </div>
  );
};

export default Invitacion;
