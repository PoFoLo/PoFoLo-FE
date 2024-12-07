import * as S from '@/components/About/Motivation/styles';

interface MotivationCardProps {
  image: string;
  overlayImage: string;
  title: string[];
  description: string[];
  reverse?: boolean;
}

export const MotivationCard: React.FC<MotivationCardProps> = ({
  image,
  overlayImage,
  title,
  description,
  reverse = false,
}) => {
  return (
    <S.Card>
      {!reverse && (
        <S.ImgWrapper>
          <img src={image} alt="motivation img" />
        </S.ImgWrapper>
      )}
      <S.TextContainer reverse={reverse}>
        <img src={overlayImage} alt="blur background img" />
        <S.BlurOverlay reverse={reverse}>
          <h2>
            {title.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </h2>
          <h6>
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </h6>
        </S.BlurOverlay>
      </S.TextContainer>
      {reverse && (
        <S.ImgWrapper reverse={reverse}>
          <img src={image} alt="motivation img" />
        </S.ImgWrapper>
      )}
    </S.Card>
  );
};
