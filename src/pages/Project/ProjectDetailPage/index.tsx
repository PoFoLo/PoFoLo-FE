import { useRef, useState, useEffect } from 'react';
import { Comment } from '@/components/ProjectDetail/Comment';
import { ProjectContent } from '@/components/ProjectDetail/ProjectContent';
import * as S from '@/pages/Project/ProjectDetailPage/styles';
import Navbar from '@/components/Layout/Navbar/NavbarPC';
import { instance } from '@/apis/instance';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const [commentCount, setCommentCount] = useState(0);
  const commentRef = useRef<HTMLDivElement | null>(null);
  const { project_id } = useParams<{ project_id: string }>();

  const fetchProjectCounts = async () => {
    try {
      const response = await instance.get(`/pofolo/projects/${project_id}/`);
      setCommentCount(response.data.comment_count);
    } catch (error) {
      console.error('프로젝트 데이터 가져오기 실패:', error);
    }
  };

  const scrollToComment = () => {
    commentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    fetchProjectCounts();
  }, []);

  return (
    <>
      <S.Layout>
        <Navbar />
        <ProjectContent onCommentClick={scrollToComment} commentCount={commentCount} />
        <div className="comment" ref={commentRef}>
          <Comment commentCount={commentCount} updateCommentCount={fetchProjectCounts} />
        </div>
      </S.Layout>
    </>
  );
};

export default ProjectDetailPage;