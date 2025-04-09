'use client'

import { NavLinks } from '@/constants'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Sidebar = () => {
	const [isRouting, setIsRouting] = useState(false)
	const [isActive, setIsActive] = useState('Home')
	const [prevPath, setPrevPath] = useState('/')

	const path = usePathname()

	useEffect(() => {
		if (prevPath !== path) {
			setIsRouting(true)
		}
	}, [prevPath, path])

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path)
			const timeout = setTimeout(() => {
				setIsRouting(false)
			}, 1200)
			return () => clearTimeout(timeout)
		}
	}, [isRouting])

	return (
		<div className='fixed right-8 top-[40%] z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50 flex flex-col items-center justify-center'>
			<AnimatePresence mode='wait'>
				<div className='flex flex-col gap-5 pb-3'>
					{NavLinks.map(link => (
						<Link
							key={link.name}
							href={link.link}
							onClick={() => setIsActive(link.name)}
						>
							<link.icon
								className={`w-[28px] h-[28px] ${
									isActive === link.name ? 'text-red-500' : 'text-white'
								}`}
							/>
						</Link>
					))}
				</div>
			</AnimatePresence>
		</div>
	)
}

export default Sidebar
