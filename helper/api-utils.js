export async function getAllEvents() {
	const response = await fetch('https://nextevents-b9751-default-rtdb.firebaseio.com/events.json')
	const data = await response.json();

	const events = []

	for(const key in data){
		events.push({
			id: key,
			...data[key]
		})
	}
	return events
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	const featuredEvent = await allEvents.filter((event)=>{return(event.isFeatured)})
	return featuredEvent
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	return allEvents.find((event) => {return event.id === id});
}

export async function getFilteredEvents(dateFilter) {
const { year, month } = dateFilter;

let filteredEvents = DUMMY_EVENTS.filter((event) => {
	const eventDate = new Date(event.date);
	return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
});

return filteredEvents;
}
