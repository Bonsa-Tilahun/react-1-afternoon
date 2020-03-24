import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray: [{
                name: "bonsa",
                title: "Developer",
                age: 25
            },
        {
            name: "bona2",
            title: "seniorDev",
            age: 27
        },{
            name: "bonsa3",
            title: "CTO",
            agae: 40
        }],
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
        let filteredArr = this.state.unFilteredArray
        .filter(element => element.hasOwnProperty(this.state.userInput.toLowerCase()))
        this.setState({
            filteredArray: filteredArr
        })
    }
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input onChange={e => this.handleChange(e)} className="inputLine" type="text"/>
                <button onClick={()=> this.handleClick()} className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject