import PriseList from '@/components/PriseList/PriseList'
import ProductsСompany from '@/components/ProductsСompany/ProductsСompany'
import EscortOneC from '@/components/EscortOneC/EscortOneC'
import Сontacts from '@/components/Сontacts/Сontacts'
import Rent from '@/components/Rent/Rent'
import About from '@/components/About/About'
import Apps from '@/components/appsOneC/apps'
import Dropdown from '@/components/inputs/dropDawn/dropDawn'
import Carousel from '@/components/Carousel/Carousel'

export const metadata = {
	title: 'home',
	description: 'description for the home page'
}

export default function Home() {
	return (
		<div className='max-w-[1366px] mx-auto'>
			<Rent />
			<PriseList />
			<ProductsСompany />
			<Apps />
			<EscortOneC />
			<Carousel />
			<About />
			<Сontacts />
		</div>
	)
}
