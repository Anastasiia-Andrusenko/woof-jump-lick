// import Image from 'next/image';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import css from './page.module.css';

export default function Jack() {
	return (
		<>
			<Header />
			<Container>
				<main>
					<h2 className={css.title}>Jack Russell Terrier</h2>
					<div>
						{/* <Image
							alt="dog read newspaper"
							src={'/dog-read.png'}
							width={810}
							height={1080}
						/> */}
					</div>
				</main>
			</Container>
			<Footer />
		</>
	);
}
