import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import spicetree from "../../assets/images/spicetree.jpg";
import rover from "../../assets/images/rover.jpg";
import roverDemo from "../../assets/videos/rescue_robot.mp4";
import pokemonImages from "../../assets/images/pokemon-images.png";
import pokemonTestResults from "../../assets/images/pokemon-test-results.png";
import newsApp from "../../assets/images/news-app.png";
import newsAppDemo from "../../assets/images/news-app-ai.png";

const projects = [
  {
    title: "SpiceTree",
    description:
      "An automatic spice dispenser that stores up to 24 ingredients measuring with an accuracy \
    of 1/4 teaspoon controlled through touch screen or voice activation.",
    image: spicetree,
    skills: [
      "Python",
      "Machine Learning",
      "SolidWorks",
      "Electronics Prototyping",
    ],
    link: "https://example.com/fileshare",
    color: "#77DD77",
  },
  {
    title: "Mars Rover",
    description:
      "An autonomous vehicle designed to traverse a spiral course avoiding obstructions \
    and difficult terrain such as sand, rocks, and vertical inclines.",
    image: rover,
    skills: ["Arduino", "SolidWorks", "Electronics Assembly"],
    link: roverDemo,
    color: "#AD6242",
  },
  {
    title: "Pokemon Image Classifier",
    description:
      "An intro to PyTorch using a Convolutional Neural Network. Using a dataset of 7000 images, \
      after 5 epochs the network had a confidence interval of 95%. The Demo showcases the results of \
      5 images pulled from google to test against.",
    image: pokemonImages,
    skills: ["PyTorch", "Machine Learning"],
    link: pokemonTestResults,
    color: "#FAA0A0",
  },
  // {
  //   title: "Playing Card Classifier",
  //   description: "Experimenting with training a Pytorch model to learn from a dataset without \
  //   overfitting, then analyze a new set of playing cards and correctly identify their suit and number.",
  //   image: "/images/weather.png",
  //   skills: ["PyTorch", "Machine Learning"],
  //   link: "https://example.com/weather",
  //   color: "#DAB1DA",
  // },
  {
    title: "News App With AI Assistant",
    description: "Developed a React webpage that uses a news-api to collect newly published articles \
    and organize them by category, and incorporated an AI chat box to ask questions about any of the \
    articles that have been found.",
    image: newsApp,
    skills: ["React", "REST APIs", "Node.js", "OpenRouter.ai"],
    link: newsAppDemo,
  },
];

const ProjectsContent = () => (
  <Box sx={{ padding: 3 }}>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "3px solid",
              borderColor: project.color,
              boxShadow: 6,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: "cover" }}
            />

            {/* Make this a vertical flex container */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Typography variant="h6" color={project.color} gutterBottom>
                {project.title}
              </Typography>

              {/* Allow this to grow and push the rest down */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ flexGrow: 1, mb: 2 }}
              >
                {project.description}
              </Typography>

              {/* Bottom area: Tags + Buttons */}
              <Box sx={{ mt: "auto" }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {project.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  {project.link && (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      endIcon={<LaunchIcon />}
                      href={project.link}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ProjectsContent;
