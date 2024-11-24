import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControlPanelContainer = styled.div`
  height: 7.8rem;
  margin-top: 8.8rem;
  margin-bottom: 2.6rem;
`;

export const FloatingBtnContainer = styled.div`
  position: fixed; /* 화면에 고정 */
  bottom: 8.6rem; /* 화면 하단에서 2rem 간격 */
  right: 6.4rem; /* 화면 오른쪽에서 2rem 간격 */
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.2rem;
  justify-content: center;
`;

export const FloatingBtnBody = styled.div`
  display: flex;
  width: 131.2rem;
  height: 6.4rem;
  justify-content: flex-end;
  align-items: center;
  z-index: 20;
`;
