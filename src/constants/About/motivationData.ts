import motive1 from '@/assets/webps/About/about1.webp';
import motive1Blue from '@/assets/webps/About/about1Blue.webp';
import motive2 from '@/assets/webps/About/about2.webp';
import motive2Blue from '@/assets/webps/About/about2Blue.webp';
import motive3 from '@/assets/webps/About/about3.webp';
import motive3Blue from '@/assets/webps/About/about3Blue.webp';

export const motivationData = [
  {
    image: motive1,
    overlayImage: motive1Blue,
    title: ['영감이 필요할 땐?', '다른 프로젝트를 탐색해보세요'],
    description: ['분야별 취준생들의 프로젝트를 살펴보면서', '새로운 아이디어와 자극을 받아보세요'],
    reverse: false,
  },
  {
    image: motive2,
    overlayImage: motive2Blue,
    title: ['언제 어디서든', '간편한 내 포트폴리오 관리'],
    description: [
      '회사/직무 맞춤 포트폴리오를 만들어보세요',
      '당신의 모든 프로젝트를 손쉽게 관리할 수 있습니다',
    ],
    reverse: true,
  },
  {
    image: motive3,
    overlayImage: motive3Blue,
    title: ['함께 도우며', '성장하는 취준생들의 이야기'],
    description: [
      '막막한 취준생활, 우리는 혼자가 아닙니다',
      '포폴로가 취업 준비의 부담을 덜어드릴게요',
    ],
    reverse: false,
  },
];
