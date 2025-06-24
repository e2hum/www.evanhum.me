import {
  Box,
  Typography,
} from "@mui/material";

const AboutContent = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
    <Typography variant="body1" gutterBottom>
      Hi there, thanks for stopping by. I've thought a lot about how to make an
      engaging portfolio and was thrilled to come up with an idea to showcase my
      experience and also combine some of my other hobbies and interests as
      well!
    </Typography>
    <Typography variant="body1" gutterBottom>
      I graduated with a degree in Mechatronics Engineering from the University
      of Waterloo, but really enjoyed the software industry so as of right now I
      have 2 years of experience in various software positions at 6 different
      companies. Currently, I am most experienced with Python and React as well
      as a variety of database management tools such as MySQL, PostgreSQL,
      Firebase and Oracle but am trying to learn more Machine Learning through
      PyTorch!
    </Typography>
    <Typography variant="body1" gutterBottom>
      Outside of the software industry I love to play guitar, both acoustic and
      electric and I'm hoping to be able to record something soon to be used as
      some nice relaxing background music for the site. Recently I've been
      discovering the intracies of digital art and had lots of fun coming up
      with the pixel art designs for this website. If you want to see more of my
      art, click on the posters!
    </Typography>
  </Box>
);

export default AboutContent;
