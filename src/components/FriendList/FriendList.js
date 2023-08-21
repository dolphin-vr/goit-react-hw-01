import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { List } from "./FriendList.styles"

export const FriendList = ({friends}) => {
   return (
      <List>
         {friends.map(e => 
            <FriendListItem friend={e}>
            </FriendListItem>
            )}         
      </List>
   )
}
