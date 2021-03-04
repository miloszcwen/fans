import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.showImage = this.showImage.bind(this);
  }
  handleDelete() {
    this.props.onDelete(this.props.id);
  }
  showImage() {
    this.setState({ loaded: true });
  }
  render() {
    return (
      <div className="relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red">
        <div className="grow">
          <div
            className="placeholder bg-navy flex items-center justify-center ma3"
            style={this.state.loaded ? { display: "none" } : {}}
          >
            Loading an avatar...
          </div>
          <img
            src={`https://robohash.org/${this.props.name}abc?set=set5`}
            alt="avatar"
            className="ma3"
            loading="lazy"
            with={300}
            height={300}
            onLoad={this.showImage}
            style={this.state.loaded ? {} : { display: "none" }}
          />
          <div>
            <h2 className="pa0 ma0 ">{this.props.name}</h2>
            <p className="pa0 mb4 mt0 ">{this.props.email}</p>
          </div>
        </div>
        <button
          className="grow absolute top-1 right-1 hover-light-red b f6 bn br3 pa2 dib bg-gold navy"
          href="#0"
          onClick={this.handleDelete}
        >
          delete
        </button>
      </div>
    );
  }
}

export default Card;
