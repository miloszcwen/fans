import React from 'react';
import './AddCard.css'

class AddCard extends React.Component {

    render(){
        return(
        <div className='tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red' >
            <div className="grow">
                <div className='ma3 hai relative'>
                <div className="circle bg-gold pa0 ma0">
                    <div className="add navy pa0 ma0"></div>
                </div>
                    </div>
                <div>
                <h2 className='pa0 ma0'>Click to add</h2>
                    <p className='pa0 mb4 mt0'>new fan card</p>
                </div>

            </div>
        </div>
        )
    }
}

export default AddCard;

{/* <div className='relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red'>
            <div className="grow">
               <img src={`https://robohash.org/st8a${this.props.id}abc?set=set5`}
                alt='avatar' className="ma3" loading="lazy" />
                <div>
                    <h2 className="pa0 ma0 ">{this.props.name}</h2>
                    <p className="pa0 mb4 mt0 ">{this.props.email}</p>
                </div> */}