import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useHeight } from "./Layout";

const OdyseeVideoCard = ({
  msg = "Check out our Content",
  url = "https://odysee.com/$/embed/@TheGraffBrothers:b?feature=latest",
}) => {
  const height = useHeight();
  return (
    <Box sx={{ my: 3, width: "100%" }} id="video">
      {msg && (
        <>
          <Typography sx={{ mb: 2 }} component="h2" variant="h5">
            {msg}
          </Typography>
          <Divider />
        </>
      )}
      <iframe
        id="odysee-iframe"
        title="odysee-vids"
        width="100%"
        height={height}
        src={url}
        allowFullScreen
      />
    </Box>
  );
};

export default OdyseeVideoCard;
