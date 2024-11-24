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
  ]); // 초기 데이터
  const [filteredData, setFilteredData] = useState(data);

  const activeContainerRef = useRef<HTMLDivElement>(null);

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
      setIsEditing(false);
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() === '') {
        setIsEditing(false);
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
        setIsEditing(false);
      }
    }
  };

  const handleActiveDivClick = () => {
    setIsEditing(true);
  };

  // 바깥 클릭을 감지하는 useEffect
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
        <S.ActiveContainer ref={activeContainerRef}>
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
      {/*
      필터가 잘 됐나 확인. 백엔드와 연결 시 잘 작동하나 확인용으로 쓰기
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      */}
    </>
  );
};

export default SearchBar;
