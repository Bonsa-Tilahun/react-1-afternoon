import React, {Component} from 'react'

class EvenAndOdd extends Component{
    constructor(){
        super()
        this.state={
            evenArray: [],
            oddArray:[],
            userInput: ''
        }
    }
    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
        // console.log(this.state)
    }

    handleClick(){
        let tempAarr = this.state.userInput.split(',')
        let even = []
        let odd = []
        console.log(tempAarr)
        tempAarr.forEach(element => {
            if(element % 2 === 0){
                even.push(element)
            }else{
               odd.push(element)
            }
        })
        this.setState({
            evenArray: [...this.state.evenArray, ...even],
            oddArray: [...this.state.oddArray, ...odd]
        })
    }
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={e => this.handleChange(e)}className="inputLine" type="text"/>
                <button onClick={()=> this.handleClick()} className="confirmationButton">Split</button>
        <span className="resultsBox">Evens:[{this.state.evenArray.join(",")}]</span>
        <span className="resultsBox">Odds:[{this.state.oddArray.join(',')}]</span>
            </div>
        )
    }
}

export default EvenAndOdd