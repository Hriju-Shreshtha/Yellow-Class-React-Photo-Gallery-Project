import React from 'react';
import SearchBar from './SearchBar';
import ImageDisplay from './ImageDisplay';
import Modal from './Modal';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      modalShow: false,
      index: 0,
    };
  }
  onValueChange = async (value) => {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos?client_id=5vYgLsx1TjQPQosLTZPKbcLNXx2F31A4Ppe0fmWGLZ0',
      {
        params: { query: value, per_page: 100 },
      }
    );
    this.setState({ images: response.data.results });
  };
  onImgClick = (id) => {
    this.setState({ modalShow: true });
    for (let i = 0; i < this.state.images.length; i++) {
      if (this.state.images[i].id === id) {
        this.setState({ index: i });
        break;
      }
    }
  };
  modalClose = () => {
    this.setState({ modalShow: false });
  };
  onLeftClick = () => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.images.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };
  onRightClick = () => {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onValueChange={this.onValueChange} />
        <ImageDisplay image={this.state.images} imgClick={this.onImgClick} />
        {this.state.modalShow && (
          <Modal
            show={this.state.modalShow}
            close={this.modalClose}
            left={this.onLeftClick}
            right={this.onRightClick}
          >
            <div style={{ color: 'black' }}>
              <img
                src={this.state.images[this.state.index].urls.regular}
                alt={this.state.images[this.state.index].description}
                style={{ width: '50vw', height: '55vh' }}
              />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
