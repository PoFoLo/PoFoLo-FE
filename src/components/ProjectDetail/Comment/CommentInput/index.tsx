import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/Common/Button';
import * as S from '@/components/ProjectDetail/Comment/styles';
import profileIcon from '@/assets/webps/Common/profileIcon.webp';
import { useResponsive } from '@/hooks/useResponsive';
import { instance } from '@/apis/instance';

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
  const { isPC } = useResponsive();
  const userId = localStorage.getItem('user_id');
  const [profileImg, setProfileImg] = useState<string>(profileIcon); // 기본 프로필 이미지로 초기화

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await instance.get(`/pofolo/users/profile/${userId}/`);
        const { profile_img_url } = response.data.profile;
        setProfileImg(profile_img_url || profileIcon); // 이미지가 없으면 기본 이미지로 설정
      } catch (error) {
        console.error('프로필 이미지 가져오기 실패:', error);
        setProfileImg(profileIcon); // 에러 발생 시 기본 이미지로 설정
      }
    };

    fetchProfile();
  }, [userId]);

  const handlePost = () => {
    onPost(); // 댓글 게시
    scrollToNewComment(); // 새 댓글로 스크롤

    // 높이 초기화
    if (commentInputRef.current) {
      commentInputRef.current.style.height = isPC ? '5.6rem' : '4.4rem';
    }
  };

  const handleInput = () => {
    if (commentInputRef.current) {
      commentInputRef.current.style.height = isPC ? '5.6rem' : '4.4rem';
      commentInputRef.current.style.height = `${commentInputRef.current.scrollHeight}px`; // 내용에 맞게 높이 설정
    }
  };

  return (
    <S.AddComment>
      <img src={profileImg} alt="profile icon" />
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
