import { useRef, useState } from 'react';
import { Comment } from '@/components/ProjectDetail/Comment';
import { ProjectContent } from '@/components/ProjectDetail/ProjectContent';
import * as S from '@/pages/Project/ProjectDetailPage/styles';
import Navbar from '@/components/Layout/Navbar/NavbarPC';

export const ProjectDetailPage = () => {
  const [commentCount, setCommentCount] = useState(0); // 댓글 개수 상태
  const commentRef = useRef<HTMLDivElement | null>(null);

  const scrollToComment = () => {
    commentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const updateCommentCount = (count: number) => {
    setCommentCount(count);
  };

  return (
    <>
      <S.Layout>
        <Navbar />
        <ProjectContent onCommentClick={scrollToComment} commentCount={commentCount} />
        <div className="comment" ref={commentRef}>
          <Comment updateCommentCount={updateCommentCount} />
        </div>
      </S.Layout>
    </>
  );
};
