
import { push } from 'connected-react-router/immutable';

export const goToCourses = () => dispatch => dispatch(push('/courses'));

export const goToAuthors = () => dispatch => dispatch(push('/authors'));

export const goToAddCourse = () => dispatch => dispatch(push('/course'));

export const goToAddAuthor = () => dispatch => dispatch(push('/author'));
