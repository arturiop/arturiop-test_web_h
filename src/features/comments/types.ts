import { AxiosResponse } from 'axios';
import { LinksType } from '../../types/types';

export type CommentType = {
  id: number,
  name: string,
  text: string,
  visible: number
  product_id: number,
  created_at: string,
  updated_at: string
}

export type RequestCommentsDataType = {
  current_page: number,
  data: Array<CommentType>,
  first_page_url: string,
  from: number,
  last_page: number,
  last_page_url: string,
  links: Array<LinksType>,
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: null,
  to: number,
  total: number
}

export type CommentsResponse = Promise<AxiosResponse<RequestCommentsDataType>>
