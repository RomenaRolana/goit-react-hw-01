import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './components/Profile/userData/userData.json';
import friendData from './components/FriendList/data/friendData.json';
import transactionData from './components/TransactionHistory/transactionData/transactionData.json';

function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList data={friendData} />
      <TransactionHistory data={transactionData} />
    </>
  );
}

export default App;
