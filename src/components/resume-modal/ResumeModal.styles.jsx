import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.dark ? '#1a1a1a' : '#ffffff'};
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.dark ? '#262626' : '#e5e7eb'};
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.dark ? '#ffffff' : '#111827'};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: ${props => props.theme.dark ? '#9ca3af' : '#6b7280'};
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.dark ? '#262626' : '#f3f4f6'};
    color: ${props => props.theme.dark ? '#ffffff' : '#111827'};
  }
`;

export const PdfContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 0;

  iframe {
    border: none;
    background-color: #f5f5f5;
  }
`;

export const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${props => props.theme.dark ? '#262626' : '#e5e7eb'};
  display: flex;
  justify-content: flex-end;
`;


