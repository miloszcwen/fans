import React from 'react';
import LazyLoad from 'react-lazy-load';


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
            <div className='relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red'>
            <div className="grow">
               <img src={`https://robohash.org/st8a${this.props.id}abc?set=set5`}
                alt='avatar' className="ma3" loading="lazy" />
                <div>
                    <h2 className="pa0 ma0 ">{this.props.name}</h2>
                    <p className="pa0 mb4 mt0 ">{this.props.email}</p>
                </div>
            </div>
            <button className="grow absolute top-1 right-1 hover-light-red b f6 bn br3 pa2 dib bg-gold navy" href="#0"
                onClick={this.handleDelete} >delete</button>
        </div>
        )
    }
}

export default Card;


