import Link from 'next/link'
import Style from '../../styles/event-item.module.css'

export default function EventItem(props){
	const {title, image, date, location, id } = props
	const readableDate = new Date(date).toLocaleDateString('en-US', {day:'numeric', month:'long', year:'numeric' }) 
	const exploreLink = `/events/${id}`
	return(
		<li className={Style.item}>
			<img src={`/${image}`} alt=''/>
			<div className={Style.content}>
				<div className={Style.summary}>
					<h2>{title}</h2>
					<div className={Style.date}>
						<time>{readableDate}</time>
					</div>
					<div className={Style.address}>
						<address>{location}</address>
					</div>
				</div>
				<div className={Style.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	)
}