// import Image from 'next/image';
import Image from 'next/image';
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
					<div className={css.hero}>
						<Image
							alt="Jack Russell Terrier"
							src={'/jrt.png'}
							width={614}
							height={900}
							className={css.img}
						/>
						<ul className={css.facts}>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Energizer Bunnies</h3>
								<p className={css.fact_text}>
									Jack Russell Terriers are known for their boundless energy and
									enthusiasm. They are often described as having &quot;an
									endless supply of energy&quot; and require a lot of physical
									and mental stimulation to stay happy.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Movie Stars</h3>
								<p className={css.fact_text}>
									Jack Russell Terriers have made their mark in Hollywood! One
									of the most famous Jack Russells was &quot;Uggie,&quot; who
									starred in the Academy Award-winning film &quot;The
									Artist&quoand even won the Palm Dog Award at the Cannes Film
									Festival.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Champion Burrowers: </h3>
								<p className={css.fact_text}>
									This breed has a remarkable ability to dig and burrow.
									Originally bred for fox hunting, Jack Russells were adept at
									digging into burrows to flush out prey, a trait that still
									persists today.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>Tiny but Tenacious</h3>
								<p className={css.fact_text}>
									Despite their small size, Jack Russells have a huge
									personality and are incredibly tenacious. They are known for
									their determination and stubbornness, often taking on
									challenges far beyond their size.
								</p>
							</li>
							<li className={css.fact_item}>
								<h3 className={css.fact_title}>A Nose for Trouble</h3>
								<p className={css.fact_text}>
									Jack Russell Terriers have a keen sense of smell and are known
									for their tracking abilities. They can sniff out hidden treats
									or toys with impressive precision, making them excellent in
									scent-based games and activities.
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
