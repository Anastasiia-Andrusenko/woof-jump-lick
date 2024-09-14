import Link from 'next/link';
import css from './Footer.module.css';
import Image from 'next/image';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { FaFacebookF } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={css.footer} id="contacts">
			<div className={css.container}>
				<div className={css.wrapper}>
					<div>
						<div className={css.contacts}>
							<address className={css.address}>
								<ul className={css.addressList}>
									<li className={css.location}>
										<a
											className={css.link}
											href="https://www.google.com/maps/place/Hachik%C5%8D+Memorial+Statue/@35.6590719,139.7004322,19.86z/data=!4m14!1m7!3m6!1s0x60188b57efbd57c7:0x217e9d9fe306fba!2sHachik%C5%8D+Memorial+Statue!8m2!3d35.6590579!4d139.7006293!16s%2Fg%2F122cnh70!3m5!1s0x60188b57efbd57c7:0x217e9d9fe306fba!8m2!3d35.6590579!4d139.7006293!16s%2Fg%2F122cnh70?authuser=0&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
											target="blank"
										>
											<span
												className={`${css.icon_wrapper} ${css.locationIcon}`}
											>
												<MdOutlineLocationOn className={css.icon} />
											</span>
											<span className={css.text}>
												123 Woof Street, Dogtown, Ukraine
											</span>
										</a>
									</li>
									<li className={css.email}>
										<a
											className={css.link}
											href="mailto:info@woof-jump-lick.com"
											target="blank"
										>
											<span className={`${css.icon_wrapper} ${css.emailIcon}`}>
												<MdOutlineMailOutline className={css.icon} />
											</span>
											<span className={css.text}>info@woof-jump-lick.com</span>
										</a>
									</li>
									<li className={css.phone}>
										<a
											className={css.link}
											href="tel:+380XXXXXXXXX"
											target="blank"
										>
											<span className={`${css.icon_wrapper} ${css.phoneIcon}`}>
												<LuPhone className={css.icon} />
											</span>
											<span className={css.text}>+380-XX-XXX-XXXX</span>
										</a>
									</li>
								</ul>
							</address>
						</div>
					</div>
					<div className={css.socialWrapper}>
						<p className={css.join}>Join us</p>
						<ul className={css.social}>
							<li>
								<a
									href="https://facebook.com/woofjumpluck"
									target="_blank"
									rel="noreferrer"
								>
									<span className={`${css.icon_social} ${css.fb}`}>
										<FaFacebookF className={css.icon} />
									</span>
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/woofjumpluck"
									target="_blank"
									rel="noreferrer"
								>
									<span className={`${css.icon_social} ${css.inst}`}>
										<RiInstagramFill className={css.icon} />
									</span>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/woofjumpluck"
									target="_blank"
									rel="noreferrer"
								>
									<span className={`${css.icon_social} ${css.telegram}`}>
										<FaTelegramPlane className={css.icon} />
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div className={css.logo}>
							<Link href="/">
								<Image alt="logo" src={'/logo.png'} width={100} height={60} />
							</Link>
						</div>
						<form className={css.form}>
							<label className={css.label} htmlFor="email">
								Subscribe to our newsletter:
							</label>
							<div>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Your email"
									className={css.input}
								/>
								<button type="submit" className={css.submit}>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>

				<p className={css.rights}>
					© 2024 Woof Jump Lick. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
