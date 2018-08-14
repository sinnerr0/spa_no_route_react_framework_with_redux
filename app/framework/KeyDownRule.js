/**
 * 키 전파 룰 설정
 */
class KeyDownRule {
    /**
     * 키 전파 핸들러
     * @param {object} listener {id:number, listener:function}
     * @returns {boolean} 키를 전달할 지 여부
     */
    handleKeyDown(listener) {
        let propagation = false;
        if (G.PopupManager.getTopPopup()) { // 팝업이 있을 경우
            if (listener.id === G.PopupManager.getTopPopup().id) {
                propagation = true;
            }
        } else if (G.LayerManager.getTopLayer()) { // 레이어가 있을 경우
            if (listener.id === G.LayerManager.getTopLayer().id) {
                propagation = true;
            }
        }
        return propagation;
    }
}

export default KeyDownRule;