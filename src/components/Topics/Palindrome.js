import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state={
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    handleClick(){
        let palinValue = this.state.userInput.toLowerCase() === this.state.userInput.split('').reverse().join('').toLowerCase()
        this.setState({
            palindrome: palinValue? 'true' : 'false'
        })
    }
    render(){
        console.log(this.state)
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={e => this.handleChange(e)} className="inputLine" type="text"/>
                <button onClick={()=> this.handleClick()} className="confirmationButton">Filter</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome