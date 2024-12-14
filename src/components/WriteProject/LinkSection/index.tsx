import * as S from '@/components/WriteProject/LinkSection/styles';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import linkIcon from '@/assets/webps/Common/link.webp';
import linkDeleteIcon from '@/assets/webps/Common/linkDelete.webp';

interface LinkSectionProps {
  links: string[];
  setLink: React.Dispatch<React.SetStateAction<string[]>>;
}
const LinkSection = ({ links = [], setLink }: LinkSectionProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !links.includes(trimmedValue)) {
        // 링크 중복 등록 안되게
        setLink([...links, trimmedValue]);
        setInputValue('');
      }
    }
  };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain;
    } catch (error) {
      return '잘못된 URL';
    }
  };

  const handleRemoveLink = (index: number) => {
    setLink(links.filter((_, i) => i !== index));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>링크</S.SectionTitle>
      <S.LinkInputContainer>
        {links.map((link, index) => (
          <S.Link key={index}>
            <S.LinkIcon $backgroundImage={linkIcon} />
            <S.LinkContentContainer>
              <S.LinkTitle>{link}</S.LinkTitle>
              <S.LinkDomain>{getDomainFromUrl(link)}</S.LinkDomain>
            </S.LinkContentContainer>
            <S.RemoveButton
              $backgroundImage={linkDeleteIcon}
              onClick={() => handleRemoveLink(index)}
            />
          </S.Link>
        ))}
        <S.Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={links.length ? '' : '관련된 외부 링크를 추가하세요 (쉼표로 구분)'}
        />
      </S.LinkInputContainer>
    </S.SectionContainer>
  );
};

export default LinkSection;
