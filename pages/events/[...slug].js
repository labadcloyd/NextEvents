import {useRouter} from 'next/router'
import {getFilteredEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { Fragment } from 'react';
import Button from '../../components/ui/button'

export default function FilteredEventsPage(){
	const router = useRouter();
	const filteredQuery = router.query.slug;
	if(!filteredQuery){
		return(
			<p className={'center'}>Loading...</p>
		)
	}
	const numYear = parseInt(filteredQuery[0]) 
	const numMonth = parseInt(filteredQuery[1]) 

	if(isNaN(numYear)||isNaN(numMonth)||numYear>2030||numYear<2021||numMonth>12||numMonth<1){
		return(
			<div className={'center'}><p>Invalid filters, please adjust your values</p><Button link={'/events'}>Show All Events</Button></div>
		)
	}
	const events = getFilteredEvents({year:numYear,month:numMonth})
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