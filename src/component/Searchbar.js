import React from 'react';
import Card from './Card';
import '../style/Searchbar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {value: "", result:[] };
        this.getAPIData = this.getAPIData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // Use async so your page can continue loading
    async getAPIData() {
        let dropdown = document.getElementById("searchtype");
        let searchtype = dropdown.value;

        if(searchtype === "pokemon") {
            const url = "https://pokeapi.co/api/v2/pokemon/" + this.state.value; // URL of the API
            const response = await fetch(url); // Get the data from the PokeAPI

            if(response.statusText === "Not Found") {
                this.setState(
                    {
                        result: <div className="card">Not found</div>
                    }
                );
            } else {
                this.setState(
                    {
                        result: <Card key={this.state.value} name={this.state.value} url={"https://pokeapi.co/api/v2/pokemon/" + this.state.value} />
                    }
                );
            }
        } else {
            const url = "https://pokeapi.co/api/v2/type/" + this.state.value; // URL of the API
            const response = await fetch(url); // Get the data from the PokeAPI

            if(response.statusText === "Not Found") {
                this.setState(
                    {
                        result: <div className="card">Not found!</div>
                    }
                );
            } else {
                const responseJSON = await response.json();
                const pokemon = responseJSON.pokemon.map((element) => <Card key={element.pokemon.name} name={element.pokemon.name} url={element.pokemon.url} />);
                this.setState(
                    {
                        result: pokemon
                    }
                );
            }
        }        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSearch(event) {
        event.preventDefault();
        if(this.state.value !== "") {
            this.getAPIData();
        }
    }
    key_down(e) {
        let search_info = document.getElementById("searchfield");
        if(e.keyCode === 13) {
            this.handleSearch();
        }
    }
    render () {
        // Type your code here...
        const search = 
            <div className="searchcontainer">
                <div className="search">
                    <select name="searchtype" id="searchtype">
                        <option value="pokemon">Pokemon</option>
                        <option value="type">Type</option>
                    </select>
                    <br></br>
                    <div className="searchbar">
                        <input className="searchfield" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.key_down(this.state.value)} placeholder="Search..." />
                        <span className="searchbutton" onClick={this.handleSearch}><p id="button">Search</p></span>
                        
                    </div>
                    <div className="searchresult">
                        {this.state.result}
                    </div>
                </div>
            </div>
        
        // Return some JSX here...
        return search;
    }
}

export default Searchbar;