import React from 'react';
import Home from './home/Home';
import DefaultPopup from './popup/DefaultPopup/DefaultPopup';

class ComponentFactory {
    /**
     * ComponentFactory 생성자로 사용중인 Component를 정의
     */
    constructor() {
        this.components = {
            Home, DefaultPopup,
        };
    }

    getComponent(name, data) {
        return React.createElement(this.components[name], data);
    }
}

export default new ComponentFactory();