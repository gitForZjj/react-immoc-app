import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
const render = (App) => {
    ReactDOM.render(
        <App />, document.getElementById('root')
    )
}
render(App)
if (module.hot) { // 修改后不会刷新页面只是改变单一模块
    module.hot.accept('./App', () => {
        const nextApp = require('./App').default;
        render(nextApp)
    })
}
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
