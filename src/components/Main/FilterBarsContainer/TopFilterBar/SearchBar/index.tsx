import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';

import inactiveIconSrc from '@/assets/webps/Main/inactiveIcon.webp';
import activeIconSrc from '@/assets/webps/Main/activeIcon.webp';

const SearchBar: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        activeContainerRef.current &&
        !activeContainerRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
        setIsSubmitted(false);
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
        <S.InactiveContainer onClick={handleInactiveDivClick}>
          <S.InactiveLetter>검색</S.InactiveLetter>
          <S.InactiveIcon src={inactiveIconSrc} alt="Magnifier Icon" />
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
