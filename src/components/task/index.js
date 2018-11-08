import React from 'react';
import { connect } from 'react-redux';
import { connect } from 'http2';
import { bindActionCreators } from 'redux';
import { deleteTask} from '../../actions/'

class task extends React.component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete Task</button>
                </td>
            
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask }, dispatch);
}

export default connect(() => { return {}; }, mapDispatchToProps)(task);