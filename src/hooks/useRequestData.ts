import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Qs from 'qs';
import { useAppDispatch } from './useRedux';

export const useRequestData = (request: any, currentPage: number): void => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = Qs.parse(history.location.search.substr(1));
    const actualPage = parsed.page ? Number(parsed.page) : currentPage;

    dispatch(request(actualPage));
  }, []);
};
