import {Fragment} from 'react'
import {useRouter} from 'next/router'
import {getEventById} from '../../helper/api-utils'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

export default function EventID(props){
	const {data} = props
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
export async function getServerSideProps(context){
	const query = context.params.eventid;
	const specificEvent = await getEventById(query)
	return{
		props:{
			data: specificEvent
		}
	}
}