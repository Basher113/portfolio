
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  PdfContainer,
  ModalFooter,
} from './ResumeModal.styles';
import Button from '../ui/button/Button';
const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>My Resume</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <PdfContainer>
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            width="100%"
            height="100%"
          />
        </PdfContainer>
        
        <ModalFooter>
          <Button as="a" 
            href="/resume.pdf" 
            download="Basher_Kalim_Resume.pdf"
            variant="primary"
          >
            Download Resume
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ResumeModal;
