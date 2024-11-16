import { useEffect, useRef, useState } from 'react';
import styles from './FadingScreen.module.css';


type Props = {
	color: string;
}

export default function FadingScreen({ color }: Props) {
	const [opacity, setOpacity] = useState<number>(1);
	const screen = useRef<HTMLDivElement>(null);
	const body: HTMLElement = document.querySelector('body') as HTMLElement;

	useEffect(() => {
		//TODO: Account for using arrow keys
		const handleScroll = (event: Event) => {
			let delta: number = 0;

			if (event instanceof WheelEvent) {
				delta = event.deltaY / 1500;
			}

			delta = Math.max(0, delta);
			const newOpacity = Math.min(Math.max(opacity - delta, 0), 1);
			setOpacity(newOpacity);

			if (opacity === 0) {
				body.style.overflow = 'auto';
				window.removeEventListener('wheel', handleScroll);
				window.dispatchEvent(new CustomEvent('setHandleScroll', {
					detail: {
						canScroll: true
					}
				}));
				if (screen.current) {
					screen.current.style.display = 'none';
				}
			} else {
				body.style.overflow = 'hidden';
			}
		}

		body.style.overflow = 'hidden';

		setTimeout(() => {
			window.dispatchEvent(new CustomEvent('setHandleScroll', {
				detail: {
					canScroll: false
				}
			}));
		}, 0);

		window.addEventListener('wheel', handleScroll, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleScroll);
		}
	}, [opacity]);

	return (
		<div ref={screen} className={styles.container}>
			<div
				className={styles.screen}
				style={{ opacity, backgroundColor: color }}
			/>
		</div>
	);
}