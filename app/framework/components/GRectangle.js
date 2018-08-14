import PropTypes from 'prop-types';
import React from 'react';
import GContainer from './GContainer';

export default class GRectangle extends GContainer {

    static get defaultProps(){
        return {
            gradient: '',
            color: '',
            radius: '',
        };
    }

    constructor() {
        super(...arguments);
    }

    makeStyle() {
        const style = super.makeStyle();
        return Object.assign(style, {
            background: this.props.gradient,
            backgroundColor: this.props.color,
        });
    }

    render() {
        this.style = this.makeStyle();
        return (
            <div style={this.style}>
                {this.props.children}
            </div>
        );
    }
}

GRectangle.propTypes = {
    gradient: PropTypes.string,
    color: PropTypes.string,
    radius: PropTypes.string,
};