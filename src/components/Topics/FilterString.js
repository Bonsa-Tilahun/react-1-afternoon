import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray: ["Centurion", "T-54", "M47", "M48", "tanks", "old war tanks" ],
            userInput: '',
            filteredArray:[]
        }
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    handleClick(){
        let searchString = this.state.userInput
        let filteredArr = this.state.unFilteredArray
        .filter(element => element.toLowerCase() === searchString.toLowerCase() || element.toLowerCase().includes(searchString.toLowerCase()))
        this.setState({
            filteredArray: filteredArr
        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter Strings</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input onChange={e => this.handleChange(e)} className="inputLine" type="text"/>
                <button onClick={()=> this.handleClick()} className="confirmationButton">Filter</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString