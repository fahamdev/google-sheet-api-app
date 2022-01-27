import './App.css';
import UserEntryForm from './components/UserEntryForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Google Sheet APP
        </p>
      </header>
      <body>
        <div className="ui container Top-margin">
          <UserEntryForm/>
          <UserList/>
        </div>
      </body>
    </div>
  );
}

export default App;
