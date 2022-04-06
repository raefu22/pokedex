import React from 'react';
import '../style/Card.css';


class Card extends React.Component {
    constructor(props) {
        super(props)
        //this.getAPIData = this.getAPIData.bind(this);
        this.state = {imageSrc: [], type: "", base_xp: 0, abilities: []};
        this.handleError = this.handleError.bind(this);
    }
    handleError(error) {
      console.log(error);
      this.setState(
          {
              pokemon:<li>Network error</li>
          }
      );
  }

    componentDidMount() {
      const url = this.props.url;
      fetch(url)
      .then(function(response) {
          console.log(response.status);
          return response.json();
      })
      .then((response) => {
        const abilities = response.abilities.map(element => <li key={element.ability.name}>{element.ability.name}</li>);
      
           // This should also seem familiar
           this.setState(
              {
                base_xp: response.base_experience,
                type: response.types[0].type.name,
                abilities: abilities,
                imageSrc: response.sprites.front_default
              }
          );
      })
      .catch(this.handleError)
  }
 
    render () {
      let bg_color = {"backgroundColor": "darkgray"};
      switch (this.state.type) {
        case "bug": bg_color["backgroundColor"] = "#afc977"; break;
        case "dark": bg_color["backgroundColor"] = "#656583"; break;
        case "dragon": bg_color["backgroundColor"] = "#ad83cb"; break;
        case "electric": bg_color["backgroundColor"] = "#f5e07b"; break;
        case "fairy": bg_color["backgroundColor"] = "#eecce5"; break;
        case "fire": bg_color["backgroundColor"] = "#e2b68a"; break;
        case "fighting": bg_color["backgroundColor"] = "#af6868"; break;
        case "flying": bg_color["backgroundColor"] = "#bc9dce"; break;
        case "ghost": bg_color["backgroundColor"] = "#c4b9d6"; break;
        case "grass": bg_color["backgroundColor"] = "#8acca3"; break;
        case "ground": bg_color["backgroundColor"] = "#6d6450"; break;
        case "ice": bg_color["backgroundColor"] = "#9ededc"; break;
        case "normal": bg_color["backgroundColor"] = "#9b9a9a"; break;
        case "poison": bg_color["backgroundColor"] = "#92598b"; break;
        case "psychic": bg_color["backgroundColor"] = "#eaaad6"; break;
        case "rock": bg_color["backgroundColor"] = "#8a8462"; break;
        case "shadow": bg_color["backgroundColor"] = "#5e737f"; break;   
        case "steel": bg_color["backgroundColor"] = "#a1a1a1"; break;
        case "unknown": bg_color["backgroundColor"] = "#00000"; break;
        case "water": bg_color["backgroundColor"] = "#8aa3ed"; break;
             
        default:
            break;
      }
        return (
          
            <div className="card">
            
              {/* For checkpoint 1: You need link this prop to some data in App.js */}
              {/*this.props.name*/}
              <div style={bg_color} id="poketype">
                
                
                <div style={bg_color} id="typetext"> {this.state.type} </div> </div>
              <h2>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h2>
              <img src={this.state.imageSrc} alt="front"></img> <br></br>
              
              <p> Base XP: {this.state.base_xp} </p>
              <p>Abilities: {this.state.abilities}</p>
                    
            </div>
        );
    }
}

export default Card;