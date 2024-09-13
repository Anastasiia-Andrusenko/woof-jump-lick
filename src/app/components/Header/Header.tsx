import Image from 'next/image';
import NavButton from '../NuvButton/NuvButton';
import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.logo}>
				<Link href="/">
					<Image alt="logo" src={'/logo.png'} width={100} height={60} />
				</Link>
			</div>
			<nav className={css.navigation}>
				<NavButton text="Jack" href="/jack-russell" backgroundColor="#FFA07A" />
				<NavButton text="Norwich" href="/norwich" backgroundColor="#87CEFA" />
				<NavButton
					text="West"
					href="/west-highland"
					backgroundColor="	#EE82EE	"
				/>
				<NavButton text="Contacts" href="#contacts" backgroundColor="#FFD700" />
				<NavButton text="Dog News" href="/dog-news" backgroundColor="#9ACD32" />
			</nav>
		</header>
	);
};

export default Header;
