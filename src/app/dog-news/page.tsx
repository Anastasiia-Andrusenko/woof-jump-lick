import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import css from './page.module.css';
import Container from '../components/Container/Container';

export default function News() {
	return (
		<>
			<Header />
			<Container>
				<main>
					<h2 className={css.title}>What&rsquo;s new in the world of dogs?</h2>
					<div>
						<Image
							alt="dog read newspaper"
							src={'/dog-read.png'}
							width={810}
							height={1080}
						/>
					</div>
				</main>
			</Container>
			<Footer />
		</>
	);
}
