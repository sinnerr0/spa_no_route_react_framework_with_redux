/**
 * 팝업 관리 클래스
 */
class PopupManager {
    setStore(store) {
        this.store = store;
        store.subscribe(this.updateStoreSate.bind(this));
    }

    updateStoreSate() {
        this.storeSate = this.store.getState();
        this.popups = this.storeSate.layer[this.storeSate.layer.length - 1].popups;
    }

    getPopup(id) {
        let popups = this.getPopupAll();
        for (let popup of popups) {
            if (popup.id === id) {
                return popup;
            }
        }
    }

    getTopPopup() {
        return this.popups[this.popups.length - 1];
    }

    getPopupAll() {
        return this.popups;
    }
}

export default new PopupManager();