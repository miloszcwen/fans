import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from "./SearchBox.js";
import {fans} from './fans';
import './App.css'


class App extends Component {
    constructor(){
        super();
        this.state = {
            fans: fans,
            searchField: ""        }
    }

    onSearchChange = (event) => {
        this.setState( { searchField: event.target.value })
    }

    render (){
        const filteredFans = this.state.fans.filter(fan=>{
        return fan.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
    return (
        <>
        <h1 className='bg-navy ma0 pa20 bw2'>My Fanclub</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList fans={filteredFans} />
        </>
    );
    }
}

export default App;
