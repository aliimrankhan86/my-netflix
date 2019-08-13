import React from "react";
import SingleMovie from "./SingleMovie";

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: require('./moviedata.json'),
            value: ' '
        }
        //  setting intial values to state
    }

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
        // function firing onChange event and setting the value in state
    }


    render() {
        var list = this.state.movies.filter(i => {
            return (
                this.state.value === " " || i.Title.includes(this.state.value)
            )
        }).map(item => {
            return (
                <div className="movie" key={item.imdbID}>
                    <img src={item.Poster} alt={item.Title} />
                    <p>{item.Title}</p>
                </div>
            )
        })

        // Filtering from state data if the data value is same as initial state value then
        // map method kicks in or if the object title value includes the value of the 
        // new set this.state.value then it will filter the array and then map kick in

        return (
            <div>
                <input id="searchbar" onChange={this.changeHandler.bind(this)} type="text" />
                <div>
                    <SingleMovie movie={list} />
                </div>
            </div>
        )
    }
} 