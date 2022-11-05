import styled from "styled-components";
import {colors} from "../../constants/global-styles";

export const StyledButton = styled.button<{solid?: boolean; outline?: boolean}>`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 2px 2px grey;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  ${(props) => props.solid && `
    background-color: ${colors.primaryColor};
    border: 1px solid transparent;
    color: white;
  `}
  
  ${(props) => props.outline && `
    background-color: transparent;
    border: 1px solid ${colors.primaryColor};
    color: ${colors.primaryColor};
  `}
  
  &:hover {
    font-weight: bold;
    ${(props) => props.outline && `
    background-color: ${colors.primaryColor};
    border: 1px solid transparent;
    color: white;
  `}

    ${(props) => props.solid && `
    background-color: transparent;
    border: 1px solid ${colors.primaryColor};
    color: ${colors.primaryColor};
  `}
  }
  
  &:active {
    box-shadow: 0 0;
    ${(props) => props.outline && `
    background-color: ${colors.primaryColor};
    border: 1px solid transparent;
    color: white;
  `}

    ${(props) => props.solid && `
    background-color: transparent;
    border: 1px solid ${colors.primaryColor};
    color: ${colors.primaryColor};
  `}
  }
`;

export const H1 = styled.h1`
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 30px;

  @media(max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
`;
