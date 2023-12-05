import Image from 'next/image'

function ContentHome({ imageSrc, title, description }) {
	return (
		<div className='flex '>
			<div className='w-[100px] h-[100px] relative bg-white rounded-lg my-2 mx-2 '>
				<Image src={imageSrc} alt={title} />
			</div>
			<div className='w-[250px] ml-4 text-stone-100'>
				<h4 className='text-[28px] font-bold '>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default ContentHome
