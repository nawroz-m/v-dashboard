import Grid from "@mui/material/Grid";
import WebsiteAnalytics from "../../components/WebsiteAnalytics";
import { WebAnalyticsType } from "../../constant/types/VariableTypes";
import SalesOverView from "../../components/SalesOverView";
import RevenueGenerated from "../../components/RevenueGenerated";

const WebAnalyticsData: Array<WebAnalyticsType> = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/sidebar-pic1.png",
    Name: "Trafic",
    properties: [
      {
        prod: "Session",
        number: "1.3K",
      },
      {
        prod: "Page Vie",
        number: "3.3K",
      },
      {
        prod: "Leads",
        number: "1.5K",
      },
      {
        prod: "Conversion",
        number: "4.3K",
      },
    ],
  },
  {
    label: "Bird",
    imgPath: "/sidebar-pic-2.png",
    Name: "Spending",
    properties: [
      {
        prod: "Session",
        number: "1.3K",
      },
      {
        prod: "Page Vie",
        number: "3.3K",
      },
      {
        prod: "Leads",
        number: "1.5K",
      },
      {
        prod: "Conversion",
        number: "4.3K",
      },
    ],
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/sidebar-pic-3.png",
    Name: "Reveniew source",
    properties: [
      {
        prod: "Session",
        number: "1.3K",
      },
      {
        prod: "Page Vie",
        number: "3.3K",
      },
      {
        prod: "Leads",
        number: "1.5K",
      },
      {
        prod: "Conversion",
        number: "4.3K",
      },
    ],
  },
];
const Home = () => {
  return (
    <>
      <div className="container">
        <Grid container sx={{ px: 1 }} className="flex-item space-between">
          <Grid lg={5.85} md={12} sm={12} sx={{ my: 2 }}>
            <WebsiteAnalytics data={WebAnalyticsData} />
          </Grid>
          <Grid
            lg={6}
            md={12}
            sm={12}
            sx={{ my: 2 }}
            // style={{ border: "1px solid blue" }}
          >
            <Grid container className="flex-item space-between">
              <Grid lg={5.86} md={5.86} sm={12}>
                <SalesOverView />
              </Grid>
              <Grid lg={5.86} md={5.86} sm={12}>
                <RevenueGenerated />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid container> */}
          <Grid lg={6} md={12} sm={12} style={{ border: "1px solid red" }}>
            first 2
          </Grid>
          <Grid lg={6} md={12} sm={12} style={{ border: "1px solid blue" }}>
            second 2
          </Grid>
          {/* </Grid> */}
          {/* <Grid container> */}
          <Grid lg={4} md={6} sm={12} style={{ border: "1px solid red" }}>
            first 3
          </Grid>
          <Grid lg={4} md={6} sm={12} style={{ border: "1px solid blue" }}>
            second 3
          </Grid>
          <Grid lg={4} md={6} sm={12} style={{ border: "1px solid red" }}>
            third 3
          </Grid>
          {/* </Grid> */}

          <Grid lg={4} md={6} sm={12} style={{ border: "1px solid blue" }}>
            first 4
          </Grid>
          <Grid lg={8} md={12} sm={12} style={{ border: "1px solid red" }}>
            second 4
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
