import React, { useRef } from 'react';
import Button from '@/components/Common/Button';
import * as S from '@/components/ProjectDetail/Comment/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';

interface CommentInputProps {
  comment: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPost: () => void;
  scrollToNewComment: () => void;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  comment,
  onChange,
  onPost,
  scrollToNewComment,
}) => {
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const handlePost = () => {
    onPost(); // 댓글 게시
    scrollToNewComment(); // 새 댓글로 스크롤
  };

  const handleInput = () => {
    if (commentInputRef.current) {
      commentInputRef.current.style.height = '5.6rem'; // default
      commentInputRef.current.style.height = `${commentInputRef.current.scrollHeight}px`; // 내용에 맞게 높이 설정
    }
  };

  return (
    <S.AddComment>
      <img src={profileIcon} alt="profile icon" />
      <S.CommentBox>
        <S.CommentTextArea
          ref={commentInputRef}
          placeholder="댓글"
          value={comment}
          onChange={onChange}
          onInput={handleInput}
        />
        <S.ButtonWrapper>
          <Button onClick={handlePost} size="small" type={comment.trim() ? 'main' : 'inactive'}>
            게시
          </Button>
        </S.ButtonWrapper>
      </S.CommentBox>
    </S.AddComment>
  );
};
