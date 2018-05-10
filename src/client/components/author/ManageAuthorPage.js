import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isValid } from 'redux-form/immutable';
import * as authorThunks from '../../redux/thunks/authorThunks';
import { authorByIdSelector } from '../../redux/selectors/authorSelectors';
import AuthorForm from './AuthorForm';

const mapStateToProps = state => ({
  author: authorByIdSelector(state),
  valid: isValid('author')(state),
  saving: state.get('ajaxCallsInProgress') > 0
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authorThunks, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
class ManageAuthorPage extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    valid: PropTypes.bool.isRequired,
    saving: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleSubmit = values => {
    const { actions, valid } = this.props;

    if(valid) {
      actions.saveAuthor(values.toJS());
    }
  };

  render() {
    const { author, saving } = this.props;

    return (
      <AuthorForm
        onSubmit={this.handleSubmit}
        initialValues={author}
        saving={saving}
      />
    );
  }
}

export default ManageAuthorPage;
