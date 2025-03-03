/* eslint-disable no-unused-expressions */
import axios from "axios";
import { useEffect, useState } from "react";

const usePostEvents = () => {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const clearError = (err = "all") => {
    err === "all" && setError(null);
    // Clear one items error?
  };

  const clearStatus = (statusArg = "all") => {
    statusArg === "all" && setStatus(null);
    // Clear one item's status
  };

  const postFunction = (formData) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/events/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setStatus("success");
          setEventData(null);
          setError(null);
        } else {
          setStatus("error");
          setError(response.data);
        }
      })
      .catch((Error) => {
        switch (Error.code) {
          case "ERR_NETWORK":
            setError({ axios: Error.message });
            setStatus("error");
            break;
          case "ERR_BAD_REQUEST":
            if (Error.response) {
              if (Error.response.status === 404) {
                setError({ axios: "Cannot post the event to the server." });
              } else {
                setError({ event: Error.response.data });
              }
            } else {
              setError({ axios: "Problem contacting the server!" });
            }
            setStatus("error");
            break;
          default:
            setStatus("error");
            setError({ axios: "Please try again later." });
            break;
        }
      });
  };

  useEffect(() => {
    if (eventData) {
      const formData = new FormData();

      formData.append("name", eventData.name);
      formData.append("about", eventData.about);
      formData.append("link", eventData.link);
      formData.append("location", eventData.location);
      formData.append("mode", eventData.mode);
      formData.append("city", eventData.city);
      formData.append("country", eventData.country);
      formData.append("date", eventData.date);
      formData.append("start_time", eventData.start_time);
      formData.append("end_time", eventData.end_time);
      formData.append("poster", eventData.poster);
      formData.append("chapter_id", eventData.chapter);

      if (eventData.category_name) {
        axios
          .post(
            `${process.env.REACT_APP_API_BASE_URL}/events-categories/`,
            JSON.stringify({ name: eventData.category_name }),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.status === 200 || response.status === 201) {
              formData.append("category_id", response.data.id);
              postFunction(formData);
            }
          })
          .catch(() => {
            setError({ server: "Problem creating the new event category!" });
            setStatus("error");
          });
      } else {
        formData.append("category_id", eventData.category);
        postFunction(formData);
      }
    }
  }, [eventData]);

  return { setEventData, error, clearError, status, clearStatus };
};

export default usePostEvents;
