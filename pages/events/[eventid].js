import {Fragment} from 'react'
import {useRouter} from 'next/router'
import {getEventById} from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

export default function EventID(){
	const router = useRouter();
	const query = router.query.eventid
	const data = getEventById(query)
	if(!data){return(<EventContent><p>Error 404: No data found</p></EventContent>)}
	return(
		<Fragment>
			<EventSummary title={data.title}/>
			<EventLogistics date={data.date} address={data.location} image={data.image} imageAlt={data.title} />
			<EventContent>
				<p>{data.description}</p>
			</EventContent>
		</Fragment>
	)
}