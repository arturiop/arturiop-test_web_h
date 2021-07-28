import { Avatar } from 'antd';
import { CommentType } from '../../features/comments/types';
import styles from './Comment.module.css';
import defaultAvatar from './config/image/avatar.png';
import { dateChanges } from '../../utils/functions';

type PropsType = {
  comment: CommentType
}

export const Comment = ({ comment }: PropsType) => {
  const {
    name,
    text,
    created_at: created,
  } = comment;
  const dateCreated = dateChanges(created);
  const author = name.substr(0, 20);

  return (
    <div className={styles.comment}>
      <Avatar size={50} src={defaultAvatar} />
      <div className={styles.comment__wrap}>
        <div className={styles.comment__create}>
          <div className={styles.comment__author}>
            {author}
          </div>
          <div>
            {dateCreated}
          </div>
        </div>
        <div className={styles.comment__text}>
          {text}
        </div>
      </div>
    </div>
  );
};
