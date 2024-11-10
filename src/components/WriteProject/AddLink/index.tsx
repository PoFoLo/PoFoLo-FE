import * as S from '@/components/WriteProject/AddLink/styles';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import LinkIcon from '@/assets/webps/WriteProject/linkIcon.webp';
import LinkDeleteIcon from '@/assets/webps/WriteProject/linkDeleteIcon.webp';

interface AddLinkProps {
  links: string[];
  onChangeLink: (value: string[]) => void;
}
const AddLink = ({ links = [], onChangeLink }: AddLinkProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',') {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !links.includes(trimmedValue)) {
        // 링크 중복 등록 안되게
        onChangeLink([...links, trimmedValue]);
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
    onChangeLink(links.filter((_, i) => i !== index));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.LinkInputContainer>
      {links.map((link, index) => (
        <S.Link key={index}>
          <S.LinkIcon $backgroundImage={LinkIcon} />
          <S.LinkContentContainer>
            <S.LinkTitle>{link}</S.LinkTitle>
            <S.LinkDomain>{getDomainFromUrl(link)}</S.LinkDomain>
          </S.LinkContentContainer>
          <S.RemoveButton
            $backgroundImage={LinkDeleteIcon}
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
  );
};

export default AddLink;
