import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { RouterAuth } from './router/Router';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterAuth />;
    </Provider>
  );
}

export default App;
