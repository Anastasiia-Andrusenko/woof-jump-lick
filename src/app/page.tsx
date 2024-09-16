import Head from 'next/head';
import css from './page.module.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';

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
								<span className={css.word3}>Lick </span>
							</h1>
							<p className={css.description}>
								Welcome to the site of breeders of the best dog breeds!
							</p>
							<div className={css.heroImg}></div>
							<Button color="#ffd700" text="find a puppy" />
						</div>
					</section>
					<section className={css.section_advantages}>
						<div className={css.advantages}>
							<ul className={css.advantages_list}>
								<li className={css.advantages_item}>
									<div className={css.advantages_background}>
										<div
											className={`${css.advantages_icon} ${css.documents_icon}`}
										></div>
									</div>
									<h3 className={css.advantages_title}>
										Official Documents & Certificates
									</h3>
									<p className={css.advantages_text}>
										Membership in reputable dog breeding clubs or associations
										such as FCI, AKC, or UKC is a sign of a professional
										breeder. Having an official license to operate a kennel
										confirms that the breeding activity is legal and adheres to
										established standards.
									</p>
								</li>
								<li className={css.advantages_item}>
									<div className={css.advantages_background}>
										<div
											className={`${css.advantages_icon} ${css.pedigree_icon}`}
										></div>
									</div>
									<h3 className={css.advantages_title}>
										Pedigree & Purebred Status
									</h3>
									<p className={css.advantages_text}>
										s A dog's pedigree provides detailed information about its
										lineage, confirming its purebred status. This document is
										essential for buyers interested in acquiring purebred dogs.
										Breeders typically offer proof that there is no
										crossbreeding with other dog breeds, which is important for
										breed enthusiasts.
									</p>
								</li>
								<li className={css.advantages_item}>
									<div className={css.advantages_background}>
										<div
											className={`${css.advantages_icon} ${css.veterinary_icon}`}
										></div>
									</div>
									<h3 className={css.advantages_title}>
										Veterinary Records & Health
									</h3>
									<p className={css.advantages_text}>
										Breeders should provide details on veterinary examinations,
										vaccinations, deworming, and other medical procedures.
										Genetic tests for hereditary diseases are another key
										indicator of a responsible breeder. Information on the
										health of the puppy’s parents should also be available.
									</p>
								</li>
								<li className={css.advantages_item}>
									<div className={css.advantages_background}>
										<div
											className={`${css.advantages_icon} ${css.living_icon}`}
										></div>
									</div>
									<h3 className={css.advantages_title}>
										Dog Living Conditions
									</h3>
									<p className={css.advantages_text}>
										Breeders should provide a description of the environment
										where the dogs are raised, whether they grow up indoors or
										in kennels, and how much space they have for exercise.
										Details on their diet and overall care routine should also
										be shared.
									</p>
								</li>
								<li className={css.advantages_item}>
									<div className={css.advantages_background}>
										<div
											className={`${css.advantages_icon} ${css.training_icon}`}
										></div>
									</div>
									<h3 className={css.advantages_title}>
										Socialization & Training
									</h3>
									<p className={css.advantages_text}>
										It’s important for breeders to socialize puppies from an
										early age, which influences their temperament and behavior.
										Information on basic training, such as leash walking and
										early potty training, shows the breeder’s commitment to
										preparing the puppies for their new homes.
									</p>
								</li>
								<li className={css.advantages_item}>
									<div className={css.advantages_background}>
										<div
											className={`${css.advantages_icon} ${css.support_icon}`}
										></div>
									</div>
									<h3 className={css.advantages_title}>Guarantees & Support</h3>
									<p className={css.advantages_text}>
										Breeders often provide health guarantees, such as offering
										refunds or replacements if the puppy has serious health
										issues. Additionally, some breeders offer post-purchase
										support by giving advice or assistance after the sale,
										ensuring the new owner has a smooth transition with their
										puppy.
									</p>
								</li>
							</ul>
						</div>
					</section>
					<section className={css.section_about}>
						<h2 className={css.about_title}>about us</h2>
						<article className={css.about_article}>
							<p className={css.about_text}>
								At Woof Jump Lick, we are passionate breeders specializing in
								three beloved terrier breeds: Jack Russell Terrier, Norwich
								Terrier, and West Highland White Terrier. Our journey began with
								a deep love for these lively, intelligent, and loyal companions,
								and over the years, we have dedicated ourselves to raising
								healthy, happy dogs that make the perfect addition to any
								family.
							</p>
							<br />
							<p className={css.about_text}>
								Each of these breeds has its own unique personality. Jack
								Russells are known for their boundless energy and playful
								spirit, Norwich Terriers for their affectionate and friendly
								nature, and West Highland Terriers for their confident,
								courageous demeanor. No matter which breed captures your heart,
								we ensure every puppy is raised in a loving environment,
								socialized from an early age, and provided with the highest
								level of care.
							</p>
							<br />
							<p className={css.about_text}>
								We are committed to upholding the best breeding practices, with
								each of our dogs coming from champion bloodlines, fully
								certified with pedigrees, and health-checked to ensure they meet
								the breed standards. Our goal is to help match the perfect puppy
								with the perfect family, and we take pride in offering lifelong
								support to ensure both you and your new furry friend thrive
								together.
							</p>
						</article>
					</section>
					<div className={css.btn_wrapper}>
						<Button color="#ffd700" text="find a puppy" />
					</div>
				</main>
			</Container>
			<Footer />
		</>
	);
}
