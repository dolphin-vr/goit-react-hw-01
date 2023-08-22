import styled from "styled-components";

export const Table = styled.table`
   margin: 0 auto ${props => props.theme.spacing(4)};
   width: 400px;
   padding: ${props => props.theme.spacing(4)};
   background-color: ${props => props.theme.colors.white};
   border-collapse: collapse;
`

export const TableHead = styled.thead`
   /* margin: 0 auto ${props => props.theme.spacing(4)}; */
   width: 100%;
   background-color: ${props => props.theme.colors.deepsky};
   th:nth-child(n+2) {
   border-left: 1px solid ${props => props.theme.colors.lightgrey};
   }
`

export const ColumnTitle = styled.th`
   width: calc(100% / 3);
   /* margin: 0; */
   padding: ${props => props.theme.spacing(2)};
   text-transform: uppercase;
   text-align: center;
   color: ${props => props.theme.colors.white};
`

export const TableBody = styled.tbody`
   /* margin: 0 auto ${props => props.theme.spacing(4)}; */
   width: 100%;
   /* background-color: ${props => props.theme.colors.midgrey}; */
   /* tr:nth-child(odd) {
   background-color: ${props => props.theme.colors.white};
   } */
   tr:nth-child(even) {
   background-color: ${props => props.theme.colors.lightgrey};
   }
`

// export const Trans