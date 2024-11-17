import React, { useState } from 'react';
import * as S from './styles';

import inactiveIconSrc from '@/assets/webps/Main/inactiveIcon.webp';
import activeIconSrc from '@/assets/webps/Main/activeIcon.webp';

const SearchBar: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInactiveDivClick = () => {
    setIsEditing(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleIconClick = () => {
    setIsSubmitted(true);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsSubmitted(true);
      setIsEditing(false);
    }
  };

  const handleActiveDivClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {!isEditing && !isSubmitted && (
        <S.InactiveContainer onClick={handleInactiveDivClick}>
          <S.InactiveLetter>검색</S.InactiveLetter>
          <S.InactiveIcon src={inactiveIconSrc} alt="Magnifier Icon" />
        </S.InactiveContainer>
      )}
      {isEditing && (
        <S.ActiveContainer>
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
      {!isEditing && isSubmitted && (
        <S.ActiveContainer onClick={handleActiveDivClick}>
          <S.ActiveLetter>{inputValue}</S.ActiveLetter>
          <S.ActiveIcon src={activeIconSrc} alt="Magnifier Icon" onClick={handleIconClick} />
        </S.ActiveContainer>
      )}
    </>
  );
};

export default SearchBar;
