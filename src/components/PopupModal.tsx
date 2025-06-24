import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

type PopupModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
};

const PopupModal = ({ open, onClose, title, content }: PopupModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          backgroundColor: '#1d1d2e',
          border: '2px solid white',
          fontFamily: "'VT323', monospace",
        },
      }}
    >
      <DialogTitle sx={{ fontSize: '2rem' }}>{title}</DialogTitle>
      <DialogContent dividers sx={{ fontSize: '1.2rem' }}>
        {content}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            fontFamily: "'VT323', monospace",
            color: 'white',
            border: '1px solid white',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupModal;
