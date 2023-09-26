import {
  Box,
  Divider,
  TextField,
  Button,
  FormControl,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import TGBImage from "../components/common/TGBImage";
import { useHeight } from "./Layout";

const url =
  "//thegraffbrothers.us21.list-manage.com/subscribe/post?u=d5ab5e5be98d1fd48c4970ed6&amp;id=b8445ba216";

const MailingListCard = () => {
  const height = useHeight();
  return (
    <Box sx={{ my: 3, width: "100%" }} id="mailing">
      <Box
        sx={{
          position: "relative",
          minHeight: height,
          maxHeight: height,
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            minHeight: height,
            maxHeight: height,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ my: 2 }} component="h2" variant="h5">
            Join our Mailing List
          </Typography>
          <Divider />
          <Box
            sx={{
              height: 90,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <EmailForm
                  subscribe={subscribe}
                  status={status}
                  message={message}
                />
              )}
            />
          </Box>
          <Typography sx={{ my: 2 }} component="h2" variant="h5">
            Book us for a gig
          </Typography>
          <Typography component="h2" variant="h5">
            booking@thegraffbrothers.com
          </Typography>
        </Box>
        <TGBImage
          imgName="hdg_guitar"
          sx={{
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            opacity: 0.4,
            mr: 2,
          }}
          height={height}
        />
      </Box>
    </Box>
  );
};

const EmailForm = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
    setEnableSubmit(isValidEmail(event.target.value));
  };

  const handleButtonClick = () => {
    console.log(email);
    subscribe({ EMAIL: email });
  };

  if (status === "sending") {
    return <LinearProgress />;
  } else if (status === "error") {
    return <Typography color="error">{message}</Typography>;
  } else if (status === "success") {
    return <Typography>{message}</Typography>;
  }

  return (
    <FormControl fullWidth required>
      <TextField
        label="Your Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={handleEmailInputChange}
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        disabled={!enableSubmit}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default MailingListCard;
