import * as S from '@/components/MyPage/EditProfileModal/ContactSection/styles';
import Input from '@/components/Common/Input';
import Checkbox from '@/components/Common/CheckBox';

interface ContactSectionProps {
  phoneNum: string | null;
  setPhoneNum: React.Dispatch<React.SetStateAction<string | null>>;
  phoneNumIsPublic: boolean;
  setPhoneNumIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
  email: string | null;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  emailIsPublic: boolean;
  setEmailIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactSection = ({
  phoneNum,
  setPhoneNum,
  phoneNumIsPublic,
  setPhoneNumIsPublic,
  email,
  setEmail,
  emailIsPublic,
  setEmailIsPublic,
}: ContactSectionProps) => {
  const handleEmailCheckbox = () => {
    setEmailIsPublic((prev) => !prev);
  };
  const handlePhoneNumCheckbox = () => {
    setPhoneNumIsPublic((prev) => !prev);
  };
  return (
    <S.SectionContainer>
      <S.SectionTitle>연락처</S.SectionTitle>
      <S.InputsContainer>
        <S.InputWrapper>
          <Input
            value={email || ''}
            onChange={(e) => setEmail(e.target.value || null)}
            placeholder="이메일"
            hideIcon={true}
            isPrivateCheckbox={true}
          />
          <S.CheckboxContainer>
            <S.CheckboxLabel>
              <Checkbox checked={!emailIsPublic} onChange={handleEmailCheckbox} />
              비공개
            </S.CheckboxLabel>
          </S.CheckboxContainer>
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            value={phoneNum || ''}
            onChange={(e) => setPhoneNum(e.target.value || null)}
            placeholder="전화번호"
            hideIcon={true}
            isPrivateCheckbox={true}
          />
          <S.CheckboxContainer>
            <S.CheckboxLabel>
              <Checkbox checked={!phoneNumIsPublic} onChange={handlePhoneNumCheckbox} />
              비공개
            </S.CheckboxLabel>
          </S.CheckboxContainer>
        </S.InputWrapper>
      </S.InputsContainer>
    </S.SectionContainer>
  );
};

export default ContactSection;
