import { FirstCell, Cell, Row } from "./Transaction.styled"

export const Transaction = ({transaction: {id, type, amount, currency}})=>{
   return(
            <Row id={id}>
               <FirstCell>{type}</FirstCell>
               <Cell>{amount}</Cell>
               <Cell>{currency}</Cell>
            </Row>
   )
}