import PropType from "prop-types";
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useHeight } from "../Layout";

const TGBImage = ({
  imgName,
  type = "jpg",
  sx = {},
  alt = "",
  width = "100%",
}) => {
  const height = useHeight();
  const theme = useTheme();
  const useMd = useMediaQuery(theme.breakpoints.down("md"));
  const useSm = useMediaQuery(theme.breakpoints.down("sm"));
  const img = require("../../images/" +
    imgName +
    (useMd ? "-md" : useSm ? "-sm" : "") +
    "." +
    type);

  return (
    <Box
      component="img"
      sx={{ ...sx, height: height, width: width }}
      alt={alt}
      src={img.default}
    />
  );
};

TGBImage.propTypes = {
  imgName: PropType.string.isRequired,
  alt: PropType.string,
  sx: PropType.object,
};

export default TGBImage;
