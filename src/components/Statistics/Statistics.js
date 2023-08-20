import { List, ListItem, Label, Percent, Title, Wrapper } from "./Statistics.styled"

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }

export const Statistics = ({data, title}) =>{
   return(
      <Wrapper>
         {title ? <Title>{title}</Title> : ''}
         <List>
            {data.map(e => 
               <ListItem key={e.id} style={{backgroundColor: getRandomHexColor()}}>
                  <Label>{e.label}</Label>
                  <Percent>{e.percentage}</Percent>
               </ListItem>
               )}
         </List>
      </Wrapper>
   )
}