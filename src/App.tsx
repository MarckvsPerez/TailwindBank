import React from 'react';
import styles from './style';
import {
	Navbar,
	Billing,
	Business,
	CardDeal,
	Client,
	CtaComponent,
	Footer,
	Hero,
	Stats,
	Testimonials,
} from './components';

export const App = () => {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Billing />
					<Business />
					<CardDeal />
					<Client />
					<CtaComponent />
					<Footer />
					<Stats />
					<Testimonials />
				</div>
			</div>
		</div>
	);
};
