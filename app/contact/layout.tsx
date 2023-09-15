import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Dawid Krzemiński | Reach Out for Collaborations',
	description:
		'Get in touch with Dawid Krzemiński to discuss exciting collaboration opportunities. Contact me for frontend development, UI/UX design, and more.',
}

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>
}

export default ContactLayout
