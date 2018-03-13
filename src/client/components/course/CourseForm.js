import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

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
