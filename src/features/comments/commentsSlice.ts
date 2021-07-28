import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CommentType } from './types';
import { CommentsAPI } from './commentsApi';
import { BodySendCommentType } from '../../types/types';

export const requestComments = createAsyncThunk(
  'comments/requestComments', async (page: number) => {
    try {
      const {
        data,
        status,
      } = await CommentsAPI.getComments(page);
      return {
        data,
        status,
      };
    } catch (e) {
      return e;
    }
  },
);

export const loadMoreComments = createAsyncThunk(
  'comments/showMoreComments', async (page: number) => {
    try {
      const {
        data,
        status,
      } = await CommentsAPI.getComments(page);
      return {
        data,
        status,
      };
    } catch (e) {
      return e;
    }
  },
);

export const sendComment = createAsyncThunk(
  'comments/sendComments', async (body: BodySendCommentType) => {
    try {
      const {
        data,
        status,
      } = await CommentsAPI.addComments(body);
      return {
        data,
        status,
      };
    } catch (e) {
      return e;
    }
  },
);

type SliceType = {
  commentsData: Array<CommentType> | []
  currentPage: number,
  totalPages: number,
  loading: boolean,
  error: number,

}

const initialState: SliceType = {
  commentsData: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
  error: 0,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, { payload }: PayloadAction<Array<CommentType>>) {
      state.commentsData = payload;
    },
    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestComments.pending, (state) => {
      state.loading = true;
      state.error = 0;
    });

    builder.addCase(requestComments.fulfilled, (state, action) => {
      state.loading = false;
      state.error = 0;
      state.currentPage = action.payload.data.current_page;
      state.totalPages = action.payload.data.last_page;
      state.commentsData = action.payload.data.data;
    });

    builder.addCase(sendComment.pending, (state) => {
      state.error = 0;
    });

    builder.addCase(sendComment.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.error = 0;
      }
    });

    builder.addCase(loadMoreComments.pending, (state) => {
      state.loading = true;
      state.error = 0;
    });

    builder.addCase(loadMoreComments.fulfilled, (state, action) => {
      state.error = 0;
      state.loading = false;
      state.currentPage = action.payload.data.current_page;
      state.totalPages = action.payload.data.last_page;
      state.commentsData = [...state.commentsData, ...action.payload.data.data];
    });
  },

});

export const {
  setComments,
  setCurrentPage,
} = commentsSlice.actions;

export type commentsAction = typeof commentsSlice.actions
export default commentsSlice.reducer;
