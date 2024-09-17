import Image from 'next/image';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import css from './page.module.css';

export default function West() {
	return (
		<>
			<Header />
			<Container>
				<main>
					<h2 className={css.title}>West Highland White Terrier</h2>
					<div className={css.hero}>
						<Image
							alt="West Highland White Terrier"
							src={'/wh.png'}
							width={614}
							height={900}
							className={css.img}
						/>
						<ul className={css.facts}>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>The Snow-White Coat</h3>
								<p className={css.fact_text}>
									Westies are known for their striking white fur, but did you
									know their bright coat was bred on purpose? Early breeders
									wanted a dog that could stand out while hunting in the
									Scottish Highlands, making it easier to spot among the rugged
									terrain.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>
									Big Personality in a Small Body
								</h3>
								<p className={css.fact_text}>
									Despite their small size, Westies are known for their
									larger-than-life personalities. They are fearless, confident,
									and often act like they’re much bigger than they really
									are—sometimes even challenging dogs twice their size!
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>The &quot;Westie Smile&quot;</h3>
								<p className={css.fact_text}>
									West Highland Terriers are famous for their happy expressions.
									Their cheerful demeanor and bright, alert eyes often give the
									impression that they’re always smiling, making them one of the
									most charming and photogenic dog breeds.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Royal Connection</h3>
								<p className={css.fact_text}>
									Westies have long been adored by the British royal family. The
									breed was a favorite of Queen Elizabeth, the Queen Mother, who
									was often seen with her beloved Westies by her side, adding a
									bit of royal charm to the breed’s history.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Digging Masters</h3>
								<p className={css.fact_text}>
									Originally bred to hunt small game like foxes and badgers,
									Westies are natural diggers. They love to use their paws to
									unearth things in the garden, so don’t be surprised if your
									Westie shows a bit of their digging instinct!
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
