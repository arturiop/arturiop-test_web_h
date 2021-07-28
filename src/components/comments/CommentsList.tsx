import { useMemo } from 'react';
import { CommentType } from '../../features/comments/types';
import styles from './CommentsList.module.css';
import { Comment } from './Comment';

type PropsType = {
  state: Array<CommentType>
}

export const CommentsList = ({ state }: PropsType) => {
  const mapCommentsItems = (comment: CommentType) => (
    <Comment key={comment.id} comment={comment} />
  );

  const mappedCommentsData = useMemo(() => state.map(mapCommentsItems), [state]);

  return (
    <div className={styles.wrap}>
      <div className={styles.commentsList}>
        {mappedCommentsData}
      </div>
    </div>
  );
};
