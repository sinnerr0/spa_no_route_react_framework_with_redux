import React from 'react';
import Popup from '../../../framework/components/Popup';
import styles from './DefaultPopup.css';

export default class DefaultPopup extends Popup {
    constructor() {
        super(...arguments);
        this.setKeys([G.RCU.KEY_LEFT, G.RCU.KEY_RIGHT, G.RCU.KEY_UP, G.RCU.KEY_DOWN, G.RCU.KEY_ENTER, G.RCU.KEY_1, G.RCU.KEY_2, G.RCU.KEY_BACK, G.RCU.KEY_EXIT]);
        this.setKeyCallback(this.onKeyPressed.bind(this));
    }

    onKeyPressed(e) {
        console.log('[DefaultPopup] onKeyPressed', e);
        if (e.keyCode === G.RCU.KEY_1) {
            G.AppDispatcher.dispatch({type: G.ACTION_TYPE.PUSH_LAYER, data: {name: 'Showwindow'}});
        } else if (e.keyCode === G.RCU.KEY_2) {
            G.AppDispatcher.dispatch({type: G.ACTION_TYPE.PUSH_POPUP, data: {name: 'DefaultPopup'}});
        } else if (e.keyCode === G.RCU.KEY_BACK) {
            G.AppDispatcher.dispatch({type: G.ACTION_TYPE.POP_POPUP});
        } else if (e.keyCode === G.RCU.KEY_EXIT) {
            G.AppDispatcher.dispatch({type: G.ACTION_TYPE.POP_LAYER});
        }
    }

    render() {
        return super.render(
            <div className={styles.bg}>{this.props.id}</div>
        );
    }
}