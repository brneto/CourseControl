import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorThunks from '../../redux/thunks/authorThunks';
import { authorsFormattedSelector } from '../../redux/selectors/authorSelectors';
import AuthorsList from './AuthorsList';

const mapStateToProps = state => ({ authors: authorsFormattedSelector(state) });

const mapDispatchToProps = dispatch => (
    { actions: bindActionCreators(authorThunks, dispatch) }
);

@connect(mapStateToProps, mapDispatchToProps)
class AuthorsPage extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { authors, actions } = this.props;
    return (
      <>
        <h1>Authors</h1>
        <button
          className="btn btn-primary"
          style={{ margin: '0.5em' }}
          onClick={actions.goToAddAuthor}>Add Author</button>
        <AuthorsList authors={authors} />
      </>
    );
  }
}

export default AuthorsPage;
