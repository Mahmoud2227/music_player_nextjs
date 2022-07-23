import Image from 'next/image';

import classes from "./WidgetEntry.module.scss"

export default function WidgetEntry({title, subtitle, image}) {
	return (
		<div className={classes['body']}>
			<Image src={image} alt={title} className={classes['image']} width={50} height={50}/>
			<div className={classes['body-right']}>
				<p className={classes['title']}>{title}</p>
				<p className={classes['subtitle']}>{subtitle}</p>
			</div>
		</div>
	);
}