import React, {Component} from 'react';
import {GText} from '../../../framework/Components';
export default class Time extends Component {
    constructor() {
        super(...arguments);
        this.state = {timerText: G.Util.getFormatDate(new Date(), 'HH:mm')};
    }

    componentDidMount() {
        this.timerObj = G.Util.startTimer(() => {
            this.setState((prevState, props) => ({
                timerText: G.Util.getFormatDate(new Date(), 'HH:mm')
            }));
        });
    }

    componentWillUnmount() {
        G.Util.stopTimer(this.timerObj);
    }

    render() {
        return (
            <GText position="absolute" x="86px" y="0px" fontFamily="RixHeadL" fontSize="29px" color="#9ca7c7" opacity="0" text={this.state.timerText}></GText>
        );
    }
}