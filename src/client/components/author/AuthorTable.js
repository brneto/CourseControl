import React from 'react';
import PropTypes from 'prop-types';
import AuthorTableRow from './AuthorTableRow';

const AuthorTable = ({
  data,
  onDelete,
}) => (
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
          {data.map(author =>
            <AuthorTableRow
              key={author.id}
              {...author}
              onDelete={() => onDelete(author)}
            />
          )}
        </tbody>
      </table>
    );

AuthorTable.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AuthorTable;
