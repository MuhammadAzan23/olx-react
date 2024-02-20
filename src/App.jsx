import './App.css';
import Routers from './config/router';
// import { Store } from '@reduxjs/toolkit';
import store from './store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div> 
<Routers/>
   </div>
    </Provider>
  );
}

export default App;
