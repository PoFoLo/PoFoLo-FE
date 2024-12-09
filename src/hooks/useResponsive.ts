import { useEffect, useState } from 'react';

const breakpoints = {
  phone: '(max-width: 833px)',
  tab: '(min-width: 834px) and (max-width: 1199px)',
  pc: '(min-width: 1200px)',
};

export const useResponsive = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const phoneMedia = window.matchMedia(breakpoints.phone);
    const tabMedia = window.matchMedia(breakpoints.tab);
    const pcMedia = window.matchMedia(breakpoints.pc);

    const updateMatches = () => {
      setIsPhone(phoneMedia.matches);
      setIsTab(tabMedia.matches);
      setIsPC(pcMedia.matches);
    };

    updateMatches();

    phoneMedia.addEventListener('change', updateMatches);
    tabMedia.addEventListener('change', updateMatches);
    pcMedia.addEventListener('change', updateMatches);

    return () => {
      phoneMedia.removeEventListener('change', updateMatches);
      tabMedia.removeEventListener('change', updateMatches);
      pcMedia.removeEventListener('change', updateMatches);
    };
  }, []);

  return { isPhone, isTab, isPC };
};
