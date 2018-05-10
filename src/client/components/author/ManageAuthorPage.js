import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authorByIdSelector } from '../../redux/selectors/authorSelectors';
import AuthorForm from './AuthorForm';

const mapStateToProps = state => ({
  author: authorByIdSelector(state),
  saving: state.get('ajaxCallsInProgress') > 0
});

@connect(mapStateToProps)
class ManageAuthorPage extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    saving: PropTypes.bool.isRequired,
  };

  render() {
    const { author, saving } = this.props;

    return (
      <AuthorForm
        initialValues={author}
        saving={saving}
      />
    );
  }
}

export default ManageAuthorPage;
