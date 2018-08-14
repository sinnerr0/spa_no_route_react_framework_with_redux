import React from 'react';
import GRectangle from './GRectangle';

export default class GCircle extends GRectangle {
    constructor() {
        super(...arguments);
    }

    makeStyle() {
        const style = super.makeStyle();
        return Object.assign(style, {
            borderRadius: "50%",
        });
    }

    render() {
        const style = this.makeStyle();
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}