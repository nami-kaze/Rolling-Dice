import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 12px 20px; 
  background: #3498db; 
  border-radius: 8px; 
  min-width: 200px; 
  border: none;
  font-size: 18px; 
  border: 2px solid #2980b9; 
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: #2980b9; 
    color: white;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent; /* Changed background color */
  border: 2px solid #2980b9; /* Changed border color */
  color: #2980b9; /* Changed text color */
  &:hover {
    background-color: #2980b9; /* Changed hover background color */
    border: 2px solid transparent;
    color: white;
  }
`;
