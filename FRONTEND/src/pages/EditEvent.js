import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  console.log(data, "hello world");

  return <EventForm event={data.event} />;
};

export default EditEventPage;
