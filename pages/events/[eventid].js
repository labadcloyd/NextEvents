import {useRouter} from 'next/router'

export default function EventID(){
	const router = useRouter();
	const query = router.query.eventid
	console.log(router.query)
	return(
		<div>
			<h1>{query}</h1>
		</div>
	)
}