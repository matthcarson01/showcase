import React, { Component } from 'react';


class Palindrome extends Component {
    constructor(){
        super();
        this.state={
            userInput:'',
            palindrome:''
        }
    }
    inputUpdater(val){
        this.setState({userInput:val});
    }
    palindromer(){
        var term = this.state.userInput.toLowerCase();
        var reverse = term.split('').reverse().join('');
        var result;
        if(term === reverse){
            result = true;
        }else{
            result = false;
        }
        this.setState({ palindrome: result});
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => { this.inputUpdater(e.target.value) }}></input>
                <button className="confirmationButton" onClick={()=>{this.palindromer()}}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        );
    }
}

export default Palindrome;