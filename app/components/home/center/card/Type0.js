import React, {Component} from 'react';
import {GContainer, GRectangle, GImage, GText, GCircle, GAnimText} from '../../../../framework/Components';
export default class Type0 extends Component {
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
            <GContainer position="relative" width="886px" height="193px">
                <GRectangle position="absolute" x="0px" y="0px" width="886px" height="186px" color={data.color} borderRadius="4px" boxShadow="3px 3px 5px rgba(0,0,0,3)">
                    <GImage position="relative" y="-78px" src={data.imgUrl} float="right"/>
                </GRectangle>
                <GContainer position="absolute" align = "center" marginLeft="65px" marginTop="45px">
                    {rank}
                </GContainer>
                <GAnimText type="slide" position="absolute" fontFamily="RixHeadM" fontSize="45px" color="#ffffff" opacity="0.95" float="left" marginLeft="65px" marginTop="85px" text={data.title}></GAnimText>
            </GContainer>
        );
    }
}
