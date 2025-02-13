import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MUITypography = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      {/* Headings */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3" component="h2">
        h3 Heading
      </Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* Subtitles */}
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      {/* Body */}
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>

      {/* Buttons */}
      <Typography variant="button" display="block">
        Button text
      </Typography>

      {/* Captions */}
      <Typography variant="caption" display="block">
        Caption
      </Typography>

      {/* Overline */}
      <Typography variant="overline">Overline</Typography>
    </Box>
  );
};

export default MUITypography;
