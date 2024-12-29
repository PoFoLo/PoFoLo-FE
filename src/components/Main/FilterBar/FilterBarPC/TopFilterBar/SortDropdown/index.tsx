import React, { useState } from 'react';
import * as S from '@/components/Main/FilterBar/FilterBarPC/TopFilterBar/SortDropdown/styles';
import sortCaretSrc from '@/assets/webps/Main/sortCaret.webp';

interface Props {
  sortOption: string; // 현재 선택된 정렬 옵션
  setSortOption: (option: string) => void; // 정렬 옵션을 설정하는 함수
}

const SortDropdown: React.FC<Props> = ({ sortOption, setSortOption }) => {
  const options = ['최신순', '인기순'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSortOption(option); // 부모 컴포넌트로 정렬 옵션 전달
    setIsOpen(false);
  };

  return (
    <S.SortDropdownContainer>
      <S.DropdownContainer>
        <S.SelectedContainer onClick={toggleMenu}>
          <S.SelectedLetter>{sortOption}</S.SelectedLetter>
          <S.SelectedCaret
            src={sortCaretSrc}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            alt="caret"
          />
        </S.SelectedContainer>
        {isOpen && (
          <S.MenuContainer>
            <S.MenuLetterContainer>
              {options.map((option, index) => (
                <>
                  {sortOption === option ? (
                    <S.Active key={index} onClick={() => handleSelect(option)} className="active">
                      {option}
                    </S.Active>
                  ) : (
                    <S.Inactive
                      key={index}
                      onClick={() => handleSelect(option)}
                      className="inactive"
                    >
                      {option}
                    </S.Inactive>
                  )}
                </>
              ))}
            </S.MenuLetterContainer>
          </S.MenuContainer>
        )}
      </S.DropdownContainer>
    </S.SortDropdownContainer>
  );
};

export default SortDropdown;
