import React from 'react';
// import Logo from “D:\React Photo Project\logo.png”;

class SearchBar extends React.Component {
  state = {
    term: '',
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.props.onValueChange(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        {/* <img src="D:/React Photo Project/logo.png" >  </img> */}
        <div style={{display:'flex'}}>
        <img
              alt="Something"
              src="data:image/png;base64,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"
              height="100px"
              width="200px"
            />
          <div style={{ flex: 0.4 }} />
        <h1>Yellow Class React Project Assignment </h1>
        </div>
        <form onSubmit={this.formSubmit}>
          <div className="ui field" style={{ display: 'flex', paddingLeft:'400px'}}>
            <label><h3>Enter Search value</h3></label>
            <div style={{ flex: '0.025' }} />
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{height:'30px'}}
            />
            <input type="submit" value="Submit" />

          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
