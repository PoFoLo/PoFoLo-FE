import React, { useEffect, useRef, useState } from 'react';
import { CommentItemDto } from '@/components/ProjectDetail/Comment/dto';
import { CommentInput } from '@/components/ProjectDetail/Comment/CommentInput';
import { CommentList } from '@/components/ProjectDetail/Comment/CommentList';
import * as S from '@/components/ProjectDetail/Comment/styles';
import commentIcon from '@/assets/webps/ProjectDetail/commentIcon.webp';

interface CommentProps {
  updateCommentCount: (count: number) => void; // 댓글 개수 업데이트 콜백
}

export const Comment = ({ updateCommentCount }: CommentProps) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentItemDto[]>([]);
  const [replyClicked, setReplyClicked] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState<{ [key: number]: string }>({});
  const newCommentRef = useRef<HTMLLIElement | null>(null); // 새 댓글 참조

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>, commentId: number) => {
    setReplyContent((prev) => ({ ...prev, [commentId]: e.target.value }));
  };

  const scrollToNewComment = () => {
    newCommentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        nickname: '심수연',
        content: comment,
        createdAt: new Date(),
        replies: [],
      };
      setComments((prev) => [newComment, ...prev]);
      setComment('');

      setTimeout(scrollToNewComment, 0); // 새로운 댓글로 스크롤
    }
  };

  const handlePostReply = (commentId: number) => {
    if (replyContent[commentId]?.trim()) {
      const newReply = {
        id: Date.now(),
        nickname: '심수연',
        content: replyContent[commentId],
        createdAt: new Date(),
      };
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, newReply] }
            : comment
        )
      );
      setReplyContent((prev) => ({ ...prev, [commentId]: '' }));
      setReplyClicked(null);
    }
  };

  const handleReplyClick = (id: number) => setReplyClicked((prev) => (prev === id ? null : id));

  useEffect(() => {
    updateCommentCount(comments.length); // 댓글 수 변경 시 업데이트
  }, [comments, updateCommentCount]);

  return (
    <S.CommentLayout>
      <S.CommentContainer>
        <S.CommentTitle>
          <h2>프로젝트 댓글 </h2>
          <span>{comments.length}</span>
        </S.CommentTitle>
        <CommentInput
          scrollToNewComment={scrollToNewComment}
          comment={comment}
          onChange={handleCommentChange}
          onPost={handlePostComment}
        />
        {comments.length === 0 ? (
          <S.EmptyState>
            <img src={commentIcon} alt="comment icon" />
            <span>첫 번째 댓글을 남겨보세요</span>
          </S.EmptyState>
        ) : (
          <CommentList
            comments={comments}
            replyClicked={replyClicked}
            onReplyClick={handleReplyClick}
            onReplyPost={handlePostReply}
            onReplyChange={handleReplyChange}
            replyContent={replyContent}
            newCommentRef={newCommentRef} // 최신 댓글에 대한 ref 전달
          />
        )}
      </S.CommentContainer>
    </S.CommentLayout>
  );
};
