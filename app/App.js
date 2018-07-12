import React, {Component} from 'react';
import {connect} from 'react-redux';
import ComponentFactory from './components/ComponentFactory';
import Boot from './Boot';

let bootFirst = true;

class App extends Component {
    render() {
        if (bootFirst) {
            new Boot(this.props.dispatch);
            bootFirst = false;
        }
        let layers = G.LayerManager.getLayerAll().map((layer) => { // 레이어 가져옴
            let popups;
            if (layer && layer.popups && layer.popups.length) {
                popups = layer.popups.map((popup) => { // 팝업 가져옴
                    return ComponentFactory.getComponent(popup.data.name, {key: popup.id, id: popup.id, isShow: popup.isShow});
                });
            }
            return ComponentFactory.getComponent(layer.data.name, {key: layer.id, id: layer.id, isShow: layer.isShow, children: popups});
        });
        return <div>{layers}</div>; // 화면에 출력
    }
}
/**
 * 액션 dispatch에 따른 스토어 상태를 받아 컴포넌트가 필요로하는 props를 반환하기 위해서 connect한다.
 */
export default connect((state) => state)(App);