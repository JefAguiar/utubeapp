import React, { Component } from 'react';
import * as moment from 'moment';
import {
    MDBCard
} from 'mdbreact';

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.getTime()
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick = () => {
        this.setState({
            currentTime: this.getTime()
        })
    }

    getTime = () => moment().format('L LTS');

    render() {
        return (
            <MDBCard>{this.state.currentTime}</MDBCard>
        );
    }
}

export default Timer;