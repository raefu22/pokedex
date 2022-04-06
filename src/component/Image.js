import React from 'react';
import Card from './Card';
import '../style/Image.css';

class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {pokemon: [], offset: 0, imageSrc: "", base_xp: 0};
        this.handleError = this.handleError.bind(this);
        this.getAPI = this.getAPI.bind(this);
    }
    handleError(error) {
        console.log(error);
        this.setState(
            {
                pokemon:<li>Network Error!</li>
            }
        );
    }

    componentDidMount() {
        this.getAPI();
    }
    // Only use an API once after the page loads
    
    getAPI() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset="+ this.state.offset;
        fetch(url)
        .then(function(response) {
            console.log(response.status);
            return response.json();
        })
        .then((response) => {
            const responsePokemon = response.results.map((item) => <Card name={item.name} url={item.url} key={item.name}/>);
        
             // This should also seem familiar
             this.setState((oldstate) => (
                {
                    pokemon: oldstate.pokemon.concat(responsePokemon), // Add the pokemon we got from the API to the pokemon state
                    offset: oldstate.offset + 12
                }
            ));
        })
        .catch(this.handleError)
    }
    render () {
        // Type your code here...

        const someJSX = 
        <div>
            <div className="cardmap">{this.state.pokemon}</div>
            <div>
                <button onClick={this.getAPI}>More</button>
            </div>
        </div>;
        // Return some JSX here...
        return someJSX;
    }
}

export default Image;