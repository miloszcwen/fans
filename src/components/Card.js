import React from 'react';

class Card extends React.Component {
    constructor (props){
        super (props);
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.onDelete(this.props.id)
    }
    render(){
        return(
            <div className='.absolute tc gold bg-navy dib br3 pa3 ma3 grow bw2 shadow-5 hover-light-red'>
            <img src={`https://robohash.org/test${this.props.id}?set=set5`} alt='loading avatar' />
            <button className=".relative .top-1 .right-1 f6 grow bn br3 pa2 dib bg-gold navy" href="#0"
            onClick={this.handleDelete} >delete</button>
            <div>
                <h2 className="pa0 ma1">{this.props.name}</h2>
                <p className="pa0 ma1">{this.props.email}</p>
            </div>
        </div>
        )
    }
}
// const Card = ({id, name, email}) => {
//     return (
//         <div className='.absolute tc gold bg-navy dib br3 pa3 ma3 grow bw2 shadow-5 hover-light-red'>
//             <img src={`https://robohash.org/test${id}?set=set5`} alt='loading avatar image' />
//             <button class=".relative .top-1 .right-1 f6 grow bn br3 pa2 dib bg-gold navy" href="#0"
//             >delete</button>
//             <div>
//                 <h2 className="pa0 ma1">{name}</h2>
//                 <p className="pa0 ma1">{email}</p>
//             </div>
//         </div>
//     );
// }

export default Card;