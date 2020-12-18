import React from 'react';

class Marker extends Component {
  render() {
    return(
      <div className="marker">
        {this.props.title}
      </div>
    );
  }
}

export default Marker;
