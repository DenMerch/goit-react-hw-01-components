import { Profile } from "./profile/Profile";

import user from '../user.json'
import data from '../data.json'
import { Statistics } from "./statistics/Statistics";


export const App = () => {
  return (
    <div
      style={{
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
    </div>
  );
};
