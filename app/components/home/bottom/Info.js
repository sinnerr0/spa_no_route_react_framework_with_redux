import React, {Component} from 'react';
import {GContainer, GText, GCircle} from '../../../framework/Components';

export default class Info extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate(nextProps) {
        if (!G.Util.jsonEqual(this.props.info, nextProps.info, true)) {
            return true;
        }
        return false;
    }

    render() {
        const children = this.props.info.map((value, index) => {
            return (
                <GContainer key={index} align="center">
                    <GText fontFamily = "RixHeadM" fontSize="25px" color="#ffffff" opacity="0.75" marginLeft="85px" text={value}/>
                    <GCircle width="6px" height="6px" color="yellow" marginLeft="10px"></GCircle>
                </GContainer>
            )
        });
        return (
            <GContainer position="absolute" x="0px" y="1172px" width="1800px" height="30px" align="right" opacity="0">
                {children}
            </GContainer>
        );
    }
}