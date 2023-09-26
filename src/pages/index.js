import React from "react";
import { Box, Link } from "@mui/material";
import UpcomingEventsCard from "../components/UpcomingEventsCard";
import MailingListCard from "../components/MailingListCard";
import OdyseeVideoCard from "../components/OdyseeVideoCard";
import TGBImage from "../components/common/TGBImage";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Box sx={{ width: "100%", opacity: 0.2 }}>
        <TGBImage imgName="matt-tp" type="png" width="50%" />
        <TGBImage imgName="sean-tp" type="png" width="50%" />
      </Box>
      <MailingListCard />
      <UpcomingEventsCard />
      <OdyseeVideoCard />
    </Layout>
  );
};

export default IndexPage;
