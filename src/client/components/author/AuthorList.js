import React from 'react';
import PropTypes from 'prop-types';
import AuthorItem from './AuthorItem';

const AuthorList = ({ data, onDelete }) => (
  <table className="table table-striped mt-md-3">
    <caption>List of authors</caption>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {data.map(author => (
        <AuthorItem
          key={author.id}
          {...author}
          onDelete={() => onDelete(author)}
        />
      ))}
    </tbody>
  </table>
);

AuthorList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorList;
