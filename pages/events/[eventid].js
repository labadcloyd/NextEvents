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
	const {title, date, location, image, description, id} = data
	const readableDate = new Date(date).toLocaleDateString('en-US', {day:'numeric', month:'long', year:'numeric' }) 
	if(!data){
		return(
			<p>Error 404: No data found</p>
		)
	}
	return(
		<Fragment>
			<EventSummary title={title}/>
			<EventLogistics date={readableDate} address={location} image={image} imageAlt={title} />
			<EventContent>
				<p>{description}</p>
			</EventContent>
		</Fragment>
	)
}