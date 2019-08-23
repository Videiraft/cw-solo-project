import { Link } from './link';

interface ApiResponse {
  status: string
}

export interface LinksResponse extends ApiResponse {
  data: {
    links: Link[]
  }
}

export interface TagsResponse extends ApiResponse {
  data: {
    tags: string[]
  }
}

export interface LoginResponse extends ApiResponse {
  data: {
    id_token: string
  }
}