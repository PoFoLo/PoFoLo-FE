export interface ReplyItemDto {
  id: number;
  nickname: string;
  content: string;
  createdAt: Date;
}

export interface CommentItemDto {
  id: number;
  nickname: string;
  content: string;
  createdAt: Date;
  replies: ReplyItemDto[]; // 답글 목록
}
