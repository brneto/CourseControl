import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as authorThunks from '../../redux/thunks/authorThunks';

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(authorThunks, dispatch) }
);

@connect(null, mapDispatchToProps)
class AuthorListRow extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  state = {
    deleting: false
  };

  deleteAuthor = () => {
    const { actions, author } = this.props;
    actions.deleteAuthor(author);
    this.setState({ deleting: true });
  };

  render() {
    const { deleting } = this.state;
    const { author } = this.props;
    return (
      <tr>
        <td>{author.value}</td>
        <td>
          <Link to={'/author/' + author.value}>{author.text}</Link>
        </td>
        <td>
          <button
            disabled={deleting}
            className="btn btn-danger"
            onClick={this.deleteAuthor}
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </td>
      </tr>
    );
  }
}

export default AuthorListRow;
