import { useState, useRef, useEffect, useCallback } from 'react';
import * as S from '@/components/WriteProject/SelectField/styles';
import upArrow from '@/assets/webps/WriteProject/upArrow.webp';
import downArrow from '@/assets/webps/WriteProject/downArrow.webp';
import blueDownArrow from '@/assets/webps/WriteProject/blueDownArrow.webp';

interface SelectFieldProps {
  categoryValue: string;
  onChangeCategory: (value: string) => void;
  subCategoryValue: string;
  onChangeSubCategory: (value: string) => void;
  error: boolean;
}

const SelectField = ({
  categoryValue = '',
  onChangeCategory,
  subCategoryValue = '',
  onChangeSubCategory,
  error = false,
}: SelectFieldProps) => {
  const categories = [
    {
      label: '기획',
      subcategories: ['전체', '서비스 기획', '상품 기획', '마케팅', '광고', '기타'],
    },
    {
      label: '개발',
      subcategories: [
        '전체',
        '프론트엔드',
        '백엔드',
        '데이터 분석',
        '임베디드',
        '게임',
        '인공지능',
        '기타',
      ],
    },
    { label: '디자인', subcategories: ['전체', 'UX/UI', '제품', '패션', '인테리어', '기타'] },
  ];

  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState<boolean>(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const subCategoryRef = useRef<HTMLDivElement>(null);

  // 드롭다운 영역 외부 클릭했을 때 드롭다운 닫히게
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
      setIsCategoryOpen(false);
    }
    if (subCategoryRef.current && !subCategoryRef.current.contains(event.target as Node)) {
      setIsSubCategoryOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const handleOnChangeCategory = (value: string) => {
    setIsCategoryOpen(false);
    setIsSubCategoryOpen(false);
    onChangeCategory(value);
    onChangeSubCategory('');
  };

  const handleOnChangeSubCategory = (value: string) => {
    setIsSubCategoryOpen(false);
    onChangeSubCategory(value);
  };

  const selectedCategory = categories.find((category) => category.label === categoryValue);

  return (
    <S.SelectFieldContainer>
      <S.DropdownContainer>
        {/* 대분류 드롭다운 */}
        <S.DropdownHeader ref={categoryRef} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          <S.SelectedText $isSelected={!!categoryValue && !isCategoryOpen}>
            {isCategoryOpen ? '대분류' : categoryValue || '대분류'}
          </S.SelectedText>
          <S.IconContainer
            $backgroundImage={isCategoryOpen ? upArrow : categoryValue ? blueDownArrow : downArrow}
          />
          {isCategoryOpen && (
            <S.OptionList>
              {categories.map((category, index) => (
                <S.Option
                  key={index}
                  $isSelectedValue={category.label === categoryValue}
                  onClick={() => handleOnChangeCategory(category.label)}
                >
                  {category.label}
                </S.Option>
              ))}
            </S.OptionList>
          )}
        </S.DropdownHeader>

        {/* 소분류 드롭다운 */}
        <S.DropdownHeader
          ref={subCategoryRef}
          onClick={() => {
            if (categoryValue) setIsSubCategoryOpen(!isSubCategoryOpen);
          }}
        >
          <S.SelectedText $isSelected={!!subCategoryValue && !isSubCategoryOpen}>
            {isSubCategoryOpen ? '소분류' : subCategoryValue || '소분류'}
          </S.SelectedText>
          <S.IconContainer
            $backgroundImage={
              isSubCategoryOpen ? upArrow : subCategoryValue ? blueDownArrow : downArrow
            }
          />
          {isSubCategoryOpen && selectedCategory && (
            <S.OptionList>
              {selectedCategory.subcategories.map((sub, index) => (
                <S.Option
                  key={index}
                  $isSelectedValue={sub === subCategoryValue}
                  onClick={() => handleOnChangeSubCategory(sub)}
                >
                  {sub}
                </S.Option>
              ))}
            </S.OptionList>
          )}
        </S.DropdownHeader>
      </S.DropdownContainer>
      {error && <S.ErrorMessage>필수 선택 항목입니다.</S.ErrorMessage>}
    </S.SelectFieldContainer>
  );
};

export default SelectField;
