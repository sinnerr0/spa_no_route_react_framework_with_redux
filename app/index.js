import LayerManager from './framework/LayerManager';
import PopupManager from './framework/PopupManager';
import EventManager from './framework/EventManager';
import KeyDownRule from './rule/KeyDownRule';
import combineReducers from './reducers/combineReducers';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';

let store = createStore(combineReducers,
    /**
     * https://github.com/zalmoxisus/redux-devtools-extension
     * 크롬 확장을 통한 react dev tool 설치하여 time travel 및 debug 가능
     */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
LayerManager.setStore(store);
PopupManager.setStore(store);
EventManager.setKeydownRule(KeyDownRule);

/**
 * 컴포넌트를 Redux와 연결해서 액션을 보내고 상태를 읽기 위해
 * <Provider>로 루트 컴포넌트를 감싸주어 Redux의 Store를 사용할 수 있도록 한다.
 */
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);