import { EmailTemplate } from '@/components/email-template/email-template'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: Request) => {
	const body = await req.json()
	const { firstName, lastName, email, phone, address, message } = body

	console.log(req.body)

	if (!firstName || !lastName || !email || !message) {
		return NextResponse.json({ error: 'Please fill in all required fields' })
	}

	try {
		const data = await resend.emails.send({
			from: `${firstName} ${lastName} <onboarding@resend.dev>`,
			to: ['dawidkrzmnsk@gmail.com'],
			subject: `${firstName} ${lastName} has sent you a message through your contact form!`,
			react: EmailTemplate({
				firstName,
				lastName,
				phone: phone ? phone : undefined,
				address: address ? address : undefined,
				message,
			}),
		})
		return NextResponse.json({ data: 'Your mail was succesfully sent!' })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
