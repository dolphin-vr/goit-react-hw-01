import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import {Layout} from 'Layout';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
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