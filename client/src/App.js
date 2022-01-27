import { useEffect, useState } from 'react';
import './App.css';
import UserEntryForm from './components/UserEntryForm';
import UserList from './components/UserList';
import serverAPI from './lib/serverAPI';

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const fetchedUsers = await serverAPI.get('/google-sheet')
    setUsers(fetchedUsers.data)
  }

  const saveUser = async (name, email) => {
    await serverAPI.post('/google-sheet', { name, email });
    setTimeout(() => { fetchUsers() }, 1000);
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Google Sheet APP
        </p>
      </header>
      <div className="ui container Top-margin">
        <UserEntryForm saveUser={saveUser} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
