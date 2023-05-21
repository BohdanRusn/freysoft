import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import ChartBar from "./components/Chart";

function Analytics() {
  const styles = useStyles();
  const [year, setYear] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box className={styles.header}>
        <Typography className={styles.analytics}>Analytics</Typography>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
          }}
          size="small"
        >
          <InputLabel id="open-select-label">Year</InputLabel>
          <Select
            labelId="open-select-label"
            id="open-select"
            open={open}
            onClose={handleToggleOpen}
            onOpen={handleToggleOpen}
            value={year}
            label="Year"
            onChange={handleChange}
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ChartBar />
    </Box>
  );
}

export default Analytics;
