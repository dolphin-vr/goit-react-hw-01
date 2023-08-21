import styled from "styled-components";

export const List = styled.ul`
   margin: 0 auto;
   width: 400px;
   display: flex;
   flex-direction: column;
   gap: ${props => props.theme.spacing(5)};
   padding: ${props => props.theme.spacing(2)};
`