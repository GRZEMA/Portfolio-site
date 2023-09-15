'use client'

import Button from '@/components/multi-page-components/UI/Button'

const Error = (): JSX.Element => {
	return (
		<main className='w-full h-screen items-center justify-center'>
			<section className='w-full h-full flex flex-col items-center justify-evenly bg-background relative'>
				<video src='/assets/404.mp4' autoPlay={true} loop={true}></video>
				<Button size='2xl' href='/'>
					Go back to Home Page
				</Button>
			</section>
		</main>
	)
}

export default Error
