import AppDispatcher from './framework/AppDispatcher';
import LayerManager from './framework/LayerManager';
import PopupManager from './framework/PopupManager';
import ACTION_TYPE from './common/ActionType';
import RCU from './common/RCU';
import TEST_API from './api/TEST_API';

/**
 * 부팅 시작
 */
class Boot {
    constructor(dispatch) {
        this.setConfiguration(dispatch);
        this.start();
    }

    /**
     * 글로벌 변수에서 관리할 클래스 선언
     * @param dispatch
     */
    setConfiguration(dispatch) {
        window.G = {LayerManager, PopupManager, AppDispatcher, RCU, ACTION_TYPE,};
        G.AppDispatcher.setDispatch(dispatch);
    }

    /**
     * 부팅 후 초기화 시작
     */
    start() {
        TEST_API.getDataJson().then((res) => console.log(res));
        TEST_API.getDataText().then((res) => console.log(res));
        G.AppDispatcher.dispatch({type: G.ACTION_TYPE.PUSH_LAYER, data: {name: 'Showwindow'}}); // 시작 레이어 추가!!
    }
}

export default Boot;