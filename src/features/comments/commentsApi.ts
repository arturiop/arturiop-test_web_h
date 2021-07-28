import instance from '../../config/api';
import { CommentsResponse } from './types';
import { BodySendCommentType } from '../../types/types';

export const CommentsAPI = {
  getComments(currentPage: number):CommentsResponse {
    return (
      instance.get('/comments', {
        params: {
          page: currentPage,
        },
      })
    );
  },

  addComments({ name, text }:BodySendCommentType) {
    return instance.post('/comments', { name, text });
  },
};
