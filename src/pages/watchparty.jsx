import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import OdyseeVideoCard from "../components/OdyseeVideoCard";
import { useUpcomingEvents } from "../components/UpcomingEventsCard";

const WatchParty = () => {
  const { data, isError, isLoading } = useUpcomingEvents();

  if (isLoading) {
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  }
  if (isError) {
    return (
      <Layout>
        <Typography>Check back again later!</Typography>
      </Layout>
    );
  }

  const nextLivestreamEvent = data.find(
    (event) => event?.description && event.description.includes("odysee")
  );

  if (!nextLivestreamEvent) {
    return (
      <Layout>
        <Typography>
          No Livestream has been planned yet, check back again soon!
        </Typography>
      </Layout>
    );
  }
  const start = new Date(nextLivestreamEvent.start.dateTime);

  return (
    <Layout>
      <OdyseeVideoCard
        msg={null}
        url={`https://odysee.com/$/embed/@TheGraffBrothers:b/${start.getFullYear()}${(
          "0" +
          (start.getMonth() + 1)
        ).slice(-2)}${("0" + start.getDate()).slice(-2)}`}
      />
    </Layout>
  );
};

export default WatchParty;
