import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fingerprint from "@mui/icons-material/Fingerprint";
import SaveIcon from "@mui/icons-material/Save";

const MUIButton = () => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      {/* Basic Button */}
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>

      {/* Text Button */}
      <div>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>

      {/* Contained button */}
      <div>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </div>

      {/* Outlined button */}
      <div>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>

      {/* Color button */}
      <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </div>

      {/* Size button */}
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>

      {/* Buttons with icons and label */}
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>

      {/* Icon button */}
      <Stack direction="row" justifyContent="center" spacing={1}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>

      {/* Sizes */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>

      {/* Colors */}
      <Stack direction="row" justifyContent="center" spacing={1}>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </Stack>

      {/* Loading */}

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button loading variant="outlined">
            Submit
          </Button>
          <Button loading loadingIndicator="Loading…" variant="outlined">
            Fetch data
          </Button>
          <Button
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            Save
          </Button>
        </Stack>
        <Button
          fullWidth
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Full width
        </Button>
        <Button
          fullWidth
          loading
          loadingPosition="end"
          endIcon={<SaveIcon />}
          variant="outlined"
        >
          Full width
        </Button>
        <Stack direction="row" spacing={2}>
          <Button loading variant="outlined" loadingPosition="start">
            Submit
          </Button>
          <Button loading variant="outlined" loadingPosition="end">
            Submit
          </Button>
          <Button
            loading
            variant="outlined"
            loadingPosition="end"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MUIButton;
