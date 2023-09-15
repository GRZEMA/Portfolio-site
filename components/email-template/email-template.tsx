interface EmailTemplateProps {
	message: string
	address?: string
	phone?: number
	firstName: string
	lastName: string
}

export const EmailTemplate = ({
	message,
	address,
	phone,
	firstName,
	lastName,
}: EmailTemplateProps): JSX.Element => (
	<div>
		<p>
			{firstName} {lastName} is texting:{' '}
		</p>
		<p>Message: {message}</p>
		{address ? <p>Address: {address}</p> : undefined}
		{phone ? <p>Phone: {phone}</p> : undefined}
	</div>
)
