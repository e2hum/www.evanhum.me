import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

type RightPanelProps = {
  onLabelClick: (label: string) => void;
};

const RightPanel = ({ onLabelClick }: RightPanelProps) => {
  const labels = ["Experience", "Projects", "About"];

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        px: 2,
        py: 3,
      }}
    >
      {/* Top title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Welcome
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Click items in the room to explore or use the menu below:
      </Typography>

      <List sx={{ width: "100%", maxWidth: 300 }}>
        {labels.map((label) => (
          <ListItemButton
            key={label}
            onClick={() => onLabelClick(label)}
            sx={{
              borderRadius: 1,
              mb: 1,
              backgroundColor: "transparent",
            }}
          >
            <ListItemText
              primary={label}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  },
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default RightPanel;
