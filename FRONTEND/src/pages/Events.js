import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

function EventsPage() {
  //events apidan malumot olib kelish uchun:
  const data = useLoaderData();
  const { events } = data;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        <EventsList events={events} />
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// EventsPage loader:
export const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({ events: loadEvents() });
};
