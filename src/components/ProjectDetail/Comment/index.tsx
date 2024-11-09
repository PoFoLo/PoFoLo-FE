import * as S from '@/components/ProjectDetail/Comment/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import Button from '@/components/Common/Button';
import { useEffect, useRef, useState } from 'react';

export const Comment = () => {
  const [comment, setComment] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // textarea 높이 조정 함수
  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '5.6rem'; // default
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [comment]);

  return (
    <S.CommentLayout>
      <S.CommentContainer>
        <S.CommentTitle>
          <h2>프로젝트 댓글 </h2>
          <span>5</span>
        </S.CommentTitle>

        <S.AddComment>
          <img src={profileIcon} alt="profile icon" />
          <S.CommentBox>
            <S.CommentTextArea
              ref={textAreaRef}
              placeholder="댓글"
              value={comment}
              onChange={handleCommentChange}
            />
            <S.ButtonWrapper>
              <Button size="small" type={comment.trim() ? 'main' : 'inactive'}>
                게시
              </Button>
            </S.ButtonWrapper>
          </S.CommentBox>
        </S.AddComment>
      </S.CommentContainer>
    </S.CommentLayout>
  );
};
