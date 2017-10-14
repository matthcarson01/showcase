import React, { Component } from 'react';


class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1:0,
            number2:0,
            sum:null
        }

    }
    updateNum1(val1) {
        this.setState({ number1: val1 });
    }
    updateNum2(val1) {
        this.setState({ number2: val1 });
    }
    sumThis() {
        var num1 = parseInt(this.state.number1,10);
        var num2 = parseInt(this.state.number2,10);
        var thisSum = num1 + num2;
        this.setState({sum:thisSum});
    }
    render() {
        return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e) => { this.updateNum1(e.target.value); }}></input>
            <input className="inputLine" onChange={(el) => { this.updateNum2(el.target.value); }}></input>
            <button className="confirmationButton" onClick={()=>{this.sumThis();}}>Add</button>
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
);
    }
}

export default Sum;