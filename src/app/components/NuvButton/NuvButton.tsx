'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import css from './NuvButton.module.css';

interface NavButtonProps {
	text: string;
	href: string;
	backgroundColor?: string; // Пропс для кольору фону
}

const NavButton = ({ text, href, backgroundColor }: NavButtonProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<button
			type="button"
			className={css.button}
			style={{ backgroundColor: backgroundColor }}
		>
			<Link
				href={href}
				className={`${css.navButton} ${isActive ? css.active : ''}`}
			>
				{text}
			</Link>
		</button>
	);
};

export default NavButton;
