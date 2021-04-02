import {useRouter} from 'next/router'

export default function FilteredEventsPage(){
	const router = useRouter();
	const query = router.query.slug
	console.log(router.query)
	return(
		<div>
			<h1>{query[0]}</h1>
			<h1>{query[1]}</h1>
		</div>
	)
}