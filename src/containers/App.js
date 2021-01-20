import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js"
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            fans: [],
            searchField: ""
        }
        this.deleteFan=this.deleteFan.bind(this)
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => this.setState({fans: users}))
    }

    onSearchChange = (event) => {
        this.setState( { searchField: event.target.value })
    }

    deleteFan = (id)=>{
        console.log(id);
        let newFans = this.state.fans.filter(
            fan=>fan.id !== id
        )
        console.log(newFans)
        this.setState({
            fans: newFans
        })
    }

    render (){
        const {fans, searchField}=this.state;
        const filteredFans = fans.filter(fan=>{
        return fan.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(!fans.length){
            return <h1>Loading</h1>
        } else {
            return (
                <>
                <h1 className='bg-navy ma0 pa20 bw2'>My Fanclub</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList fans={filteredFans} onDelete={this.deleteFan}/>
                    </ErrorBoundry>
                </Scroll>
                </>
            );
        }

    }
}

export default App;
