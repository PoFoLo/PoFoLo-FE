import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, isToday, isYesterday, isThisWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import * as S from '@/components/ProjectDetail/Comment/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import Button from '@/components/Common/Button';
import replyGray from '@/assets/webps/ProjectDetail/replyGray.webp';
import replyBlue from '@/assets/webps/ProjectDetail/replyBlue.webp';
import replyLine from '@/assets/svgs/ProjectDetail/replyLine.svg';
import commentIcon from '@/assets/webps/ProjectDetail/commentIcon.webp';

interface CommentItem {
  id: number;
  nickname: string;
  content: string;
  createdAt: Date;
  replies: ReplyItem[];
}

interface ReplyItem {
  id: number;
  nickname: string;
  content: string;
  createdAt: Date;
}

export const Comment = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentItem[]>([]); // 댓글 목록
  const [replyClicked, setReplyClicked] = useState<number | null>(null); // 클릭된 댓글 상태
  const [replyContent, setReplyContent] = useState<{ [key: number]: string }>({}); // 답글 목록
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const replyInputRef = useRef<{ [key: number]: HTMLTextAreaElement | null }>({});
  const commentRefs = useRef<{ [key: number]: HTMLLIElement | null }>({});
  const replyRefs = useRef<{ [key: number]: HTMLLIElement | null }>({});
  const nav = useNavigate();

  // 댓글 입력 함수
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // 답글 입력 함수
  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>, commentId: number) => {
    setReplyContent((prev) => ({
      ...prev,
      [commentId]: e.target.value,
    }));
  };

  // 댓글 게시 함수
  const handlePostComment = () => {
    if (comment.trim() === '') return; // 빈 댓글은 게시하지 않음

    // 새로운 댓글 추가
    const newComment = {
      id: Date.now(), // 고유한 ID 생성
      nickname: '심수연',
      content: comment,
      createdAt: new Date(),
      replies: [],
    };

    setComments((prevComments) => [newComment, ...prevComments]);
    setComment(''); // 댓글 입력란 초기화

    // 댓글이 추가되면 스크롤 이동
    setTimeout(() => {
      const newCommentRef = commentRefs.current[newComment.id];
      newCommentRef?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);

    // 댓글 입력란에 포커스
    commentInputRef.current?.focus();
  };

  // 답글 게시 함수
  const handlePostReply = (commentId: number) => {
    if (replyContent[commentId]?.trim() === '') return; // 빈 답글은 게시하지 않음

    const newReply = {
      id: Date.now(),
      nickname: '심수연',
      content: replyContent[commentId],
      createdAt: new Date(),
    };

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment
      )
    );
    setReplyContent((prev) => ({ ...prev, [commentId]: '' })); // 답글 입력란 초기화
    setReplyClicked(null);

    // 답글이 추가되면 해당 답글로 스크롤 이동
    setTimeout(() => {
      const newReplyRef = replyRefs.current[newReply.id];
      newReplyRef?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
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

  // reply 클릭 처리 함수
  const handleReplyClick = (id: number) => {
    setReplyClicked((prevState) => (prevState === id ? null : id)); // 클릭 시 상태 토글 및 다른 답글 창 닫기
    setTimeout(() => {
      replyInputRef.current[id]?.focus();
    }, 0);
  };

  // textarea 높이 조정 함수
  const adjustHeight = () => {
    if (commentInputRef.current) {
      commentInputRef.current.style.height = '5.6rem';
      commentInputRef.current.style.height = `${commentInputRef.current.scrollHeight}px`;
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

        {/* 댓글 입력 */}
        <S.AddComment>
          <img src={profileIcon} alt="profile icon" />
          <S.CommentBox>
            <S.CommentTextArea
              ref={commentInputRef}
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

        {comments.length === 0 ? (
          <S.EmptyState>
            <img src={commentIcon} alt="comment icon" />
            <span>첫 번째 댓글을 남겨보세요</span>
          </S.EmptyState>
        ) : (
          <S.CommentList>
            {comments.map((item) => (
              <S.CommentItem key={item.id} ref={(el) => (commentRefs.current[item.id] = el)}>
                <S.CommentItemWrapper>
                  <img
                    onClick={() => nav('/mypage')}
                    className="profile-icon"
                    src={profileIcon}
                    alt="profile icon"
                  />
                  <S.CommentContentWrapper>
                    <div className="comment-info-wrapper">
                      <S.CommentInfo>
                        <p onClick={() => nav('/mypage')}>{item.nickname}</p>
                        <span>{formatCommentDate(item.createdAt)}</span>
                      </S.CommentInfo>
                      <S.CommentContent>{item.content}</S.CommentContent>
                    </div>
                    <img
                      src={replyClicked === item.id ? replyBlue : replyGray}
                      alt="reply"
                      onClick={() => handleReplyClick(item.id)}
                    />
                  </S.CommentContentWrapper>
                </S.CommentItemWrapper>

                {/* 답글 입력 */}
                {replyClicked === item.id && (
                  <S.ReplySection>
                    <S.ReplyWrapper>
                      <img className="reply-line" src={replyLine} alt="reply line" />
                      <S.AddReply>
                        <S.CommentTextArea
                          ref={(el) => (replyInputRef.current[item.id] = el)}
                          placeholder="답글"
                          value={replyContent[item.id] || ''}
                          onChange={(e) => handleReplyChange(e, item.id)}
                        ></S.CommentTextArea>
                        <S.ButtonWrapper>
                          <Button
                            onClick={() => handlePostReply(item.id)}
                            size="small"
                            type={replyContent[item.id]?.trim() ? 'main' : 'inactive'}
                          >
                            게시
                          </Button>
                        </S.ButtonWrapper>
                      </S.AddReply>
                    </S.ReplyWrapper>
                  </S.ReplySection>
                )}

                {/* 답글 목록 표시 */}
                {item.replies.map((reply) => (
                  <li key={reply.id} ref={(el) => (replyRefs.current[reply.id] = el)}>
                    <S.ReplyWrapper>
                      <img
                        onClick={() => nav('/mypage')}
                        className="reply-line"
                        src={replyLine}
                        alt="reply line"
                      />
                      <div className="reply-info-wrapper">
                        <S.CommentInfo>
                          <p onClick={() => nav('/mypage')}>{reply.nickname}</p>
                          <span>{formatCommentDate(reply.createdAt)}</span>
                        </S.CommentInfo>
                        <S.CommentContent>{reply.content}</S.CommentContent>
                      </div>
                    </S.ReplyWrapper>
                  </li>
                ))}
              </S.CommentItem>
            ))}
          </S.CommentList>
        )}
      </S.CommentContainer>
    </S.CommentLayout>
  );
};
