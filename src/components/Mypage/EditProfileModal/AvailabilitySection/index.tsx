import * as S from '@/components/Mypage/EditProfileModal/AvailabilitySection/styles';
import Checkbox from '@/components/Common/CheckBox';
import { useResponsive } from '@/hooks/useResponsive';

interface AvailabilitySectionProps {
  availability: string[];
  setAvailability: React.Dispatch<React.SetStateAction<string[]>>;
}

const AvailabilitySection = ({
  availability,
  setAvailability: onAvailabilityChange,
}: AvailabilitySectionProps) => {
  const { isPC } = useResponsive();

  const options = ['프로젝트 합류', '외주', '프리랜서', '정규직', '제안 받지 않음'];
  const isRejected = availability.includes('제안 받지 않음');

  const handleRejectChange = () => {
    if (!isRejected) {
      onAvailabilityChange(['제안 받지 않음']);
    }
  };

  const handleOptionChange = (option: string) => {
    const updatedAvailability = availability.includes(option)
      ? availability.filter((item) => item !== option)
      : [...availability.filter((item) => item !== '제안 받지 않음'), option];

    onAvailabilityChange(updatedAvailability.length > 0 ? updatedAvailability : ['제안 받지 않음']);
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>가용성</S.SectionTitle>
      <S.AvailabilityContainer>
        <S.LabelText>
          <Checkbox checked={isRejected} onChange={handleRejectChange} />
          제안 받지 않음
        </S.LabelText>
        {!isPC && <S.GreyLine />}
        <S.OptionsContainer>
          {options
            .filter((option) => option !== '제안 받지 않음')
            .map((option) => (
              <S.LabelText key={option}>
                <Checkbox
                  checked={availability.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </S.LabelText>
            ))}
        </S.OptionsContainer>
      </S.AvailabilityContainer>
    </S.SectionContainer>
  );
};

export default AvailabilitySection;
