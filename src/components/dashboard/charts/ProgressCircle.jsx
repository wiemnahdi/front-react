import { Box, } from "@mui/material";


const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(#0C6FA6 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, rgb(255,255,255,.8) ${angle}deg 360deg),
            rgb(255,255,255,.3)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
