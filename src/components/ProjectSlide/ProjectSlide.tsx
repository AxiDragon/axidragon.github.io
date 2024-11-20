import ImageSlide from "@components/ImageSlide/ImageSlide";
import PolaroidDivider from "@components/PolaroidDivider/PolaroidDivider";

import styles from './ProjectSlide.module.css';

type Props = {
	backgroundImage: string;
	headerImage: string;
	children?: React.ReactNode;
	//TODO: Add an easy way to add links to the project's page, source code or playable game (if allowed/possible)
}

const ProjectSlide: React.FC<Props> = ({ backgroundImage, headerImage, children }) => {
	// TODO: Fix this grid formation thing. It doesn't work great on mobile, and it's not very flexible.
	return (
		<ImageSlide imageSource={backgroundImage}>
			<PolaroidDivider>
				<img src={headerImage} className='polaroid-header' />
			</PolaroidDivider>
			<div className={styles.container}>
				{children}
			</div>
		</ImageSlide>
	);
}

export default ProjectSlide;