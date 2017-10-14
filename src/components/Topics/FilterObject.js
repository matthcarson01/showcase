import React, { Component } from 'react';


class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray:[{user:'Matt',role:'admin',pet:'Cat'},{user:'Spenser',role:'reader',computer:'Mac'},{user:'Dino', role:'writer',car:'Tesla'}],
            userInput:'',
            filteredArray:[]
        };
    }
    inputUpdater(val){
        this.setState({userInput:val});
    };
    arrayFilter(){
        var newArr = [];
        var unFiltered = this.state.unFilteredArray;
        var searchTerm = this.state.userInput;
        for(let i=0;i<unFiltered.length;i++){
            for(let prop in unFiltered[i]){
                if(prop === searchTerm){newArr.push(unFiltered[i]);}}
        } ;

        this.setState({filteredArray:newArr})
    };
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => { this.inputUpdater(e.target.value)}}></input>
                <button className="confirmationButton" onClick={() => { this.arrayFilter() }}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span> 
            </div>
        );
    }
}

export default FilterObject;