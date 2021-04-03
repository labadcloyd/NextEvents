import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function EventsPage(){
	const data = getAllEvents();
	const router = useRouter();

	function handleSearch(year, month){
		const searchPath = `/events/${year}/${month}`
		router.push(searchPath)
	}
	return(
		<Fragment>
			<EventSearch onSearch={handleSearch}></EventSearch>
			<EventList items={data} />
		</Fragment>
	)
}