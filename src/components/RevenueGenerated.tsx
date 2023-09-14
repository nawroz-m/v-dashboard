import * as React from "react";
import Box from "@mui/material/Box";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

export default function RevenueGenerated() {
  return (
    <Box className="skin--bordered ">
      <Box sx={{ pt: 2, px: 2 }}>
        <HomeRepairServiceIcon className="repair-servic-icon" />
        <h6 className="text-lg text-h5 zero-p-m ">97.5k</h6>
        <span>Revenue Generated</span>
      </Box>

      <Box></Box>
    </Box>
  );
}
