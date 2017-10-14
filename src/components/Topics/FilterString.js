import React, { Component } from 'react';


class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray:["red","orange","yellow","green","blue","indigo","violet"],
            userInput:'',
            filteredArray:[]
        };
    }
    inputUpdater(val) {
        this.setState({ userInput: val });
    };
    arrayFilter() {
        var unfilterArr = this.state.unFilteredArray;
        var newArr = [];
        var searchTerm = this.state.userInput;
        for(let i=0;i<unfilterArr.length;i++){
            if(unfilterArr[i].slice(0,searchTerm.length)=== searchTerm){
                newArr.push(unfilterArr[i]);
            }
        }
     
        this.setState({filteredArray:newArr});
    };

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Color: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => { this.inputUpdater(e.target.value) }}></input>
                <button className="confirmationButton" onClick={() => { this.arrayFilter() }}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Color: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;