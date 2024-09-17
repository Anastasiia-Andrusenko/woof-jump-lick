import Image from 'next/image';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import css from './page.module.css';

export default function Norwich() {
	return (
		<>
			<Header />
			<Container>
				<main>
					<h2 className={css.title}>Norwich Terrier</h2>
					<div className={css.hero}>
						<Image
							alt="Norwich Terrier"
							src={'/nrw.png'}
							width={900}
							height={614}
							className={css.img}
						/>
						<ul className={css.facts}>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Miniature Adventurers</h3>
								<p className={css.fact_text}>
									Norwich Terriers are known for their bold and adventurous
									spirit despite their small size. They were originally bred as
									rat catchers, so they have a fearless nature and a penchant
									for exploration.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Tail Tales</h3>
								<p className={css.fact_text}>
									Unlike many terriers, Norwich Terriers have a distinctive and
									distinctive &quot;flag-like&quot; tail, which is often carried
									high and gives them a unique and alert appearance.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Star of the Stage</h3>
								<p className={css.fact_text}>
									Norwich Terriers have made appearances in various films and
									television shows. They were featured in the popular TV show
									&quot;Doctor Who&quot; and even had a role in the classic
									movie &quot;The Adventures of Tintin.&quot;
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>A Royal Connection</h3>
								<p className={css.fact_text}>
									The Norwich Terrier has a historical link to British royalty.
									Queen Elizabeth II was known to have a Norwich Terrier named
									&quot;Dookie,&quot; who was a beloved companion during her
									younger years.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Unique Bark</h3>
								<p className={css.fact_text}>
									Norwich Terriers have a distinctive bark that is often
									described as a mix between a growl and a yip. This unique
									vocalization reflects their lively and energetic personality.
								</p>
							</li>
						</ul>
					</div>
				</main>
			</Container>
			<Footer />
		</>
	);
}
