import * as S from '@/components/FormField/CategorySection/styles';
import upArrow from '@/assets/webps/FormField/upArrow.webp';
import downArrow from '@/assets/webps/FormField/downArrow.webp';
import blueDownArrow from '@/assets/webps/FormField/blueDownArrow.webp';
import { useState, useRef, useEffect, useCallback } from 'react';

interface CategorySectionProps {
  mainCategory: string;
  setMainCategory: React.Dispatch<React.SetStateAction<string>>;
  subCategory: string;
  setSubcategory: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const CategorySection = ({
  mainCategory = '',
  setMainCategory,
  subCategory = '',
  setSubcategory,
  error = false,
  setErrors,
}: CategorySectionProps) => {
  const categories = [
    {
      label: '기획',
      subcategories: ['서비스 기획', '상품 기획', '마케팅', '광고', '기타'],
    },
    {
      label: '개발',
      subcategories: [
        '프론트엔드',
        '백엔드',
        '데이터 분석',
        '임베디드',
        '게임',
        '인공지능',
        '기타',
      ],
    },
    { label: '디자인', subcategories: ['UX/UI', '제품', '패션', '인테리어', '기타'] },
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

  const handleCategoryChange = (value: string) => {
    setMainCategory(value);
    setSubcategory(''); // 대분류 바뀌면 소분류 초기화
  };

  const handleSubCategoryChange = (value: string) => {
    setErrors((prev) => ({
      ...prev,
      category: false,
    }));
    setSubcategory(value);
  };

  const selectedCategory = categories.find((category) => category.label === mainCategory);

  return (
    <S.SectionContainer>
      <S.SectionTitle>분야</S.SectionTitle>
      <S.SelectFieldContainer>
        <S.DropdownContainer>
          {/* 대분류 드롭다운 */}
          <S.DropdownHeader ref={categoryRef} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            <S.SelectedText $isSelected={!!mainCategory && !isCategoryOpen}>
              {isCategoryOpen ? '대분류' : mainCategory || '대분류'}
            </S.SelectedText>
            <S.IconContainer
              $backgroundImage={isCategoryOpen ? upArrow : mainCategory ? blueDownArrow : downArrow}
            />
            {isCategoryOpen && (
              <S.OptionList>
                {categories.map((category, index) => (
                  <S.Option
                    key={index}
                    $isSelectedValue={category.label === mainCategory}
                    onClick={() => handleCategoryChange(category.label)}
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
              if (mainCategory) setIsSubCategoryOpen(!isSubCategoryOpen);
            }}
          >
            <S.SelectedText $isSelected={!!subCategory && !isSubCategoryOpen}>
              {isSubCategoryOpen ? '소분류' : subCategory || '소분류'}
            </S.SelectedText>
            <S.IconContainer
              $backgroundImage={
                isSubCategoryOpen ? upArrow : subCategory ? blueDownArrow : downArrow
              }
            />
            {isSubCategoryOpen && selectedCategory && (
              <S.OptionList>
                {selectedCategory.subcategories.map((sub, index) => (
                  <S.Option
                    key={index}
                    $isSelectedValue={sub === subCategory}
                    onClick={() => handleSubCategoryChange(sub)}
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
    </S.SectionContainer>
  );
};

export default CategorySection;
