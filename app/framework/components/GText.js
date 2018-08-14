import React from 'react';
import GContainer from './GContainer';

export default class GText extends GContainer {
    constructor() {
        super(...arguments);
    }

    makeStyle() {
        const style = super.makeStyle();
        return Object.assign(style);
    }

    render() {
        const style = this.makeStyle();
        return (
            <span style={style}>
                {this.props.text}
            </span>
        );
    }
}