import PropTypes from 'prop-types';
import React, {Component} from 'react';
import GText from './GText';
import GAnim from './GAnim';

export default class GAnimText extends GText {

    static get defaultProps() {
        return {
            type: 'slide',
            delay: '0',
        };
    }

    shouldComponentUpdate(nextProps) {
        return this.props.text !== nextProps.text;
    }

    /**
     * 레이어
     */
    constructor() {
        super(...arguments);
        /**
         * 애니메이션 타입
         * @type {string[]}
         */
        this.typeProps = ['slide', 'wave'];
    }

    /**
     * 플라잉 애니메이션
     * @param value
     * @param index
     * @returns {XML}
     */
    slide(value, index, delay = 0) {
        return (
            <GAnim key={index} animation={{x:0, opacity:1}} duration="1000" runOnMount="true" delay={(index + 1) * 100 + parseInt(delay)}>
                <GAnim animation={{x:200, opacity:0}} duration="0" runOnMount="true">
                    <span style={{display:'inline-block'}}>{value}</span>
                </GAnim>
            </GAnim>
        );
    }

    /**
     * 타이핑 애니메이션
     * @param value
     * @param index
     * @returns {XML}
     */
    wave(value, index, delay = 0) {
        return (
            <GAnim key={index} animation={{y:0}} duration="100" runOnMount="true">
                <GAnim key={index} animation={{y:3}} duration="100" runOnMount="true">
                    <GAnim animation={{y:-5}} duration="100" runOnMount="true">
                        <GAnim animation={{y:5}} duration="100" runOnMount="true" delay={(index + 1) * 50 + parseInt(delay)}>
                            <span style={{display:'inline-block'}}>{value}</span>
                        </GAnim>
                    </GAnim>
                </GAnim>
            </GAnim>
        );
    }

    render() {
        const style = this.makeStyle();
        let textList = this.props.text;
        let delay = this.props.delay;
        let component;
        if (textList && textList.length) {
            component = textList.split('').map((value, index) => {
                let component
                if (G.Util.encodeHtml(value) === ' ') {
                    component = value;
                } else if (this.typeProps.includes(this.props.type)) {
                    component = this[this.props.type](value, index, delay);
                } else {
                    component = value;
                }
                return component;
            });
        } else {
            component = textList;
        }
        return (
            <span style={style}>
                {component}
            </span>
        );
    }
}

GAnimText.propTypes = {
    type: PropTypes.string,
    delay: PropTypes.string,
};