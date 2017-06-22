import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './js/redux'
let store = createStore(todoApp)
const render = () => {
  ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
    <App />
    </Provider>
    </AppContainer>, document.getElementById('root'))
}

render()
registerServiceWorker();
