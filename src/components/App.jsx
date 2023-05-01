import { Profile } from './Profile/Profile';
import userData from 'data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';

export function App() {
  return (
    <div
      style={{
        height: '100vh',
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
    </div>
  );
}
