// LeftPanel.tsx
import { Box, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description'; // resume icon

const LeftPanel = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        px: 2,
        py: 3,
      }}
    >
      {/* Top title */}
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        Evan's Room
      </Typography>

      <Typography>
        BASc Mechatronics Engineering (AI Specialization), University of Waterloo 2019-2024
      </Typography>


      {/* Bottom social icons */}
      <Box sx={{ mt: 'auto' }}>
        <Stack direction="row" spacing={2}>
          <IconButton color="inherit" href="https://github.com/e2hum" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/in/ehum" target="_blank">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="mailto:ehum7@hotmail.com">
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="./files/ehum_resume.pdf" target="_blank">
            <DescriptionIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default LeftPanel;
