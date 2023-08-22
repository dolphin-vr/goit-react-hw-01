import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import {Layout} from 'Layout';
import { GlobalStyle } from 'GlobalStyle';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { TaskTitle } from './TaskTitle/TaskTitle';

export const App = () => {
  return (
    <Layout>
      <TaskTitle title={'1 - Профіль соціальної мережі'}></TaskTitle>
      <Profile user={user} />
      <TaskTitle title={'2- Секція статистики'}></TaskTitle>
      <Statistics data={data} title="Upload stats" />
      <Statistics data={data} />
      <TaskTitle title={'3 - Список друзів'}></TaskTitle>
      <FriendList friends={friends} />
      <TaskTitle title={'4 - Історія транзакцій'}></TaskTitle>
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
