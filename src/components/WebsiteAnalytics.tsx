import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Grid } from "@mui/material";
import { WebAnalyticsType } from "../constant/types/VariableTypes";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const WebsiteAnalytics = (props: {
  data: Array<WebAnalyticsType>;
  options?: string;
}) => {
  const datas = props.data;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#7367F0",
          borderRadius: "5px",
          p: 1,
          color: "white",
        }}
      >
        <div style={{ marginLeft: "89%" }}>
          {datas.map((steps, idx) => {
            return (
              <>
                <FiberManualRecordIcon
                  sx={{
                    color: `${activeStep == idx ? "white" : "#3F3598"}`,
                    fontSize: "14px",
                  }}
                  // fontSize="small"
                  onClick={() => {
                    setActiveStep(idx);
                  }}
                />
              </>
            );
          })}
        </div>

        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {datas.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Grid
                    container
                    sx={{ px: 2, py: 0.5, alignItems: "center" }}
                    wrap="nowrap"
                  >
                    <Grid md={8} sm={10}>
                      <div>
                        <h5 className="web-analytics-header">Web Analytics</h5>
                        <p style={{ margin: "4px 0px 4px 0px" }}>
                          Total 28.5% Conversion Rate
                        </p>
                      </div>

                      <p style={{ margin: "20px 0px 5px 0px" }}>{step.Name}</p>
                      <Grid container sx={{ my: 0, py: 0 }}>
                        {step &&
                          step.properties.map((property, idx) => {
                            return (
                              <>
                                <Grid md={6} xs={6} sx={{ my: 1.5 }} key={idx}>
                                  <span className="web-analytics-rates">
                                    {property.number}
                                  </span>
                                  {property.prod}
                                </Grid>
                              </>
                            );
                          })}
                      </Grid>
                    </Grid>
                    <Grid md={3} sm={2} sx={{ my: 0, py: 0 }}>
                      <img
                        style={{ width: "154px" }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    </Grid>
                  </Grid>
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </>
  );
};

export default WebsiteAnalytics;
