import styled from "styled-components";

const getStatusColor = p => {
   if (p.status){
      return p.theme.colors.green;      
   }
   return p.theme.colors.red;
 };

export const ListItem = styled.li`
   display: flex;
   align-items: center;
   gap: ${props => props.theme.spacing(4)};
   padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
   box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.7);
`

export const Status = styled.span`
   width: 24px;
   height: 24px;
   border-radius: 50%;
   background-color: ${getStatusColor};
`

export const Avatar = styled.img`
width: 64px;
   border-radius: ${props => props.theme.radii.sm};   
`

export const Name = styled.p`
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-weight: 700;
   font-size: 20px;
`
