import * as S from '@/components/MyPage/EditProfileModal/AvailabilitySection/styles';
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

  const options = ['프로젝트 합류', '외주', '프리랜서', '정규직'];
  const isRejected = availability.length === 0;

  // 제안 받지 않음 체크하면 모든 옵션 선택 해제
  const handleRejectChange = () => {
    onAvailabilityChange([]);
  };

  const handleOptionChange = (option: string) => {
    const updatedAvailability = availability.includes(option)
      ? availability.filter((item) => item !== option)
      : [...availability, option];

    onAvailabilityChange(updatedAvailability);
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
          {options.map((option) => (
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
