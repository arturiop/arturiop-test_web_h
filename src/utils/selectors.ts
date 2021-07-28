import { RootState } from '../config/store';
import { CommentType } from '../features/comments/types';

export const getComments = (state: RootState): CommentType[] | [] => state.comments.commentsData;
export const getCurrentPage = (state: RootState): number => state.comments.currentPage;
export const getTotalPages = (state: RootState): number => state.comments.totalPages;
export const isLoading = (state: RootState): boolean => state.comments.loading;
