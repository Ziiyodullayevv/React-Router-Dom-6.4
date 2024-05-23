import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  //events apidan malumot olib kelish uchun:
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
