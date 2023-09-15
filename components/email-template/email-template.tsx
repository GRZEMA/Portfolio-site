interface EmailTemplateProps {
	message: string
	address?: string
	phone?: number
	email: string
	firstName: string
	lastName: string
}

export const EmailTemplate = ({
	message,
	address,
	phone,
	firstName,
	lastName,
	email,
}: EmailTemplateProps): JSX.Element => (
	<div>
		<p>
			{firstName} {lastName}, &lt;{email}&gt; is texting:{' '}
		</p>
		<p>Message: {message}</p>
		{address ? <p>Address: {address}</p> : undefined}
		{phone ? <p>Phone: {phone}</p> : undefined}
	</div>
)
