import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {VelocityComponent} from 'velocity-react';

export default class GAnim extends Component {

    static get defaultProps() {
        return {
            animation: {},
            runOnMount: 'false',
            duration: '0',
            delay: '0',
        };
    }

    constructor() {
        super(...arguments);
        this.interruptBehaviorProps = ['stop', 'finish', 'queue'];
        this.easing = ['swing', 'linear', 'spring'];
    }

    render() {
        let animation;
        if (this.props.animation) {
            animation = JSON.parse(JSON.stringify(this.props.animation));
            animation.translateX = this.props.animation.x;
            animation.translateY = this.props.animation.y;
            animation.translateZ = this.props.animation.z;
            delete animation.x;
            delete animation.y;
            delete animation.z;
        }
        let runOnMount = false;
        if (this.props.runOnMount) {
            runOnMount = JSON.parse(this.props.runOnMount);
        }
        let interruptBehavior = 'stop';
        if (this.props.interruptBehavior && this.interruptBehaviorProps.includes(this.props.interruptBehavior)) {
            interruptBehavior = this.props.interruptBehavior;
        }
        let easing = 'swing';
        if (this.props.easing && this.easing.includes(this.props.easing)) {
            easing = this.props.easing;
        }
        let loop = false;
        if (this.props.loop) {
            loop = JSON.parse(this.props.loop);
        }
        return (
            <VelocityComponent animation={animation} runOnMount={runOnMount} targetQuerySelector={this.props.selectId} duration={this.props.duration} delay={this.props.delay} easing={easing} loop={loop} interruptBehavior={interruptBehavior}>
                {this.props.children}
            </VelocityComponent>
        );
    }
}

GAnim.propTypes = {
    animation: PropTypes.any,
    runOnMount: PropTypes.string,
    duration: PropTypes.string,
    delay: PropTypes.any,
};