import React from 'react';
import Link from 'next/link';
import styles from '../styles/About.module.css'

const About = () => {
	return (
		<div className={styles.container}>
			<span className={styles.table_of_contents }>
				<h3>About Ca Phe</h3>
				<Link href="#header1">Header 1</Link>
				<Link href="#header2">Header 2</Link>
				<Link href="#header3">Header 3</Link>
			</span>
			<span className={styles.main_header}>
				<h2>Mission Statement</h2>
				<span className={styles.background_block} />
			</span>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna duis convallis convallis. Pulvinar mattis nunc sed blandit libero. Nulla facilisi etiam dignissim diam quis enim lobortis. Eu facilisis sed odio morbi quis commodo odio. Placerat orci nulla pellentesque dignissim enim. Morbi tristique senectus et netus et malesuada fames. Purus semper eget duis at tellus at urna. Tincidunt lobortis feugiat vivamus at. Amet massa vitae tortor condimentum.</p>
			<h4 id="header1">Header 1</h4>
			<p>Tristique senectus et netus et malesuada fames. Suscipit tellus mauris a diam maecenas sed. Dignissim sodales ut eu sem integer vitae justo. Magna eget est lorem ipsum. Erat nam at lectus urna. Sed faucibus turpis in eu mi bibendum neque egestas. Vitae et leo duis ut. Non consectetur a erat nam at lectus urna duis convallis. Fermentum iaculis eu non diam phasellus vestibulum lorem. Eu tincidunt tortor aliquam nulla. Lectus nulla at volutpat diam ut venenatis. Odio ut enim blandit volutpat maecenas volutpat. Nulla facilisi nullam vehicula ipsum a arcu. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Sagittis vitae et leo duis. Cursus turpis massa tincidunt dui. Ornare arcu odio ut sem nulla pharetra diam sit amet. Molestie at elementum eu facilisis sed. Penatibus et magnis dis parturient montes nascetur ridiculus.</p>
			<h4 id="header2">Header 2</h4>
			<p>Orci eu lobortis elementum nibh tellus. Faucibus interdum posuere lorem ipsum dolor. Posuere morbi leo urna molestie at elementum eu. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Amet mauris commodo quis imperdiet massa. Sed augue lacus viverra vitae. Nec nam aliquam sem et. Venenatis lectus magna fringilla urna porttitor. Amet luctus venenatis lectus magna. Sit amet commodo nulla facilisi nullam vehicula ipsum. Enim eu turpis egestas pretium aenean. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Cursus turpis massa tincidunt dui ut ornare lectus. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Viverra mauris in aliquam sem fringilla.</p>
			<h4 id="header3">Header 3</h4>
			<p>Consequat ac felis donec et odio pellentesque diam volutpat commodo. Nulla facilisi etiam dignissim diam quis. Proin sagittis nisl rhoncus mattis rhoncus. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Mi quis hendrerit dolor magna. Ipsum a arcu cursus vitae congue mauris. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Scelerisque felis imperdiet proin fermentum. Curabitur vitae nunc sed velit dignissim. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Eget arcu dictum varius duis at consectetur lorem donec. Tortor at auctor urna nunc id. Volutpat diam ut venenatis tellus in. Ornare suspendisse sed nisi lacus sed viverra tellus. Lectus vestibulum mattis ullamcorper velit sed. Massa eget egestas purus viverra accumsan in nisl nisi. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.</p>
		</div>
	)
};

export default About