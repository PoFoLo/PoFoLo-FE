import React, { useState } from 'react';
import * as S from '@/components/Main/ControlPanels/SortDropdown/styles';

import sortCaretSrc from '@/assets/webps/Main/sortCaret.webp';

const SortDropdown: React.FC = () => {
  const options = ['최신순', '인기순'];
  const onSelect = (option: string) => {
    console.log('Selected option:', option);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <S.SortDropdownContainer>
      <S.DropdownContainer>
        <S.SelectedContainer onClick={toggleMenu}>
          <S.SelectedLetter>{selectedOption || '최신순'}</S.SelectedLetter>
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
                  {selectedOption === option ? (
                    <S.Active
                      key={index}
                      onClick={() => handleSelect(option)}
                      className={selectedOption === option ? 'active' : 'inactive'}
                    >
                      {option}
                    </S.Active>
                  ) : (
                    <S.Inactive
                      key={index}
                      onClick={() => handleSelect(option)}
                      className={selectedOption === option ? 'active' : 'inactive'}
                    >
                      {option}
                    </S.Inactive>
                  )}
                </>
                // </li>
              ))}
            </S.MenuLetterContainer>
          </S.MenuContainer>
        )}
      </S.DropdownContainer>
    </S.SortDropdownContainer>
  );
};

export default SortDropdown;
