import * as S from '@/pages/Project/WriteProjectPage/styles';
import TextArea from '@/components/Common/TextArea';
import Input from '@/components/Common/Input';
import Button from '@/components/Common/Button';
import CheckBox from '@/components/Common/CheckBox';
import SelectField from '@/components/WriteProject/SelectField';
import AddLink from '@/components/WriteProject/AddLink';
import ImageUpload from '@/components/WriteProject/UploadImage';
import { useState } from 'react';

export const WriteProjectPage = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [subCategoryValue, setSubCategoryValue] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [links, setLinks] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [errors, setErrors] = useState({
    title: false,
    content: false,
    category: false,
  });
  const [errorMessages, setErrorMessages] = useState<{ title: string; content: string }>({
    title: '',
    content: '',
  });

  // 공개/비공개 체크박스
  const toggleCheckBox = () => {
    setIsPrivate((prev) => !prev);
  };

  // 제목 입력
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    setErrors((prev) => ({
      ...prev,
      title: newTitle.length > 50,
    }));
    setErrorMessages((prev) => ({
      ...prev,
      title: newTitle.length > 50 ? '제목은 50자 이하로 입력해주세요.' : '',
    }));
  };

  // 분야 선택
  const handleCategoryChange = () => {
    setErrors((prev) => ({
      ...prev,
      category: false,
    }));
  };

  // 소개 입력
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    setErrors((prev) => ({
      ...prev,
      content: false,
    }));
    setErrorMessages((prev) => ({
      ...prev,
      content: '',
    }));
  };

  // 주요 스킬 입력
  const handleSkillChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkill(e.target.value);
  };

  // 필수 입력 항목 유효성 검사
  const validateFields = () => {
    setErrors({
      title: !title.trim() || title.length > 50,
      content: !content.trim(),
      category: !categoryValue || !subCategoryValue,
    });

    setErrorMessages((prev) => ({
      ...prev,
      title: !title.trim()
        ? '필수 입력 항목입니다.'
        : title.length > 50
          ? '제목은 50자 이하로 입력해주세요.'
          : '',
      content: !content.trim() ? '필수 입력 항목입니다.' : '',
    }));
  };

  // 조건을 만족하면 업로드 버튼 활성화
  const btnActive =
    title.trim().length > 0 &&
    content.trim().length > 0 &&
    !errors.title &&
    !errors.content &&
    categoryValue &&
    subCategoryValue;

  // 업로드 버튼을 누르면 유효성 검사 실시 -> 에러 설정, 버튼이 활성화 되어있는 경우 업로드 처리 로직
  const handleUploadClick = () => {
    validateFields();

    if (btnActive) {
      const data = {
        isPrivate,
        title,
        categoryValue,
        subCategoryValue,
        content,
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
        <S.HeaderContainer>
          <S.HeaderText>새 프로젝트</S.HeaderText>
          <S.PrivateCheckBox>
            <CheckBox checked={isPrivate} onChange={toggleCheckBox} />
            비공개
          </S.PrivateCheckBox>
          <Button size="medium" type={btnActive ? 'main' : 'inactive'} onClick={handleUploadClick}>
            업로드
          </Button>
        </S.HeaderContainer>
        <S.FormContainer>
          <S.SectionContainer>
            <S.SectionTitle>제목</S.SectionTitle>
            <Input
              value={title}
              onChange={handleTitleChange}
              error={errors.title}
              errorMessage={errorMessages.title}
              placeholder="제목을 입력하세요"
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.SectionTitle>분야</S.SectionTitle>
            <SelectField
              categoryValue={categoryValue}
              onChangeCategory={(value) => {
                setCategoryValue(value);
              }}
              subCategoryValue={subCategoryValue}
              onChangeSubCategory={(value) => {
                setSubCategoryValue(value);
                handleCategoryChange();
              }}
              error={errors.category}
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.SectionTitle>소개</S.SectionTitle>
            <TextArea
              value={content}
              onChange={handleContentChange}
              error={errors.content}
              errorMessage={errorMessages.content}
              rows={3}
              placeholder="소개를 입력하세요"
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.SectionTitle>주요 스킬</S.SectionTitle>
            <TextArea
              value={skill}
              onChange={handleSkillChange}
              rows={1}
              placeholder="주요 스킬을 입력하세요"
            />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.SectionTitle>링크</S.SectionTitle>
            <AddLink links={links} onChangeLink={(value) => setLinks(value)} />
          </S.SectionContainer>
          <S.SectionContainer>
            <S.SectionTitle>사진</S.SectionTitle>
            <ImageUpload onFormDataChange={setFormData} />
          </S.SectionContainer>
        </S.FormContainer>
      </S.PortFolioLayout>
    </S.Layout>
  );
};
