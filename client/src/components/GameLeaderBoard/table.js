import React from 'react';
import Rows from './rows';
import API from '../../utils/API';
import './style.css'

class Table extends React.Component {
    state = {
        highScores: []
    }

    grabHighScores = () => {
        this.setState({highScores: []})
        API.gameHighScore(this.props.game).then(response => {
            let position = 1
            response.data.map(x => {
                x.position=position
                position ++
                this.setState({ highScores: [...this.state.highScores, x] })
            })

        })
    }

    componentDidMount() {
        this.grabHighScores()
    }

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Position</th>
                        <th scope="col">Score</th>
                        <th scope="col">ID</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.highScores ? this.state.highScores.map(x =>
                        <Rows score={x.score} playerID={x._id} position={x.position}/>
                    ) : console.log('no scores')}
                </tbody>
            </table>
        )
    }
}

export default Table;