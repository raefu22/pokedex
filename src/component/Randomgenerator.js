import '../style/Words.css';

function Randomnumber() {
    const randomnumber= Math.floor(Math.random() * (200 - 1) + 1);
    return (
        
        randomnumber
        
    );
}
function Randomtitle(props) {
    const title_rg=props.name;
    return (
        <div id="randomcardtitle">
            {title_rg}
        </div>
        
    );
}

function MyName() {
    const myname="Rae Fu"
    return (
        <div id="bottomname"> {myname}</div>
    )
}


export default Randomnumber;
export { Randomtitle, MyName };
