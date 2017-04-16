import React, { PropTypes } from 'react';
import {Column} from 'react-foundation';

import { connect } from 'react-redux';

const RoomDetails = React.createClass({
  render() {
    let myUsername = this.props.joinedRooms[this.props.id];
    return(
      <Column large={3}>
        <h5 style={{textAlign:'center'}}>Room Details</h5>
        <ul className='menu vertical details'>
          <li> id: {this.props.id}</li>
          <li> Me: {myUsername || ''}</li>
          <li> Other Users: </li>
          {this.props.users.map((user)=>{return(<li>{user.username}</li>)})}

        </ul>

      </Column>
    )
  }
});

RoomDetails.propTypes = {
  id: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string
  }))
}

const mapStateToProps = (state) => {
  return {
    id: state.session.currentRoom.id,
    users: state.CurrentRoom.users,
    joinedRooms: state.session.joinedRooms
  }
};

export default connect(mapStateToProps)(RoomDetails);
