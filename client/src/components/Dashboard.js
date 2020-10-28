import React, { Component } from 'react';
import { USER_ID } from '../const';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.userId = USER_ID;
    }
    componentDidMount() { console.log(USER_ID); }
    render() {
        return(
            <div className="Dashboard">
                <h1> Welcome, {this.userId} </h1> 
            </div>
        )
    }
}

export default Dashboard;