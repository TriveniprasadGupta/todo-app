import styled from "styled-components";


export const Button = styled.button`
    padding: 0.5em 1em;
    border: transparent;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    border-radius: 10%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
 color: white;

 &:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
 }
`;


