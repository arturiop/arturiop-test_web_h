import { Pagination } from 'antd';
import React, { memo } from 'react';
import styles from './Pagination.module.css';

type PaginationType = {
  disabled: boolean
  current: number
  total: number
  onChange: (page: number) => void
};

const PaginationCustom = memo(({
  disabled,
  current,
  total,
  onChange,
}: PaginationType) => (
  <div className={styles.wrap}>
    <Pagination
      defaultPageSize={1}
      disabled={disabled}
      showSizeChanger={false}
      current={current}
      total={total}
      onChange={onChange}
    />
  </div>
));

export default PaginationCustom;

PaginationCustom.displayName = 'PaginationCustom';
