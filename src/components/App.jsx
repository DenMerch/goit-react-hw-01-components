import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from './frends/FriendList'
import { Transactions } from './transaction/Transactions'
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

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
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
