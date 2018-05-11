import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { saveCourse } from '../../redux/thunks/courseThunks';
import {
  courseByIdSelector,
  authorsFormattedSelector
} from '../../redux/selectors';
import { required, minLength } from '../../utils/validations';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const validate = values => {
  const errors = {};
  const minLength5 = minLength(5);
  const title = values.get('title');

  errors.title = required(title);
  if(!errors.title)
    errors.title = minLength5(title);

  return errors;
};
// onSubmit : function(values, dispatch, props)
const onSubmit = (values, dispatch, { form }) =>
  dispatch(saveCourse(values, form));

@connect(state => ({
  initialValues: courseByIdSelector(state),
  authors: authorsFormattedSelector(state),
}))
@reduxForm({ form: 'course', enableReinitialize: true, onSubmit, validate })
export class CourseReduxForm extends Component {
  static propTypes = { ...propTypes };

  render() {
    const { authors, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} noValidate>
        <h1>Manage Course</h1>
        <Field name="id" component="input" type="hidden" />
        <Field name="title" component={TextInput} label="Title" />
        {
          // TODO:
          // Modify SelectInput component to be inject
          // into this Field redux form component
        }
        <Field name="author" component="select">
          <option value="">Select Author</option>
          {authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.text}
            </option>
          ))}
        </Field>
        <Field name="category" component={TextInput} label="Category" />
        <Field name="duration" component={TextInput} label="Duration" />

        <button
          className="btn btn-primary float-right ml-3"
          disabled={submitting}
        >
          {submitting ? 'Saving...' : 'Save'}
        </button>
        <button
          className="btn btn-secondary float-right"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear
        </button>
      </form>
    );
  }
}

const CourseForm = props => {
  const { course, allAuthors, onSubmit, onChange, saving, error } = props;
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={error.title} />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={error.authorId} />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={error.category} />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={error.length} />

      <button
        disabled={saving}
        className="btn btn-primary"
        onClick={onSubmit}>{saving ? 'Saving...' : 'Save'}</button>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  error: PropTypes.object,
};

export default CourseForm;
