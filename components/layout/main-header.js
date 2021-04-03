import Link from 'next/link'
import Style from './main-header.module.css'

export default function MainHeader(){
	return(
		<header className={Style.header}>
			<div className={Style.logo}>
				<Link href='/'>NextEvents</Link>
			</div>
			<nav className={Style.navigation}>
				<ul>
					<li>
						<Link href='/events'>Browse All Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}