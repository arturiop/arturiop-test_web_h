import { Button } from 'antd';
import {
  getComments,
  getCurrentPage,
  getTotalPages,
  isLoading,
} from '../utils/selectors';
import {
  requestComments,
  sendComment,
  loadMoreComments,
} from '../features/comments/commentsSlice';
import { useChangeURL } from '../hooks/useChangeURL';
import { CommentsList } from '../components/comments/CommentsList';
import { SendCommentForm } from '../components/ui/SendCommentForm';
import PaginationCustom from '../components/ui/Pagination/Pagination';
import styles from './PageComments.module.css';
import { BodySendCommentType } from '../types/types';
import { useAppDispatch, useAppState } from '../hooks/useRedux';
import { useRequestData } from '../hooks/useRequestData';

export const PageComments = () => {
  const comments = useAppState(getComments);
  const currentPage = useAppState(getCurrentPage);
  const totalPages = useAppState(getTotalPages);
  const loading = useAppState(isLoading);

  const dispatch = useAppDispatch();
  const onPageChange = (number: number) => {
    dispatch(requestComments(number));
  };

  useRequestData(requestComments, currentPage);
  useChangeURL('/comments', currentPage);

  const loadMore = () => {
    dispatch(loadMoreComments((currentPage + 1)));
  };

  const onSubmit = (data: BodySendCommentType) => {
    dispatch(sendComment(data));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.wrap__content}>
        <div className={styles.content}>
          <div className={styles.content__title}>
            Comments
          </div>
          <CommentsList state={comments} />
          <SendCommentForm onSubmit={onSubmit} />
          <div className={styles.content__button}>
            { (currentPage === totalPages)
              ? null
              : (
                <Button disabled={loading} onClick={loadMore}>
                  Show more
                </Button>
              )}
          </div>
          <div style={{ marginTop: 'auto' }}>
            <PaginationCustom
              current={currentPage}
              disabled={loading}
              onChange={onPageChange}
              total={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
