import React, { useRef, forwardRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, isToday, isYesterday, isThisWeek, getDay, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CommentItemDto } from '@/components/ProjectDetail/Comment/dto';
import Button from '@/components/Common/Button';
import * as S from '@/components/ProjectDetail/Comment/styles';
import replyGray from '@/assets/webps/ProjectDetail/replyGray.webp';
import replyBlue from '@/assets/webps/ProjectDetail/replyBlue.webp';
import replyLine from '@/assets/svgs/ProjectDetail/replyLine.svg';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import { useResponsive } from '@/hooks/useResponsive';
import { instance } from '@/apis/instance';

interface CommentItemProps {
  comment: CommentItemDto;
  replyClicked: number | null;
  onReplyClick: (id: number) => void;
  onReplyPost: (commentId: number) => void;
  onReplyChange: (e: React.ChangeEvent<HTMLTextAreaElement>, commentId: number) => void;
  replyContent: string;
  onDelete: (commentId: number, isReply: boolean, parentId?: number) => void;
}

export const CommentItem = forwardRef<HTMLLIElement, CommentItemProps>(
  (
    { comment, replyClicked, onReplyClick, onReplyPost, onReplyChange, replyContent, onDelete },
    ref
  ) => {
    const [commentWriter, setCommentWriter] = useState({
      id: comment.writer,
      nickname: '',
      profileImg: profileIcon,
    });
    const [replyWriters, setReplyWriters] = useState<
      { id: number; nickname: string; profileImg: string }[]
    >([]);
    const userId = localStorage.getItem('user_id');
    const { isPC } = useResponsive();
    const nav = useNavigate();
    const replyRefs = useRef<(HTMLLIElement | null)[]>([]);
    const replyInputRef = useRef<HTMLTextAreaElement>(null);

    // 댓글 생성 날짜 포맷팅 함수
    const formatCommentDate = (dateString: string) => {
      const date = parseISO(dateString); // ISO 문자열을 Date 객체로 변환

      if (isToday(date)) {
        return '오늘';
      } else if (isYesterday(date)) {
        return '어제';
      } else if (isThisWeek(date)) {
        const dayOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        return dayOfWeek[getDay(date)];
      } else {
        return format(date, 'yyyy년 M월 d일', { locale: ko });
      }
    };

    const fetchWriterInfo = async (writerId: number) => {
      try {
        const response = await instance.get(`/pofolo/users/profile/${writerId}/`);
        return {
          id: writerId,
          nickname: response.data.profile.nickname || '알 수 없음',
          profileImg: response.data.profile.profile_img_url || profileIcon,
        };
      } catch (error) {
        console.error(`작성자 정보 가져오기 실패 (ID: ${writerId}):`, error);
        return {
          id: writerId,
          nickname: '알 수 없음',
          profileImg: profileIcon,
        }; // 기본값 반환
      }
    };

    const loadCommentWriter = async () => {
      const writerInfo = await fetchWriterInfo(comment.writer);
      if (writerInfo) {
        setCommentWriter(writerInfo); // 반환값을 상태로 설정
      }
    };

    const loadReplyWriters = async () => {
      const writers = await Promise.all(
        comment.replies.map(async (reply) => await fetchWriterInfo(reply.writer))
      );
      setReplyWriters(writers); // 배열 상태로 설정
    };

    // 답글 클릭 시 커서 자동 포커스
    const handleReplyClick = (id: number) => {
      onReplyClick(id);
      setTimeout(() => {
        replyInputRef.current?.focus();
      }, 0);
    };

    const handleReplyPost = (commentId: number) => {
      onReplyPost(commentId);
      setTimeout(() => {
        const latestReplyRef = replyRefs.current[replyRefs.current.length - 1];
        latestReplyRef?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
    };

    // 입력 높이 자동 조절
    const handleInput = () => {
      if (replyInputRef.current) {
        replyInputRef.current.style.height = isPC ? '5.6rem' : '4.4rem';
        replyInputRef.current.style.height = `${replyInputRef.current.scrollHeight}px`;
      }
    };

    useEffect(() => {
      loadCommentWriter();
      loadReplyWriters();
    }, [comment.writer, comment.replies]);

    return (
      <S.CommentItem ref={ref}>
        <S.CommentItemWrapper>
          <img
            onClick={() => nav(`/mypage/${commentWriter.id}`)}
            className="profile-icon"
            src={commentWriter.profileImg}
            alt="profile icon"
          />
          <S.CommentContentWrapper>
            <div className="comment-info-wrapper">
              <S.CommentInfo>
                <p onClick={() => nav(`/mypage/${commentWriter.id}`)}>{commentWriter.nickname}</p>
                <span>{formatCommentDate(comment.commented_at)}</span>
              </S.CommentInfo>
              <S.CommentContent>{comment.text}</S.CommentContent>
            </div>
            <div className="menu-wrapper">
              <img
                src={replyClicked === comment.id ? replyBlue : replyGray}
                alt="reply"
                onClick={() => handleReplyClick(comment.id)}
              />
              {Number(userId) === comment.writer && (
                <Button
                  size={isPC ? 'small' : 'small2'}
                  type="obscure"
                  onClick={() => onDelete(comment.id, false)}
                >
                  삭제
                </Button>
              )}
            </div>
          </S.CommentContentWrapper>
        </S.CommentItemWrapper>

        {/* 답글 입력 */}
        {replyClicked === comment.id && (
          <S.ReplySection>
            <S.ReplyWrapper>
              <img className="reply-line" src={replyLine} alt="reply line" />
              <S.AddReply>
                <S.CommentTextArea
                  ref={replyInputRef}
                  placeholder="답글"
                  value={replyContent}
                  onInput={handleInput}
                  onChange={(e) => onReplyChange(e, comment.id)}
                ></S.CommentTextArea>
                <S.ButtonWrapper>
                  <Button
                    onClick={() => handleReplyPost(comment.id)}
                    size="small"
                    type={replyContent.trim() ? 'main' : 'inactive'}
                  >
                    게시
                  </Button>
                </S.ButtonWrapper>
              </S.AddReply>
            </S.ReplyWrapper>
          </S.ReplySection>
        )}

        {/* 답글 목록 표시 */}
        {comment.replies.length > 0 && (
          <ul>
            {comment.replies.map((reply, index) => {
              const writer = replyWriters.find((w) => w.id === reply.writer);
              return (
                <li key={reply.id} ref={(el) => (replyRefs.current[index] = el)}>
                  <S.ReplyWrapper>
                    <div className="comment-info-wrapper">
                      <img
                        onClick={() => nav(`/mypage/${reply.writer}`)}
                        className="reply-line"
                        src={replyLine}
                        alt="reply line"
                      />
                      <div className="reply-info-wrapper">
                        <S.CommentInfo>
                          <p onClick={() => nav(`/mypage/${reply.writer}`)}>{writer?.nickname}</p>
                          <span>{formatCommentDate(reply.commented_at)}</span>
                        </S.CommentInfo>
                        <S.CommentContent>{reply.text}</S.CommentContent>
                      </div>
                    </div>
                    {Number(userId) === reply.writer && (
                      <Button
                        size={isPC ? 'small' : 'small2'}
                        type="obscure"
                        onClick={() => onDelete(reply.id, true, comment.id)}
                      >
                        삭제
                      </Button>
                    )}
                  </S.ReplyWrapper>
                </li>
              );
            })}
          </ul>
        )}
      </S.CommentItem>
    );
  }
);
