import Project from "@/models/Project";

import wall from '@/assets/room/wall.png';
import blahaj from '@/assets/room/blahaj.png';
import workText from '@/assets/text/workMarker.png';
import texel1 from '@/assets/nature/texel1.png';
import longDesk from '@/assets/room/longDesk.png';
import door from '@/assets/room/door.png';
import ProjectItem from "@/components/ProjectItem/ProjectItem";

const PROJECTS = [
	new Project({
		id: 0,
		name: "Broodje Kaas",
		description: [
			"Broodje Kaas is a visual novel game commissioned by the Dutch National Police Force.",
			"It teaches new caretakers what to do in case of emergencies in an interactive way.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 1,
		name: "Artkeeper",
		description: [
			"Artkeeper is a tool that tracks time spent focused on any application.",
			"It was created to facilitate time tracking for digital freelancers.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 2,
		name: "SSHPlus",
		description: [
			"SSHPlus is a Chrome Extension to facilitate finding student accomodations on sshxl.nl.",
			"Aside from advanced filters, it also remembers viewed properties and clarifies the likelihood that you'll be invited for an introduction night.",
			"This caught the attention of SSH themselves, and they're hoping to implement these features in the future.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 3,
		name: "Exersite",
		description: [
			"Exersite is a web app where visitors can vote for exercise that I should do.",
			"I initially created it to counteract that I'm mostly be sitting behind a computer.",
			"Admittedly, I don't look at it much anymore - I've got my own exercise routines that I maintain now."
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 4,
		name: "Exersite Manager",
		description: [
			"Exersite Manager is a JavaFX app for the Exersite web app to easily modify the exercise counts.",
			"It was mainly created for me to learn Java - modifying the counts wasn't really an issue to begin with.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 5,
		name: "D20 Timer",
		description: [
			"D20 Timer is a randomized productivity timer with a bite-sized task creator.",
			"I created it after seeing that random elements in games motivated me to keep playing.",
			"I wanted to incorporate that random element in a more productive context, too!",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 6,
		name: "Opinions not People",
		description: [
			<p>Opinions not People is a web app for phones to
				reduce <a href='https://en.wikipedia.org/wiki/Out-group_homogeneity' target='blank'>out-group homogeneity bias</a>.</p>,
			"It is currently still a work-in-progress. It should be finished by January 2025.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
	new Project({
		id: 7,
		name: "Portfolio",
		description: [
			"This portfolio site, is, well, a culmination of my HTML, CSS, JavaScript, TypeScript and React skills.",
			"It especially thought me a lot about responsive web design.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: workText,
		backgroundImage: texel1,
	}),
];

export default PROJECTS;