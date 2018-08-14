import {combineReducers} from 'redux';
import layer from './layer';
import etc from './etc';

/**
 * reducers폴더 아래의 모든 reducer들을 합친다. reducer 추가 시 추가한다.
 * @type {Reducer<S>}
 */
export default combineReducers({
    layer, // 레이어 및 팝업 결정
    etc,
});