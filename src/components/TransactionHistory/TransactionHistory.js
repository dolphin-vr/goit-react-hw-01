import { Transaction } from "components/Transaction/Transaction"
import { Table, TableHead, TableBody, ColumnTitle } from "./TransactionHistory.styled"


export const TransactionHistory = ({transactions})=>{
   return(
      <Table>
         <TableHead>
            <tr>
               <ColumnTitle>Type</ColumnTitle>
               <ColumnTitle>Amount</ColumnTitle>
               <ColumnTitle>Currency</ColumnTitle>
            </tr>
         </TableHead>
         <TableBody>
            {transactions.map(e=><Transaction transaction={e}></Transaction>)}
         </TableBody>
      </Table>
   )
}