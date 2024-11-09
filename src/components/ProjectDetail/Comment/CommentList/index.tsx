import React from 'react';
import { CommentItemDto } from '@/components/ProjectDetail/Comment/dto';
import { CommentItem } from '@/components/ProjectDetail/Comment/CommentItem';
import * as S from '@/components/ProjectDetail/Comment/styles';

interface CommentListProps {
  comments: CommentItemDto[];
  replyClicked: number | null;
  onReplyClick: (id: number) => void;
  onReplyPost: (commentId: number) => void;
  onReplyChange: (e: React.ChangeEvent<HTMLTextAreaElement>, commentId: number) => void;
  replyContent: { [key: number]: string };
  newCommentRef: React.RefObject<HTMLLIElement>;
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
  replyClicked,
  onReplyClick,
  onReplyPost,
  onReplyChange,
  replyContent,
  newCommentRef, // 최신 댓글에 대한 ref
}) => {
  return (
    <S.CommentList>
      {comments.map((comment, index) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          replyClicked={replyClicked}
          onReplyClick={onReplyClick}
          onReplyPost={onReplyPost}
          onReplyChange={onReplyChange}
          replyContent={replyContent[comment.id] || ''}
          ref={index === 0 ? newCommentRef : null} // 첫 번째 댓글에만 newCommentRef
        />
      ))}
    </S.CommentList>
  );
};
