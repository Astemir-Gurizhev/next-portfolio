import { ServiceSlider } from '@/components/ServiceSlider'
import Image from 'next/image'

const page = () => {
	return (
		<div className='flex items-center justify-center gap-5 flex-col h-screen bg-[#0C011A]'>
			<div className='flex flex-col gap-3 md:pb-0'>
				<h1 className='text-[50px] text-white font-semibold'>
					My Skills <span className='text-red-500'>.</span>
				</h1>
				
			</div>
			<ServiceSlider />
			<div className='absolute -left-36 rotate-12 animate-pulse duration-75'>
				<Image
					src='/assets/bulb.png'
					alt='bulb'
					width={260}
					height={260}
					className='w-full h-full hidden md:block'
				/>
			</div>
		</div>
	)
}

export default page
