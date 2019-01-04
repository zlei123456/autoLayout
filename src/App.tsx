import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './modules/home/Home';
import createStore from './store/store';

class App extends React.Component {
    public render() {
        return (
            <Provider store={createStore()}>
                <Home />
            </Provider>
        );
    }
}

export default App;
