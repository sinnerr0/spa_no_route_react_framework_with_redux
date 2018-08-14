import PropTypes from 'prop-types';
import React from 'react';
import GRectangle from './GRectangle';

export default class GImage extends GRectangle {

    static get defaultProps(){
        return {
            src: '',
        };
    }

    constructor() {
        super(...arguments);
    }

    makeStyle() {
        const style = super.makeStyle();
        return Object.assign(style, {});
    }

    render() {
        this.style = this.makeStyle();
        return (
            <img style={this.style} src={this.props.src}>
                {this.props.children}
            </img>
        );
    }
}

GImage.propTypes = {
    src: PropTypes.string,
};