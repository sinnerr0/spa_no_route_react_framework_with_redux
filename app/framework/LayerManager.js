/**
 * 레이어 관리 클래스
 */
class LayerManager {
    setStore(store) {
        this.store = store;
        store.subscribe(this.updateStoreSate.bind(this));
    }

    updateStoreSate() {
        this.storeSate = this.store.getState();
    }

    getLayer(id) {
        let layers = this.getLayerAll();
        for (let layer of layers) {
            if (layer.id === id) {
                return layer;
            }
        }
    }

    getTopLayer() {
        return this.storeSate.layer[this.storeSate.layer.length - 1];
    }

    getLayerAll() {
        return this.storeSate.layer;
    }
}

export default new LayerManager();