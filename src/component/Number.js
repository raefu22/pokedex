import React from 'react';
import Card from './Card';
import '../style/Number.css';

class Number extends React.Component {
    constructor(props) {
        super(props)
        this.state = {pokemon: [], imageSrc: "", base_xp: 0, number: this.props.randomnum};
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
        const url = "https://pokeapi.co/api/v2/pokemon/"+ this.state.number
        fetch(url)
        .then(function(response) {
            console.log(response.status);
            console.log(url);
            return response.json();
        })
        .then((response) => {
            //const responsePokemon = response.results.map((item) => <Card name={item.name} url={url} key={item.name} />);
            console.log(response.name);
            const responsePokemon = <Card name={response.name} url={url} key={response.name} />
             // This should also seem familiar
             this.setState (
                {
                    
                    pokemon: responsePokemon, // Add the pokemon we got from the API to the pokemon state
                   
                }
            );
        })
        .catch(this.handleError)
    }
    render () {
        // Type your code here...
 
        const someJSX =
        <div>
            <div className="cardmaprandom"> {this.state.pokemon}</div>
            
        </div>;
        // Return some JSX here...
        return someJSX;
    }


}

export default Number;
