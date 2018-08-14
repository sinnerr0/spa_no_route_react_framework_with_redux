import React from 'react';
import {GPopup, GRectangle} from '../../../framework/Components';

export default class DefaultPopup extends GPopup {
    constructor() {
        super(...arguments);
        this.setKeys([G.RCU.KEY_1, G.RCU.KEY_2]);
        this.setKeyCallback(this.onKeyPressed.bind(this));
    }

    onKeyPressed(e) {
        G.Log.debug(this, 'onKeyPressed', e);
        if (e.keyCode === G.RCU.KEY_1) {
            G.AppDispatcher.dispatch({type: G.ACTION_TYPE.PUSH_POPUP, payload: {name: 'DefaultPopup'}});
        } else if (e.keyCode === G.RCU.KEY_2) {
            G.AppDispatcher.dispatch({type: G.ACTION_TYPE.POP_POPUP});
        }
    }

    render() {
        if (!this.color) {
            this.color = '#' + parseInt(Math.random() * 255).toString(16) + parseInt(Math.random() * 255).toString(16) + parseInt(Math.random() * 255).toString(16);
        }
        return <GRectangle width="100px" height="100px" color={this.color}>{this.props.id}</GRectangle>;
    }
}