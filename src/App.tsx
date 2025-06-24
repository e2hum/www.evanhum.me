import { useEffect, useState } from "react";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import RoomScene from "./components/RoomScene";
import PopupModal from "./components/PopupModal";
import ExperienceContent from "./components/modals/ExperienceContent";
import ProjectsContent from "./components/modals/ProjectsContent";
import AboutContent from "./components/modals/AboutContent";
import ArtworkContent from "./components/modals/ArtworkContent";
import "./App.css";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    function updateScale() {
      const scale = Math.min(window.innerWidth / 550, window.innerHeight / 550);
      document.documentElement.style.setProperty("--scale", scale.toString());
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleRoomItemClick = (target: string) => {
    setOpenModal(target);
  };
  const handleCloseModal = () => {
    setOpenModal(null);
  }

  const renderModalContent = (modal: string | null) => {
    switch(modal) {
      case 'Experience':
        return <ExperienceContent />
      case 'Projects':
        return <ProjectsContent />
      case 'About':
        return <AboutContent />
      case 'Artwork':
        return <ArtworkContent />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="background-stars" />
      <Grid
        container
        sx={{
          height: "100vh",
          width: "100vw",
          flexDirection: { xs: "column", sm: "row" },
          overflow: "hidden",
        }}
      >
        <Grid size={{ xs: 12, sm: 3 }} sx={{ height: "100%" }}>
          <LeftPanel />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoomScene onItemClick={handleRoomItemClick} />
        </Grid>

        <Grid size={{ xs: 12, sm: 3 }} sx={{ height: "100%" }}>
          <RightPanel onLabelClick={handleRoomItemClick} />
        </Grid>
      </Grid>

      <PopupModal
        open={openModal !== null}
        onClose={handleCloseModal}
        title={openModal || ""}
        content={renderModalContent(openModal)}
      />
    </ThemeProvider>
  );
}

export default App;
