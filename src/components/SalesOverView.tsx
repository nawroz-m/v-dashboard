import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkIcon from "@mui/icons-material/Link";
import LinearProgressBar from "./LinearProgressBar";

export default function SalesOverView() {
  const [progress, setProgress] = React.useState(62.2);

  return (
    <Box
      sx={{
        p: 2,
      }}
      className="skin--bordered "
    >
      <Box sx={{ pb: 2 }}>
        <span className="flex-item space-between align-center">
          <span className="text-disabled text-sm">Sales overiew</span>
          <span className="text-success">+18.1%</span>
        </span>
        <h4 className="text-h4 ">$42.5k</h4>
      </Box>
      <Box>
        <div className="flex-item space-between align-center">
          <div>
            <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
              {/* <ShoppingCartIcon color="primary" /> */}
              <span className="shopping-card-icon">
                <ShoppingCartIcon
                  color="primary"
                  sx={{
                    width: "19px",
                    mt: 0.4,
                    px: 0.7,
                  }}
                />
              </span>
              <span>Order</span>
            </Box>
            <h5 className="text-h5">{progress}%</h5>
            <span className="text-disabled ">6,400</span>
          </div>

          <div>
            <hr></hr>
            <span className="hr-vs">vs</span>
            <hr></hr>
          </div>
          <div>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Visits</span>
              <span className="link-icon">
                <LinkIcon
                  color="secondary"
                  sx={{
                    transform: "rotate(120deg)",
                    width: "19px",
                    mt: 0.4,
                    px: 0.7,
                  }}
                />
              </span>
            </Box>
            <h5 className="text-h5">{100 - progress}%</h5>
            <span className="text-disabled">6,400</span>
          </div>
        </div>

        <LinearProgressBar value={progress} />
      </Box>
    </Box>
  );
}
