import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { Fragment } from 'react';

export default function EventsPage(){
	const data = getAllEvents();
	return(
		<Fragment>
			<EventSearch></EventSearch>
			<EventList items={data} />
		</Fragment>
	)
}