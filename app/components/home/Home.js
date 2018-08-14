import React from 'react';
import {GLayer, GContainer} from '../../framework/Components';
import Top from './top/Top';
import Bottom from './bottom/Bottom';
import Center from './center/Center';

export default class Home extends GLayer {
    constructor() {
        super(...arguments);
        this.setKeys([G.RCU.KEY_0, G.RCU.KEY_1, G.RCU.KEY_2, G.RCU.KEY_3, G.RCU.KEY_4, G.RCU.KEY_5, G.RCU.KEY_6, G.RCU.KEY_7, G.RCU.KEY_8, G.RCU.KEY_9]);
        this.setKeyCallback(this.onKeyPressed.bind(this));
    }

    onKeyPressed(e) {
        G.Log.debug(this, 'onKeyPressed', e);
        let number = e.keyCode - G.RCU.KEY_0;
        G.AppDispatcher.dispatch({type: G.ACTION_TYPE.PUSH_POPUP, payload: {name: 'DefaultPopup'}});
    }

    render() {
        const homeData = G.LayerManager.getTopLayer().payload;
        return (
            <GContainer position="absolute" width="1960px" height="1080px" overflow="hidden">
                <Center recommend={homeData.data.recommend}/>
                <Top userName={homeData.data.userName}/>
                <Bottom info={homeData.data.info}/>
                {this.props.children}
            </GContainer>
        );
    }
}