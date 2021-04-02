import Link from 'next/link'

export default function EventItem(props){
	const {title, image, date, location, id } = props
	const readableDate = new Date(date).toLocaleDateString('en-US', {day:'numeric', month:'long', year:'numeric' }) 
	const exploreLink = `/events/${id}`
	return(
		<li>
			<img src={`/${image}`} alt=''/>
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{readableDate}</time>
					</div>
					<div>
						<address>{location}</address>
					</div>
				</div>
				<div>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	)
}