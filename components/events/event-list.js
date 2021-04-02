import EventItem from './event-item'

export default function EventList(props){
	const items = props.items
	return(
		<ul>
			{items.map((event)=>{
				return <EventItem key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} image={event.image} />
			})}
		</ul>
	)
}