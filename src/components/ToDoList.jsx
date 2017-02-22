import React, {Component} from 'react';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tdl: []
        }
    }

    addTdl = () => {
        const tdl = this.state.tdl.concat(ToDoList);
        this.setState({tdl});
    }

    render() {
        const tdl = this.state.tdl.map((Tdl, index) => {
            return <Tdl index={index} key={index}/>
        });
        return <div>
            <input type="text" onDoubleClick={this.addTdl}/>
            <State/>
            <AddFiles/>
            <p>
                {tdl}
            </p>
        </div>
    }
}

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option>Done</option>
                <option>Will do</option>
            </select>
        );
    }
}

class AddFiles extends Component {
    render() {
        return <div>

        </div>
    }
}
