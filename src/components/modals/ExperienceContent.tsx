import { Box, Card, CardContent, Typography, Chip } from "@mui/material";

const experiences = [
  {
    role: "Software Developer",
    company: "First Mile Technology",
    description:
      "I had the opporunity to develop FMT's first iteration of their \
      file uploading application targeted at supporting technicians in the film \
      industry who are handling extremely large files and would typically need to \
      deliver physical hard-drives of footage. This application implemented chunking \
      and multithreading processes so that the file could be split into many smaller files, \
      simultaneously uploaded and then reassembled at the target destination improving file \
      upload speed and the reliability of the uploads.",
    year: "Sept 2024 - May 2025",
    skills: ["Python", "AWS", "Start-Up"],
  },
  {
    role: "QA Automation Engineer",
    company: "Railz",
    description: "Working for the QA Automation team, I got to work heavily with Cypress and \
    learn the ins and out of front-end automation. I developed many scripts that would simulate \
    typical user workflows for the Railz Dashboard to ensure that no matter where or what order \
    the user navigated the interface, it would always produce an expected and repeatable result. \
    I also got the chance to develop many POST APIs for making requests to retrieve and store \
    new client data based on the information gathered from the Railz Dashboard.",
    year: "May - August 2023",
    skills: ["Cypress", "Postman", "REST API", "Start-Up", "QA"],
  },
  {
    role: "Mechatronics Engineer",
    company: "OtO Lawn",
    description: "During my time at OtO, I got to experience the many teams that work together to \
    create a smart sprinkler device controlled through a mobile app. As part of the electrical team, \
    I contributed to the development of a battery cycler PCB to run accelerated tests on the device's \
    battery to ensure the capacity remained sufficient after excessive charging and discharging. \
    For the mechanical team, I constructed a thermal chamber to observe the effects extreme \
    temperatures will have on a device over time. With the software team, I analyzed and developed \
    scripts to collect and understand vast amounts of user data and condense it into understandable \
    metrics for the team to review.",
    year: "January - April 2023",
    skills: ["Python", "SolidWorks", "MySQL", "Javascript"],
  },
  {
    role: "Software Developer",
    company: "Telus Health",
    description: "As a Full Stack Developer, I had the opportunity to learn and interact with \
    TELUS Health's web application known as PS Suite. This application helps to streamline to \
    process for healthcare professionals to meet with, prescribe and keep track of patients \
    information all without ever having to make an in-person appointment. In my role, I reworked \
    the performance test scripts through Jmeter to ensure testing was accurate, efficient and \
    provided meaningful reports back to the user.",
    year: "May - August 2022",
    skills: ["Oracle", "PostgreSQL", "Java"],
  },
  {
    role: "Full Stack Web Developer",
    company: "Imagine Communications",
    description: "As a Full Stack Web Developer for Imagine Communications, I had the opportunity \
    to join the team known as the Dropframers, an agile team working on the front and backend services \
    known as Versio Content Portal and Nexio Motion respectively. Throughout the term I successfully \
    implemented new Content Portal features such as adding new shortcuts and implementing authenticated \
    automated tests as well as addressed many existing and newfound bugs in both the front and backend.",
    year: "September - December 2021",
    skills: ["Typescript", "pgAdmin", "C#"],
  },
  {
    role: "Web Developer",
    company: "University of Waterloo",
    description: "In this position, I worked with a team to develop a citizen science-based web game known \
    as GoFigure. Players are tasked to search for rhetorical figures in everyday text then input them in \
    the game where they can then annotate them. The data collected by the players will be reviewed by \
    moderators which, upon approval, get added to The Rhetoricon Database for research analysis. \
    In my role, I was tasked with building APIs for sending data from the website to the database and \
    vice versa, as well as designing the UI for players to be able to interact with the game.",
    year: "January - April 2021",
    skills: ["Golang", "MySQL", "React", "Typescript", "Next.js"],
  },
];

const ExperienceContent = () => (
  <Box sx={{ position: 'relative', ml: '0px' }}>
    {/* Vertical timeline line */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '20px',
        width: '4px',
        bgcolor: '#1976d2',
        zIndex: 0,
      }}
    />

    {experiences.map((exp, index) => (
      <Box key={index} sx={{ position: 'relative', display: 'flex', mb: 6 }}>
        {/* Dot (absolutely positioned at same `left` as the line) */}
        <Box
          sx={{
            position: 'absolute',
            left: '15px', // center the 16px dot on the 4px line at 20px
            top: '12px',
            width: '16px',
            height: '16px',
            backgroundColor: '#1976d2',
            borderRadius: '50%',
            border: '3px solid white',
            zIndex: 2,
          }}
        />

        {/* Card container with left margin to avoid the line/dot */}
        <Box sx={{ ml: '50px', flex: 1 }}>
          <Card sx={{ padding: 2, boxShadow: 4 }}>
            <Typography variant="h6">{exp.role}</Typography>
            <Typography variant="subtitle2" color="text.primary" mb={1}>
              {exp.company}
            </Typography>
            <CardContent sx={{ padding: 0 }}>
              <Typography variant="body2" color="text.secondary">
                {exp.description}
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontStyle: 'italic', display: 'block', marginTop: 1 }}
              >
                {exp.year}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
                {exp.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    ))}
  </Box>
);

export default ExperienceContent;