import {Fragment} from 'react'
import {useRouter} from 'next/router'
import {getEventById} from '../../helper/api-utils'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import Comments from '../../components/input/comments';

export default function EventID(props){
	const {data} = props
	return(
		<Fragment>
			<EventSummary title={data.title}/>
			<EventLogistics date={data.date} address={data.location} image={data.image} imageAlt={data.title} />
			<EventContent>
				<p>{data.description}</p>
			</EventContent>
			<Comments eventid={data.id} />
		</Fragment>
	)
}
export async function getServerSideProps(context){
	const query = context.params.eventid;
	const specificEvent = await getEventById(query)
	if(!specificEvent){
		return{
			notFound:true
		}
	}
	return{
		props:{
			data: specificEvent
		}
	}
}