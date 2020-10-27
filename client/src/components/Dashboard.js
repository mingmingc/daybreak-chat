import React, {Component} from 'react';

class Dashboard extends Component {

    render() {
        return(
            <div className="Dashboard">
                <h1> Welcome, {this.props.userId} </h1> 
            </div>
        )
    }
}

export default Dashboard;