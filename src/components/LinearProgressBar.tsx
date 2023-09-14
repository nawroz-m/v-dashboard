import { Box, LinearProgress } from "@mui/material";

const LinearProgressBar = (props: any) => {
  return (
    <Box sx={{ mt: 2.66 }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          {...props}
          color="primary"
          sx={{ py: 0.2, borderRadius: 1 }}
        />
      </Box>
    </Box>
  );
};

export default LinearProgressBar;
