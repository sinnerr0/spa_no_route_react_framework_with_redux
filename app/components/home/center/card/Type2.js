import React, {Component} from 'react';
import {GContainer, GRectangle, GCircle, GText, GImage} from '../../../../framework/Components';
export default class Type2 extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps) {
        return false;
    }

    render() {
        let data = this.props.data;
        let rank = [];
        rank.push(<GText key={rank.length} fontFamily="RixHeadM" fontSize="29px" color="#f4e352" text={data.num}/>);
        rank.push(<GCircle key={rank.length} width="6px" height="6px" color="#f4e352" marginLeft="5px"/>);
        if (data.num === 1) {
            rank.push(<GText key={rank.length} fontFamily="RixHeadM" fontSize="29px" color="#f4e352" marginLeft="5px" text="NOW"/>);
        }
        return (
            <GContainer position={this.props.position} y={this.props.y} width="332px" height="186px" transform={this.props.scale} opacity={this.props.opacity}>
                <GRectangle position="absolute" width="332px" height="186px" color={data.color} borderRadius="4px" boxShadow="3px 3px 5px rgba(0,0,0,3)">
                    <GImage position="relative" src={data.imgUrl} float="right"/>
                </GRectangle>
                <GContainer position="absolute" x="27px" y="30px" align="center">
                    {rank}
                </GContainer>
                <GContainer position="absolute" x="27px" y="80px" width="195px" align="left">
                    <GText width="120px" fontFamily="RixHeadM" fontSize="25px" color="#ffffff" opacity="0.8" text={data.title} textAlign="left" lineHeight="120%"></GText>
                </GContainer>
            </GContainer>
        );
    }
}