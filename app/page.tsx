import AccountingService from '@/components/AccountingService/AccountingService'
import UnsatisfiedWithWork from '@/components/UnsatisfiedWithWork/UnsatisfiedWithWork'
import PriseList from '@/components/PriseList/PriseList'
import ProductsСompany from '@/components/ProductsСompany/ProductsСompany'
import EscortOneC from '@/components/EscortOneC/EscortOneC'
import Сontacts from '@/components/Сontacts/Сontacts'
import Rent from '@/components/Rent/Rent'
import About from '@/components/About/About'

export const metadata = {
	title: 'home',
	description: 'description for the home page'
}

export default function Home() {
	return (
		<>
			<Rent />
			<AccountingService />
			<UnsatisfiedWithWork />
			<PriseList />
			<ProductsСompany />
			<EscortOneC />
			<About />
			<Сontacts />
		</>
	)
}
