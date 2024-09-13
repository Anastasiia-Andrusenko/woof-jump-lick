import Head from 'next/head';
import css from './page.module.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Woof-Jump-Lick - Home</title>
				<meta
					name="description"
					content="Welcome to Woof-Jump-Lick, your go-to site for dog news and breed information!"
				/>
			</Head>
			<Header />
			<Container>
				<main className={css.main}>
					<section className={css.section}>
						<div className={css.hero}>
							<h1 className={css.title}>
								<span className={css.word1}>Woof </span>
								<span className={css.word2}>Jump </span>
								<span className={css.word3}>Lick</span>
							</h1>
							<p className={css.description}>
								Welcome to the site of your favorite dog breeds.
							</p>
							{/* <div className={css.ground}></div> */}
							<div className={css.heroImg}></div>
						</div>
					</section>
					{/* <section className={css.section}>
						<div className={css.about}></div>
					</section>
					<section className={css.section}>
						<div className={css.about}></div>
					</section> */}
				</main>
			</Container>
			<Footer />
		</>
	);
}
