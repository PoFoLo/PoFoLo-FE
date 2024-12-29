import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';

import inactiveIconSrc from '@/assets/webps/Main/inactiveIcon.webp';
import inactiveIconHoverSrc from '@/assets/webps/Main/inactiveIconHover.webp';
import activeIconSrc from '@/assets/webps/Main/activeIcon.webp';

interface Props {
  cards: any[]; // 렌더링 중인 카드 데이터
  onSearch: (filteredCards: any[]) => void; // 필터링된 데이터를 상위 컴포넌트로 전달
}

const SearchBar: React.FC<Props> = ({ cards, onSearch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filteredData, setFilteredData] = useState(cards);
  const activeContainerRef = useRef<HTMLDivElement>(null);
  const [isError, setIsError] = useState(false);

  const handleInactiveDivClick = () => {
    setIsEditing(true);
    setIsSubmitted(false); // 편집 시작 시 검색 완료 상태 초기화
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // 필터링 로직
    const filtered = cards.filter(
      (card) =>
        card.writer_name.toLowerCase().includes(value.toLowerCase()) ||
        card.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered); // 로컬 상태 업데이트
    onSearch(filtered); // 상위로 전달
  };

  const handleIconClick = () => {
    if (inputValue.trim() === '') {
      setIsError(true);
      setTimeout(() => setIsError(false), 300);
      setIsEditing(true);
    } else {
      console.log('Setting isSubmitted to true'); // 디버깅 로그
      setIsEditing(false); // 검색 완료 후 편집 모드 종료
      setIsSubmitted(true); // 검색 완료 상태 설정
      setIsError(false);
    }
  };

  useEffect(() => {
    console.log('isSubmitted:', isSubmitted);
  }, [isSubmitted]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isSubmitted) {
      // 중복 방지
      handleIconClick();
    }
  };

  const handleActiveDivClick = () => {
    setIsEditing(true); // 다시 입력 가능한 상태로 전환
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        activeContainerRef.current &&
        !activeContainerRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isEditing]);

  return (
    <>
      {/* 검색 상태가 비활성화된 초기 상태 */}
      {!isEditing && !isSubmitted && (
        <S.InactiveContainer
          onClick={handleInactiveDivClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <S.InactiveLetter>검색</S.InactiveLetter>
          {isHovering ? (
            <S.InactiveIconHover src={inactiveIconHoverSrc} alt="Magnifier Icon" />
          ) : (
            <S.InactiveIcon src={inactiveIconSrc} alt="Magnifier Icon" />
          )}
        </S.InactiveContainer>
      )}

      {/* 검색창이 활성화된 상태 (입력 가능) */}
      {isEditing && (
        <S.ActiveContainer ref={activeContainerRef} isError={isError}>
          <S.ActiveInput
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <S.ActiveIcon src={activeIconSrc} alt="Magnifier Icon" onClick={handleIconClick} />
        </S.ActiveContainer>
      )}

      {/* 검색 결과가 표시된 상태 */}
      {!isEditing && isSubmitted && (
        <S.ActiveContainer
          isSubmitted={true}
          onClick={handleActiveDivClick} // 클릭 시 입력 상태로 전환
        >
          <S.ActiveLetter>{inputValue}</S.ActiveLetter>
          <S.ActiveIcon src={activeIconSrc} alt="Magnifier Icon" />
        </S.ActiveContainer>
      )}
    </>
  );
};

export default SearchBar;
