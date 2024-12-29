import { useRef, useState, useEffect } from 'react';
import { Comment } from '@/components/ProjectDetail/Comment';
import { ProjectContent } from '@/components/ProjectDetail/ProjectContent';
import * as S from '@/pages/Project/ProjectDetailPage/styles';
import Navbar from '@/components/Layout/Navbar/NavbarPC';
import { instance } from '@/apis/instance';
import { useParams } from 'react-router-dom';

export const ProjectDetailPage = () => {
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0); // 좋아요 개수 상태
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태
  const commentRef = useRef<HTMLDivElement | null>(null);
  const { project_id } = useParams<{ project_id: string }>();

  const fetchProjectCounts = async () => {
    try {
      const response = await instance.get(`/pofolo/projects/${project_id}/`);
      setCommentCount(response.data.comment_count);
      setLikeCount(response.data.liked_count);
    } catch (error) {
      console.error('프로젝트 데이터 가져오기 실패:', error);
    }
  };

  const scrollToComment = () => {
    commentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLikeToggle = async () => {
    try {
      setIsLiked((prev) => !prev); // UI에 즉시 반영
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1)); // 개수도 바로 반영

      const response = await instance.post(`/pofolo/projects/${project_id}/like/`);
      if (response.data.message === 'Like removed') {
        setIsLiked(false);
      } else if (response.data.message === 'Like added') {
        setIsLiked(true);
      }

      // 최신 데이터로 동기화
      const updatedData = await instance.get(`/pofolo/projects/${project_id}/`);
      setLikeCount(updatedData.data.liked_count);
    } catch (error) {
      console.error('좋아요 토글 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchProjectCounts();
  }, []);

  return (
    <>
      <S.Layout>
        <Navbar />
        <ProjectContent
          onCommentClick={scrollToComment}
          commentCount={commentCount}
          likeCount={likeCount}
          isLiked={isLiked}
          onLikeToggle={handleLikeToggle} // 좋아요 토글 핸들러 전달
        />
        <div className="comment" ref={commentRef}>
          <Comment commentCount={commentCount} updateCommentCount={fetchProjectCounts} />
        </div>
      </S.Layout>
    </>
  );
};
