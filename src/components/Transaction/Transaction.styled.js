import styled from "styled-components";

export const Row = styled.tr`
   color: ${props => props.theme.colors.grey};
/* padding: ${props => props.theme.spacing(2)}; */
/* :nth-child(even) {
  background-color: ${props => props.theme.colors.grey};
} */
`

export const FirstCell = styled.td`
   width: calc(100% / 3);
   padding-left: ${props => props.theme.spacing(8)};
   margin: 0;
   border-left: 1px solid ${props => props.theme.colors.midgrey};
   border-right: 1px solid ${props => props.theme.colors.midgrey};
  border-collapse: collapse;
`

export const Cell = styled.td`
   width: calc(100% / 3);
   padding: ${props => props.theme.spacing(2)};
   margin: 0;
   text-align: center;
   border-left: 1px solid ${props => props.theme.colors.midgrey};
   border-right: 1px solid ${props => props.theme.colors.midgrey};
`
