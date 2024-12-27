import React, { useEffect, useRef, useState } from 'react';
import { CommentItemDto } from '@/components/ProjectDetail/Comment/dto';
import { CommentInput } from '@/components/ProjectDetail/Comment/CommentInput';
import { CommentList } from '@/components/ProjectDetail/Comment/CommentList';
import * as S from '@/components/ProjectDetail/Comment/styles';
import commentIcon from '@/assets/webps/ProjectDetail/commentIcon.webp';
import { useParams } from 'react-router-dom';
import { instance } from '@/apis/instance';

interface CommentProps {
  updateCommentCount: (count: number) => void; // 댓글 개수 업데이트 콜백
}

export const Comment = ({ updateCommentCount }: CommentProps) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentItemDto[]>([]);
  const [replyClicked, setReplyClicked] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState<{ [key: number]: string }>({});
  const newCommentRef = useRef<HTMLLIElement | null>(null); // 새 댓글 참조
  const { project_id } = useParams<{ project_id: string }>(); // URL 파라미터에서 project_id 가져오기

  const fetchComments = async () => {
    try {
      const response = await instance.get(`/pofolo/projects/${project_id}/comments/`);
      setComments(response.data); // 댓글 목록 설정
    } catch (error) {
      console.error('댓글 목록 가져오기 오류:', error);
    }
  };

  const scrollToNewComment = () => {
    newCommentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handlePostComment = async () => {
    if (comment.trim()) {
      try {
        const response = await instance.post(`/pofolo/projects/${project_id}/comments/`, {
          text: comment,
        });
        setComments((prev) => [response.data, ...prev]); // 새 댓글 추가
        setComment('');
        setTimeout(scrollToNewComment, 0); // 새로운 댓글로 스크롤
      } catch (error) {
        console.error('댓글 작성 오류:', error);
      }
    }
  };

  const handlePostReply = async (commentId: number) => {
    const content = replyContent[commentId]?.trim();
    if (content) {
      try {
        const response = await instance.post(`/pofolo/projects/${project_id}/comments/`, {
          text: content,
          parent_comment: commentId,
        });
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === commentId
              ? { ...comment, replies: [...comment.replies, response.data] }
              : comment
          )
        );
        setReplyContent((prev) => ({ ...prev, [commentId]: '' }));
        setReplyClicked(null);
      } catch (error) {
        console.error('답글 작성 오류:', error);
      }
    }
  };

  const handleReplyClick = (id: number) => setReplyClicked((prev) => (prev === id ? null : id));

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>, commentId: number) => {
    setReplyContent((prev) => ({ ...prev, [commentId]: e.target.value }));
  };

  useEffect(() => {
    fetchComments(); // 컴포넌트가 처음 렌더링될 때 댓글 목록 로드
  }, [project_id]);

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
