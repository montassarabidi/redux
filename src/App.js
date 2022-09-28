
import './App.css';
import Profile from './Profile';
import Login from './Login';
import { Store } from './Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
    <Provider Store={Store}>
      <Profile/>
      <Login/>
      </Provider>
    </div>
  );
}

export default App;
