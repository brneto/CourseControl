import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authorThunks from '../../redux/thunks/authorThunks';
import { authorsFormattedSelector } from '../../redux/selectors/authorSelectors';
import AuthorList from './AuthorList';

const AuthorsPage = ({ authors, goToAddAuthor, deleteAuthor }) => (
  <>
    <h1>Authors</h1>
    <button
      className="btn btn-primary"
      style={{ margin: '0.5em' }}
      onClick={goToAddAuthor}
    >
      Add Author
    </button>
    <AuthorList data={authors} onDelete={deleteAuthor} />
  </>
);

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  goToAddAuthor: PropTypes.func.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authors: authorsFormattedSelector(state).toJS()
});

const mapDispatchToProps = { ...authorThunks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage);
