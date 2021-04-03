import Link from 'next/link'
import Style from '../../styles/button.module.css'

export default function Button(props){
	return(
		<Link href={props.link}>
			<a className={Style.btn}>{props.children}</a>
		</Link>
	)
}