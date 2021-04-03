import Link from 'next/link'
import Style from './button.module.css'

export default function Button(props){
	if(props.link){
		return(
			<Link href={props.link}>
				<a className={Style.btn}>{props.children}</a>
			</Link>
		)
	}
	return (
		<button className={Style.btn} onClick={props.onClick}>{props.children}</button>
	)
	
}