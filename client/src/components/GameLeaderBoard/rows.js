import React from 'react';

class Table extends React.Component {
    
    render() {
        return (
            <tr>
                <th scope="row">{this.props.position}</th>
                <td>{this.props.score}</td>
                <td>{this.props.playerID}</td>
            </tr>
        )
    }
}

export default Table;