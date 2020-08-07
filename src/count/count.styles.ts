import styled, { css } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const baseButton = css`
  height: 50px;
  width: 50px;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  margin: 0 30px;
`;

const IncrementButton = styled.button`
  ${baseButton};
  background-color: #28a745;
`;

const DecrementButton = styled.button`
  ${baseButton};
  background-color: #dc3545;
`;

const Count = styled.p`
  font-size: 120px;
  color: #333;
`;

export const S = { Container, Count, IncrementButton, DecrementButton };
