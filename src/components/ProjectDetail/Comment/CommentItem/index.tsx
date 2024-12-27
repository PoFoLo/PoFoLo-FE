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
}

export const CommentItem = forwardRef<HTMLLIElement, CommentItemProps>(
  ({ comment, replyClicked, onReplyClick, onReplyPost, onReplyChange, replyContent }, ref) => {
    const [writerInfo, setWriterInfo] = useState<{
      nickname: string;
      profileImg: string;
    }>({
      nickname: '',
      profileImg: profileIcon,
    });
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

    // 작성자 정보 가져오기
    const fetchWriterInfo = async (userId: number) => {
      try {
        const response = await instance.get(`/pofolo/users/profile/${userId}/`);
        const { nickname, profile_img } = response.data.profile;

        setWriterInfo({
          nickname,
          profileImg: profile_img || profileIcon, // 프로필 이미지가 없으면 기본 이미지 사용
        });
      } catch (error) {
        console.error('작성자 정보 가져오기 실패:', error);
        setWriterInfo({
          nickname: '',
          profileImg: profileIcon,
        });
      }
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
      if (comment.writer) {
        fetchWriterInfo(comment.writer); // 작성자 ID를 기반으로 정보 가져오기
      }
    }, [comment.writer]);

    return (
      <S.CommentItem ref={ref}>
        <S.CommentItemWrapper>
          <img
            onClick={() => nav('/mypage')}
            className="profile-icon"
            src={writerInfo.profileImg}
            alt="profile icon"
          />
          <S.CommentContentWrapper>
            <div className="comment-info-wrapper">
              <S.CommentInfo>
                <p onClick={() => nav('/mypage')}>{writerInfo.nickname}</p>
                <span>{formatCommentDate(comment.commented_at)}</span>
              </S.CommentInfo>
              <S.CommentContent>{comment.text}</S.CommentContent>
            </div>
            <img
              src={replyClicked === comment.id ? replyBlue : replyGray}
              alt="reply"
              onClick={() => handleReplyClick(comment.id)}
            />
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
        {comment.replies.map((reply, index) => (
          <li key={reply.id} ref={(el) => (replyRefs.current[index] = el)}>
            <S.ReplyWrapper>
              <img
                onClick={() => nav('/mypage')}
                className="reply-line"
                src={replyLine}
                alt="reply line"
              />
              <div className="reply-info-wrapper">
                <S.CommentInfo>
                  <p onClick={() => nav('/mypage')}>{writerInfo.nickname}</p>
                  <span>{formatCommentDate(reply.commented_at)}</span>
                </S.CommentInfo>
                <S.CommentContent>{reply.text}</S.CommentContent>
              </div>
            </S.ReplyWrapper>
          </li>
        ))}
      </S.CommentItem>
    );
  }
);
