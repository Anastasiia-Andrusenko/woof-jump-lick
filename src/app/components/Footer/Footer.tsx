import Link from 'next/link';
import css from './Footer.module.css';
import Image from 'next/image';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';

const Footer = () => {
	return (
		<footer className={css.footer}>
			<div className={css.container}>
				<div className={css.wrapper}>
					<div>
						<div className={css.logo}>
							<Link href="/">
								<Image alt="logo" src={'/logo.png'} width={100} height={60} />
							</Link>
						</div>
						<div className={css.contacts}>
							<address className={css.address}>
								<ul className={css.addressList}>
									<li className={css.location}>
										<div className={css.link}>
											<span className={css.icon_wrapper}>
												<MdOutlineLocationOn className={css.icon} />
											</span>
											<span className={css.text}>
												123 Woof Street, Dogtown, Ukraine
											</span>
										</div>
									</li>
									<li className={css.email}>
										<a
											className={css.link}
											href="mailto:info@woof-jump-lick.com"
										>
											<span className={css.icon_wrapper}>
												<MdOutlineMailOutline className={css.icon} />
											</span>
											<span className={css.text}>info@woof-jump-lick.com</span>
										</a>
									</li>
									<li className={css.phone}>
										<a className={css.link} href="tel:+380XXXXXXXXX">
											<span className={css.icon_wrapper}>
												<LuPhone className={css.icon} />
											</span>
											<span className={css.text}>+380-XX-XXX-XXXX</span>
										</a>
									</li>
								</ul>
							</address>
						</div>
					</div>

					<ul className={css.social}>
						<li>
							<a
								href="https://facebook.com/woofjumpluck"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/woofjumpluck"
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/woofjumpluck"
								target="_blank"
								rel="noreferrer"
							>
								Twitter
							</a>
						</li>
					</ul>
					<form className={css.form}>
						<label htmlFor="email">Subscribe to our newsletter:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email"
						/>
						<button type="submit">Subscribe</button>
					</form>
				</div>

				<p className={css.rights}>
					© 2024 Woof Jump Lick. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
