import {Avatar, ListItem, Status, Name} from './FriendListItem.styled'

export const FriendListItem = ({friend: {id, avatar, isOnline, name}})=>{
   return (      
      <ListItem id={id}>
         <Status status={isOnline}></Status>
         <Avatar src={avatar} alt={name + " avatar"} />
         <Name>{name}</Name>
      </ListItem>
   )
}