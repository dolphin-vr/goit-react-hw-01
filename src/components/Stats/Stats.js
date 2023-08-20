import { Activiti, StatsName, StatsValue } from "./Stats.styled"


export const Stats = ({activiti: {name, value}}) => {
   return (
      <>
         <Activiti><StatsName>{name}</StatsName><StatsValue>{value}</StatsValue></Activiti>
      </>
   )
}