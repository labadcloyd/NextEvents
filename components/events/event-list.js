import EventItem from './event-item'
import Style from './event-list.module.css'

export default function EventList(props){
	const items = props.items
	return(
		<ul className={Style.list}>
			{items.map((event)=>{
				return <EventItem 
					key={event.id} 
					id={event.id} 
					title={event.title} 
					date={event.date} 
					location={event.location} 
					image={event.image} 
				/>
			})}
		</ul>
	)
}