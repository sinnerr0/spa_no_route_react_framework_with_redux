import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class GContainer extends Component {

    static get defaultProps() {
        return {
            x: '0px',
            y: '0px',
            option: {},
            align: '',
        };
    }

    constructor() {
        super(...arguments);
    }

    makeStyle() {
        let {x, y, option, align} = this.props;
        if (align) {
            !option && (option = {});
            option.display = 'flex';
            if (align === 'center') {
                option.alignItems = 'center';
                option.justifyContent = 'center';
            } else if (align === 'left') {
                option.justifyContent = 'flex-start';
            } else if (align === 'right') {
                option.justifyContent = 'flex-end';
            }
        }
        return Object.assign({left: x, top: y}, this.props, option);
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

GContainer.propTypes = {
    x: PropTypes.string,
    y: PropTypes.string,
    option: PropTypes.any,
    align: PropTypes.any,
};