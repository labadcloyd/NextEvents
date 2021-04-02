import {useRouter} from 'next/router'

export default function EventsPage(){
	const router = useRouter();
	const query = router.query
	return(
		<div>
			<h1>All Events</h1>
		</div>
	)
}