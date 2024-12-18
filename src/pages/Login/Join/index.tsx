import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { instance } from '@/apis/instance';
import { useResponsive } from '@/hooks/useResponsive';
import Navbar from '@/components/Layout/Navbar/Navbar';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import Checkbox from '@/components/Common/CheckBox';
import CategorySection from '@/components/FormField/CategorySection';
import * as S from '@/pages/Login/Join/styles';
import nextBlue from '@/assets/webps/Login/nextBlue.webp';
import nextWhite from '@/assets/webps/Login/nextWhite.webp';
import leftBlue from '@/assets/svgs/Login/leftBlue.svg';

export const JoinPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const categorySectionRef = useRef<HTMLDivElement>(null);
  const { kakao_id } = location.state || {};
  const { isPC, isPhone } = useResponsive();

  // Step
  const [step, setStep] = useState(1);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);

  // Step 1
  const [nickname, setNickname] = useState('');
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Step 2
  const [affiliation, setAffiliation] = useState('');
  const [affiliationPrivate, setAffiliationPrivate] = useState(false);

  // Step 3
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({ category: false });

  // UI
  const [hideIcon, setHideIcon] = useState(false);

  if (!kakao_id) {
    nav('/');
  }

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setError(false);
    setErrorMessage('');
    setIsDuplicateChecked(false);
  };

  const handleDuplicateCheck = async () => {
    const trimmedNickname = nickname.trim();
    if (!trimmedNickname) return;

    try {
      const response = await instance.post('/pofolo/users/nickname/', {
        nickname: trimmedNickname,
      });

      if (!response.data.is_available) {
        setIsDuplicate(true);
        setError(true);
        setErrorMessage('중복된 닉네임이에요');
      } else {
        setIsDuplicate(false);
        setError(false);
        setErrorMessage('');
      }
      setIsDuplicateChecked(true);
    } catch (error) {
      console.error('중복 확인 중 오류 발생:', error);
      setError(true);
    }
  };

  const handlePrivateCheckbox = () => {
    setAffiliationPrivate((prev) => !prev); // 상태 토글
  };

  // 단계 전환
  const handleNextStep = () => {
    if (step === 1) {
      if (!nickname.trim() || !isDuplicateChecked || isDuplicate) {
        setError(true);
        setErrorMessage('닉네임 중복확인을 완료해주세요.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!affiliation.trim()) return;
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // 회원가입
  const handleJoin = async () => {
    if (step === 3 && mainCategory && subCategory) {
      try {
        const requestData = {
          kakao_id,
          nickname: nickname.trim(),
          education: affiliation.trim(),
          education_is_public: !affiliationPrivate,
          main_field:
            mainCategory === '기획' ? 'plan' : mainCategory === '디자인' ? 'design' : 'develop',
        };

        const response = await instance.post('/pofolo/users/register/', requestData);

        if (response.status === 200) {
          console.log(response.data.message); // 성공 메시지
          nav('/home'); // /home 페이지로 이동
        }
      } catch (error) {
        console.error('회원가입 실패:', error);
        alert('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  // 바깥 클릭 감지
  const handleClickOutside = (event: MouseEvent) => {
    if (categorySectionRef.current && !categorySectionRef.current.contains(event.target as Node)) {
      setIsCategoryOpen(false);
      setIsSubCategoryOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Layout>
      <Navbar />
      <S.TopBar>
        <S.Join>회원가입</S.Join>
        <Button
          size={isPC ? 'medium' : 'small'}
          type={step === 3 && mainCategory && subCategory ? 'main' : 'sub'}
          onClick={handleJoin}
          disabled={step !== 3 || !mainCategory || !subCategory}
        >
          <p>가입하기</p>
        </Button>
      </S.TopBar>
      <S.StepContainer
        $isStep3={step === 3}
        $isCategoryOpen={isCategoryOpen}
        $isSubCategoryOpen={isSubCategoryOpen}
      >
        {step === 1 && (
          <>
            <S.Step>3 중 1단계</S.Step>
            <S.Title>
              <h2>사용할 닉네임을 정해주세요</h2>
            </S.Title>
            <S.Description>꼭 실명이 아니어도 괜찮아요</S.Description>
            <S.InputContainer>
              <S.InputWrapper>
                <Input
                  value={nickname}
                  onChange={handleNicknameChange}
                  error={error}
                  errorMessage={errorMessage}
                  placeholder="입력해주세요"
                  isDuplicated={true}
                  hideIcon={hideIcon}
                  setHideIcon={setHideIcon}
                />
                {!isDuplicateChecked && (
                  <S.DuplicationBtn>
                    <Button
                      size={isPhone ? 'small2' : 'small'}
                      type={!nickname.trim() ? 'inactive' : 'sub'}
                      onClick={handleDuplicateCheck}
                      disabled={!nickname.trim()}
                    >
                      중복확인
                    </Button>
                  </S.DuplicationBtn>
                )}
              </S.InputWrapper>
              <S.NextBtn
                $isSuccess={isDuplicateChecked && !isDuplicate}
                $isDisabled={!nickname.trim()}
                $isDuplicate={isDuplicate}
                onClick={
                  nickname.trim() && isDuplicateChecked && !isDuplicate ? handleNextStep : undefined
                }
              >
                <img
                  src={nickname.trim() && isDuplicateChecked && !isDuplicate ? nextWhite : nextBlue}
                  alt="next"
                />
              </S.NextBtn>
            </S.InputContainer>
          </>
        )}

        {step === 2 && (
          <>
            <S.Step>
              <img src={leftBlue} alt="prev" onClick={handlePrevStep} />3 중 2단계
            </S.Step>
            <S.Title>
              {!isPhone && <h2>학력이나 소속이 있다면 알려주세요</h2>}
              {isPhone && (
                <div>
                  <h2>학력이나 소속이 있다면</h2>
                  <h2>알려주세요</h2>
                </div>
              )}
            </S.Title>
            <S.Description>공개 여부는 언제든지 변경할 수 있어요</S.Description>
            <S.InputContainer>
              <S.InputWrapper>
                <Input
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  placeholder="00대학교 00학과"
                  hideIcon={true}
                  isPrivateCheckbox={true}
                />
                <S.PrivateCheckbox>
                  <Checkbox checked={affiliationPrivate} onChange={handlePrivateCheckbox} />
                  <p>비공개</p>
                </S.PrivateCheckbox>
              </S.InputWrapper>
              <S.NextBtn
                $isSuccess={affiliation.trim() !== ''}
                onClick={affiliation.trim() ? handleNextStep : undefined}
              >
                <img src={affiliation.trim() ? nextWhite : nextBlue} alt="next" />
              </S.NextBtn>
            </S.InputContainer>
          </>
        )}

        {step === 3 && (
          <>
            <S.Step>
              <img src={leftBlue} alt="prev" onClick={handlePrevStep} />
              마지막 단계
            </S.Step>
            <S.Title>
              {!isPhone && <h2>IT취업 희망 분야를 알려주세요</h2>}
              {isPhone && (
                <div>
                  <h2>IT취업 희망 분야를</h2>
                  <h2>알려주세요</h2>
                </div>
              )}
            </S.Title>
            <S.InputWrapper $isStep3={step === 3}>
              <div ref={categorySectionRef}>
                <CategorySection
                  showTitle={false}
                  mainCategory={mainCategory}
                  setMainCategory={setMainCategory}
                  subCategory={subCategory}
                  setSubcategory={setSubCategory}
                  error={errors.category}
                  setErrors={setErrors}
                  direction="column"
                  onCategoryToggle={() => setIsCategoryOpen((prev) => !prev)}
                  onSubCategoryToggle={() => setIsSubCategoryOpen((prev) => !prev)}
                />
              </div>
            </S.InputWrapper>
          </>
        )}
      </S.StepContainer>
    </S.Layout>
  );
};
