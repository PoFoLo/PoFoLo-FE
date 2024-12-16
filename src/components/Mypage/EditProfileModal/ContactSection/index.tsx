import * as S from '@/components/Mypage/EditProfileModal/ContactSection/styles';
import CheckboxInput from '@/components/Mypage/EditProfileModal/CheckboxInput';

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
  return (
    <S.SectionContainer>
      <S.SectionTitle>연락처</S.SectionTitle>
      <S.InputsContainer>
        <CheckboxInput
          inputValue={email || ''}
          isChecked={emailIsPublic}
          inputPlaceholder="이메일"
          onInputChange={setEmail}
          onCheckboxChange={setEmailIsPublic}
        />
        <CheckboxInput
          inputValue={phoneNum || ''}
          isChecked={phoneNumIsPublic}
          inputPlaceholder="전화번호"
          onInputChange={setPhoneNum}
          onCheckboxChange={setPhoneNumIsPublic}
        />
      </S.InputsContainer>
    </S.SectionContainer>
  );
};

export default ContactSection;
