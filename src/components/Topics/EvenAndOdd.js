import React, { Component } from 'react';


class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
    }
    updateInput(val){
        this.setState({userInput:val});
    }
    numberSorter(){
        var ourStr = this.state.userInput;
        var evens=[];
        var odds=[];
        if(ourStr !==''){
            ourStr.split(',').forEach((element) => { parseInt(element, 10) % 2 === 0 ? evens.push(parseInt(element, 10)) : odds.push(parseInt(element, 10)) });
            this.setState({ evenArray: evens, oddArray: odds });
        } else{
            this.setState({ evenArray: [], oddArray: [] });
        }
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=>{this.updateInput(e.target.value);}}></input>
                <button className="confirmationButton" onClick={() => this.numberSorter()}>Split</button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        );
    }
}

export default EvenAndOdd;