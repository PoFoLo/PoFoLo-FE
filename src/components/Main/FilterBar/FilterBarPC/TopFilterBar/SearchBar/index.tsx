import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';

import inactiveIconSrc from '@/assets/webps/Main/inactiveIcon.webp';
import inactiveIconHoverSrc from '@/assets/webps/Main/inactiveIconHover.webp';
import activeIconSrc from '@/assets/webps/Main/activeIcon.webp';

const SearchBar: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCentered, setIsCentered] = useState(false); // 중앙 정렬 상태
  const [data, setData] = useState([
    { id: 1, title: 'React Tutorial' },
    { id: 2, title: 'Vue.js Guide' },
    { id: 3, title: 'Angular Basics' },
    { id: 4, title: 'Svelte Introduction' },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const activeContainerRef = useRef<HTMLDivElement>(null);
  const [isError, setIsError] = useState(false);

  const handleInactiveDivClick = () => {
    setIsEditing(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // 필터링 로직
    const filtered = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };

  const handleIconClick = () => {
    if (inputValue.trim() === '') {
      setIsError(true);
      setTimeout(() => setIsError(false), 300);
      setIsEditing(true);
    } else {
      setIsSubmitted(true);
      setIsEditing(false);
      setIsCentered(true); // 엔터 후 중앙 정렬
      setIsError(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleIconClick();
    }
  };

  const handleActiveDivClick = () => {
    setIsEditing(true);
    setIsCentered(false); // 편집 시작 시 다시 왼쪽 정렬
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
        setIsSubmitted(false);
        setIsCentered(false); // 편집 종료 시 중앙 정렬 해제
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
      {!isEditing && isSubmitted && inputValue.trim() !== '' && (
        <S.ActiveContainer onClick={handleActiveDivClick}>
          <S.ActiveLetter>{inputValue}</S.ActiveLetter>
          <S.ActiveIcon src={activeIconSrc} alt="Magnifier Icon" onClick={handleIconClick} />
        </S.ActiveContainer>
      )}
    </>
  );
};

export default SearchBar;
