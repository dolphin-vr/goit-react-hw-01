import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import {Layout} from 'Layout';
import { GlobalStyle } from 'GlobalStyle';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <GlobalStyle />
    </Layout>
  );
};


// {/* <div
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}
// >
// React homework template
// </div> */}