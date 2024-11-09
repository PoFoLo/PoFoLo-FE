import { useEffect, useRef, useState } from 'react';
import { format, isToday, isYesterday, isThisWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import * as S from '@/components/ProjectDetail/Comment/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import Button from '@/components/Common/Button';

interface CommentItem {
  id: number;
  nickname: string;
  content: string;
  createdAt: Date;
}

export const Comment = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentItem[]>([]); // 전체 댓글 목록 상태
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // 댓글 입력 함수
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // 댓글 게시 함수
  const handlePostComment = () => {
    if (comment.trim() === '') return; // 빈 댓글은 게시하지 않음

    // 새로운 댓글 추가
    const newComment = {
      id: Date.now(), // 고유한 ID 생성
      nickname: '성춘향',
      content: comment,
      createdAt: new Date(),
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setComment(''); // 댓글 입력란 초기화
  };

  // 댓글 생성 날짜 포맷팅 함수
  const formatCommentDate = (date: Date) => {
    if (isToday(date)) {
      return '오늘';
    } else if (isYesterday(date)) {
      return '어제';
    } else if (isThisWeek(date)) {
      const dayOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
      return dayOfWeek[getDay(date)];
    } else {
      return format(date, 'yyyy/MM/dd', { locale: ko });
    }
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
          <span>{comments.length}</span>
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
              <Button
                onClick={handlePostComment}
                size="small"
                type={comment.trim() ? 'main' : 'inactive'}
              >
                게시
              </Button>
            </S.ButtonWrapper>
          </S.CommentBox>
        </S.AddComment>

        {/* 댓글 목록 표시 */}
        <S.CommentList>
          {comments.map((item) => (
            <S.CommentItem key={item.id}>
              <img src={profileIcon} alt="profile icon" />
              <S.CommentContentWrapper>
                <S.CommentInfo>
                  <p>{item.nickname}</p>
                  <span>{formatCommentDate(item.createdAt)}</span>
                </S.CommentInfo>
                <S.CommentContent>{item.content}</S.CommentContent>
              </S.CommentContentWrapper>
            </S.CommentItem>
          ))}
        </S.CommentList>
      </S.CommentContainer>
    </S.CommentLayout>
  );
};
