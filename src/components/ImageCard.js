import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  onImageClick = () => {
    this.props.imgClick(this.props.img.id);
  };
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={this.props.img.urls.regular}
          alt={this.props.img.description}
          onClick={this.onImageClick}
        />
      </div>
    );
  }
}

export default ImageCard;
