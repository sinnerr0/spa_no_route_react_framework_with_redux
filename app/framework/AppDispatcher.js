/**
 * 액션을 실행시키기 위한 flux dispatcher
 */
class AppDispatcher {
    constructor() {
    }

    setStore(store) {
        this.store = store;
        this.dispatch = store.dispatch;
    }

    dispatch(action = {}) {
        this.dispatch(action);
    }

    /**
     * Dispatches three actions for an async operation represented by promise.
     */
    dispatchAsync(promise, types = {}, payload = {}) {
        const {request, success, failure} = types;
        if (request) {
            this.dispatch({type: request, payload: Object.assign({}, payload)});
        }
        promise.then(
            (response) => {
                this.dispatch({
                    type: success,
                    payload: Object.assign({}, payload, {response})
                })
            },
            error => this.dispatch({
                type: failure,
                payload: Object.assign({}, payload, {error})
            })
        );
    }
}

export default new AppDispatcher();