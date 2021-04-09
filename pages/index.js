import Head from "next/head";
import EventList from '../components/events/event-list'
import {getAllEvents, getFeaturedEvents} from '../helper/api-utils'
import NewsletterRegistration from '../components/input/newsletter-registration';

export default function Home(props) {
  
  return (
    <div>
      <NewsletterRegistration />
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