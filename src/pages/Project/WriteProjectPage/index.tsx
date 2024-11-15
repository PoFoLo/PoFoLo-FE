import * as S from '@/pages/Project/WriteProjectPage/styles';
import HeaderSection from '@/components/WriteProject/HeaderSection';
import TitleSection from '@/components/WriteProject/TitleSection';
import CategorySection from '@/components/WriteProject/CategorySection';
import DescriptionSection from '@/components/WriteProject/DescriptionSection';
import SkillSection from '@/components/WriteProject/SkillSection';
import LinkSection from '@/components/WriteProject/LinkSection';
import ImageSection from '@/components/WriteProject/ImageSection';
import { useState } from 'react';

export const WriteProjectPage = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [subCategoryValue, setSubCategoryValue] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [links, setLinks] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    category: false,
  });

  // 필수 입력 항목 유효성 검사 -> 에러 설정
  const validateFields = () => {
    setErrors({
      title: !title.trim() || title.length > 50,
      description: !description.trim(),
      category: !categoryValue || !subCategoryValue,
    });
  };

  // 조건을 만족하면 업로드 버튼 활성화
  const btnActive =
    title.trim().length > 0 &&
    !errors.title &&
    description.trim().length > 0 &&
    !!categoryValue &&
    !!subCategoryValue;

  // 업로드 버튼을 누르면 유효성 검사 실시 -> 에러 설정, 버튼이 활성화 되어있는 경우 업로드 처리 로직
  const handleUploadClick = () => {
    validateFields();

    if (btnActive) {
      const data = {
        isPrivate,
        title,
        categoryValue,
        subCategoryValue,
        description,
        skill,
        links,
        formData,
      };
      console.log('업로드 처리 로직', data);
    }
  };

  return (
    <S.Layout>
      <S.PortFolioLayout>
        <HeaderSection
          isPrivate={isPrivate}
          setIsPrivate={setIsPrivate}
          handleUploadClick={handleUploadClick}
          btnActive={btnActive}
        />
        <S.FormContainer>
          <TitleSection
            title={title}
            setTitle={setTitle}
            error={errors.title}
            setErrors={setErrors}
          />
          <CategorySection
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            subCategoryValue={subCategoryValue}
            setSubcategoryValue={setSubCategoryValue}
            error={errors.category}
            setErrors={setErrors}
          />
          <DescriptionSection
            description={description}
            setDescription={setDescription}
            error={errors.description}
            setErrors={setErrors}
          />
          <SkillSection skill={skill} setSkill={setSkill} />
          <LinkSection links={links} setLink={setLinks} />
          <ImageSection setFormData={setFormData} />
        </S.FormContainer>
      </S.PortFolioLayout>
    </S.Layout>
  );
};
