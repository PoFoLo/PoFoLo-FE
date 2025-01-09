export interface ReplyItemDto {
  id: number;
  writer: number;
  text: string;
  commented_at: string;
}

export interface CommentItemDto {
  id: number;
  writer: number;
  text: string;
  commented_at: string;
  replies: ReplyItemDto[]; // 답글 목록
}
