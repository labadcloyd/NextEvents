import Head from "next/head";
import EventList from '../components/events/event-list'
import {getAllEvents, getFeaturedEvents} from '../helper/api-utils'

export default function Home(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    }
  }
}