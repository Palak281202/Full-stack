import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, Slider, Stack, Box } from "@mui/material";
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import classes from "./IntensitySelector.module.css";
import Happy from "./Emotions.jsx/Happy";
import Sad from "./Emotions.jsx/Sad";
import Angry from "./Emotions.jsx/Angry";
import Neutral from "./Emotions.jsx/Neutral";
import Content from "./Emotions.jsx/content";
import Awe from "./Emotions.jsx/Awe";

const theme = createTheme();

export default function IntensitySelector({ emotion }) {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme} className={classes.main}>
      <h2>
        {emotion === "Happy" && "Happiness ia a complex emotion"}{" "}
        {emotion === "Sad" && "Sadness ia a complex emotion"}
        {emotion === "Angry" && "Anger ia a complex emotion"}
        {emotion === "Content" && "Contentment ia a complex emotion"}
        {emotion === "Neutral" && "Neutrality ia a complex emotion"}
        {emotion === "Awe" && "Awe ia a complex emotion"}
      </h2>
      <p>Identifying your emotions is the first step to releasing them</p>
      <CssBaseline />
      <Box sx={{ width: 300, m: 5 }} className={classes.slider}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          className={classes.slider}
        >
          {/* <VolumeDown /> */}
          <p>Slightly {emotion}</p>
          <Slider
            value={value}
            onChange={handleChange}
            aria-label="Volume"
            className={classes.color}
          />
          {/* <VolumeUp /> */}
          <p>Very {emotion}</p>
        </Stack>
        <p className={classes.para}>
          The percentage {emotion} = {value}%
        </p>
        {emotion === "Happy" && <Happy />}
        {emotion === "Sad" && <Sad/>}
        {emotion === "Angry" && <Angry/>}
        {emotion === "Neutral" && <Neutral/>}
        {emotion === "Content" && <Content/>}
        {emotion === "Awe" && <Awe/>}
      </Box>
    </ThemeProvider>
  );
}
