import {getAllEvents} from '../../helper/api-utils'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { Fragment } from 'react';
import {useRouter} from 'next/router'

export default function EventsPage(props){
	const router = useRouter();
	const {events} = props

	function handleSearch(year, month){
		const searchPath = `/events/${year}/${month}`
		router.push(searchPath)
	}
	return(
		<Fragment>
			<EventSearch onSearch={handleSearch}></EventSearch>
			<EventList items={events} />
		</Fragment>
	)
}
export async function getStaticProps(){
	const allEvents = await getAllEvents();
	return{
		props:{
			events: allEvents
		}
	}
}