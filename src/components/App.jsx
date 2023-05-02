import { Profile } from './Profile/Profile';
import userData from 'data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        location={userData.location}
        tag={userData.tag}
        stats={userData.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
