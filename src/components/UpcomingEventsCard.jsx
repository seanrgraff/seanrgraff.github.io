import { LocationOn, OpenInNew } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import TGBImage from "../components/common/TGBImage";
import React from "react";
import useSWR from "swr";
import { useHeight } from "./Layout";

const calendarId =
  "5990ead3e9bc5836716e0dcf7dfff851ca522b6351f67680dde94618db464e04@group.calendar.google.com";
const url =
  `https://clients6.google.com/calendar/v3/calendars/${calendarId}/events?` +
  new URLSearchParams({
    calendarId: calendarId,
    singleEvents: true,
    timeZone: "America New_York",
    maxAttendees: 1,
    maxResults: 250,
    sanitizeHtml: true,
    timeMin: new Date().toISOString(), // current date
    timeMax: "2040-01-01T00:00:00-05:00", // very distant date
    key: "AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs",
  });

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useUpcomingEvents = () => {
  const { data, error } = useSWR(url, fetcher);

  let sortedData;

  if (data) {
    sortedData = data.items.sort(function (a, b) {
      var keyA = new Date(a.start.dateTime),
        keyB = new Date(b.start.dateTime);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  return { data: sortedData, isLoading: !error && !data, isError: error };
};

/**
 * Lists upcoming events with links to the
 * @returns upcoming events as an mui formatted table if url resolves properly; iframe otherwise.
 */
const UpcomingEventsCard = () => {
  const height = useHeight();
  return (
    <Box sx={{ my: 3, width: "100%" }} id="events">
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
            maxHeight: height,
            overflow: "auto",
          }}
        >
          <Typography sx={{ mt: 2 }} component="h3" variant="h5">
            See Us Live{" "}
          </Typography>
          <Button
            sx={{ my: 1, left: 0 }}
            variant="contained"
            href={`https://calendar.google.com/calendar/ical/${calendarId}/public/basic.ics`}
            target="_blank"
          >
            <Typography>Add To Calendar</Typography>
          </Button>
          <Divider />
          <UpcomingEvents />
        </Box>
        <TGBImage
          imgName="lantern"
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

const UpcomingEvents = () => {
  const { data: calendar, isLoading, isError } = useUpcomingEvents();

  if (isLoading) {
    return <CircularProgress />;
  } else if (isError) {
    return (
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=AGENDA&showPrint=0&showTabs=0&showCalendars=0&showNav=0&showTitle=0&src=5990ead3e9bc5836716e0dcf7dfff851ca522b6351f67680dde94618db464e04%40group.calendar.google.com&color=%23B39DDB&color=%23E4C441&color=%23616161&color=%230B8043&color=%23A79B8E&color=%23E67C73"
        style={{ border: "solid 1px #777", zIndex: 20 }}
        title="backup-calendar"
        width="380"
        height="400"
        frameborder="0"
        scrolling="no"
      ></iframe>
    );
  }

  return (
    <Table>
      <TableBody>
        {calendar.map((event) => {
          const start = new Date(event.start.dateTime);
          const end = new Date(event.end.dateTime);

          const startTime =
            start.getHours() -
            (start.getHours() >= 12 ? 12 : 0) +
            (start.getMinutes() > 0 ? ":" + start.getMinutes() : "") +
            (start.getHours() >= 12 && end.getHours() >= 12
              ? ""
              : start.getHours() >= 12
              ? "p"
              : "a");
          const endTime =
            end.getHours() -
            (end.getHours() >= 12 ? 12 : 0) +
            (end.getMinutes() > 0 ? ":" + end.getMinutes() : "") +
            (end.getHours() >= 12 ? "p" : "a");

          return (
            <TableRow key={event.id}>
              <TableCell sx={{ minWidth: 140 }}>
                <Typography>
                  {months[start.getMonth()]} {start.getDate()},{" "}
                  {start.getFullYear()}
                </Typography>
                <Typography>
                  {startTime}
                  {" - "}
                  {endTime}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>{event.summary}</Typography>
                <Typography>
                  {event?.location && (
                    <Button
                      target="_blank"
                      href={`https://www.google.com/maps/search/?api=1&query=${event.location}`}
                      variant="outlined"
                      startIcon={<LocationOn />}
                    >
                      Map
                    </Button>
                  )}
                  {event?.description &&
                    event.description.includes("odysee") && (
                      <Button
                        target="_blank"
                        href={`https://www.odysee.com/@TheGraffBrothers/${start.getFullYear()}${(
                          "0" +
                          (start.getMonth() + 1)
                        ).slice(-2)}${("0" + start.getDate()).slice(-2)}`}
                        variant="outlined"
                        startIcon={<OpenInNew />}
                      >
                        Watch Now
                      </Button>
                    )}
                </Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default UpcomingEventsCard;
