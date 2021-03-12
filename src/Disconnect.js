import React, {Component} from 'react';

class Disconnect extends Component {


    render () {
        return(
            <div>
                <button className="btn btn-primary" onClick={this.props.disconnect}>Disconnect</button>
                
            </div>
        )
    }
}

export default Disconnect; 