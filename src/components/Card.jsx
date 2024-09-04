// src/components/Card.jsx
import React from 'react';
import styled from 'styled-components';

// Estilos para la tarjeta (Card)
const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 16px 0 8px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

// Componente Card que acepta props para la imagen, título y descripción
function Card({ image, title, description }) {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}

export default Card;
