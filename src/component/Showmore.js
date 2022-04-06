import React from 'react';
// import '../style/Showmore.css';

class Showmore extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render () {
        const someJSX = (
            <div onClick={this.getAPIData}>
                <button>More</button>
            </div>
        );
        // Return some JSX here...
        return someJSX;
    }
}

export default Showmore;