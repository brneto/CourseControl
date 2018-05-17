import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorThunks from '../../redux/thunks/authorThunks';
import { authorsFormattedSelector } from '../../redux/selectors/authorSelectors';
import AuthorTable from './AuthorTable';

const mapStateToProps = state => ({
  authors: authorsFormattedSelector(state).toJS()
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authorThunks, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class AuthorsPage extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { authors, actions } = this.props;

    return (
      <>
        <h1>Authors</h1>
        <button
          className="btn btn-primary"
          style={{ margin: '0.5em' }}
          onClick={() => actions.goToAddAuthor()}
        >
          Add Author
        </button>
        <AuthorTable
          data={authors}
          onDelete={author => actions.deleteAuthor(author)}
        />
      </>
    );
  }
}

export default AuthorsPage;
