import {useRouter} from 'next/router'
import {getFilteredEvents} from '../../helper/api-utils'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { Fragment } from 'react';
import Button from '../../components/ui/button'

export default function FilteredEventsPage(props){
	const router = useRouter();
	const {events} = props
	if(!events|| events.length===0){
		return(
			<div className={'center'}><p >No events found</p><Button link={'/events'}>Show All Events</Button></div>
		)
	}
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

export async function getServerSideProps(context){
	const filteredQuery = context.params.slug
	const numYear = parseInt(filteredQuery[0]) 
	const numMonth = parseInt(filteredQuery[1]) 

	if(isNaN(numYear)||isNaN(numMonth)||numYear>2030||numYear<2021||numMonth>12||numMonth<1){
		return{
			notFound:true
		}
	}
	const events = await getFilteredEvents({year:numYear,month:numMonth})
	return{
		props:{
			events:events
		}
	}
}