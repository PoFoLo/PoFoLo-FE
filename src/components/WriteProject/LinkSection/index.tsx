import * as S from '@/components/WriteProject/LinkSection/styles';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import linkIcon from '@/assets/webps/Common/link.webp';
import linkDeleteIcon from '@/assets/webps/Common/linkDelete.webp';
import { instance } from '@/apis/instance';

interface SiteLink {
  [key: string]: string;
}

interface LinkSectionProps {
  links: SiteLink;
  setLinks: React.Dispatch<React.SetStateAction<SiteLink>>;
}
const LinkSection = ({ links, setLinks }: LinkSectionProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !Object.values(links).includes(trimmedValue)) {
        try {
          const accessToken = localStorage.getItem('access');
          const response = await instance.post(
            '/pofolo/projects/links/',
            { link: trimmedValue },
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );
          setLinks((prevLinks) => ({
            ...prevLinks,
            [response.data.title]: trimmedValue,
          }));
          setInputValue('');
        } catch (error) {
          console.error(error);
        }
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

  const handleRemoveLink = (key: string) => {
    setLinks((prevLinks) => {
      const updatedLinks = { ...prevLinks };
      delete updatedLinks[key];
      return updatedLinks;
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.SectionContainer>
      <S.SectionTitle>링크</S.SectionTitle>
      <S.LinkInputContainer $hasLinks={Object.keys(links).length > 0}>
        {Object.entries(links).map(([title, url], index) => (
          <S.Link key={index}>
            <S.LinkIcon $backgroundImage={linkIcon} />
            <S.LinkContentContainer>
              <S.LinkTitle>{title}</S.LinkTitle>
              <S.LinkDomain>{getDomainFromUrl(url)}</S.LinkDomain>
            </S.LinkContentContainer>
            <S.RemoveButton
              $backgroundImage={linkDeleteIcon}
              onClick={() => handleRemoveLink(title)}
            />
          </S.Link>
        ))}
        <S.Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={
            Object.keys(links).length === 0 ? '관련된 외부 링크를 추가하세요 (쉼표로 구분)' : ''
          }
        />
      </S.LinkInputContainer>
    </S.SectionContainer>
  );
};

export default LinkSection;
