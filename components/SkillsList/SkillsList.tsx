import SkillItem from './SkillItem'

const skills = [
	{ name: 'HTML & CSS', images: ['/assets/html5.svg', '/assets/css3-alt.svg'] },
	{ name: 'SCSS', images: ['/assets/sass.svg'] },
	{ name: 'Tailwind CSS', images: ['/assets/tailwindcss.svg'] },
	{ name: 'JavaScript ES6', images: ['/assets/js.svg'] },
	{ name: 'TypeScript', images: ['/assets/ts.svg'] },
	{ name: 'React', images: ['/assets/react.svg'] },
	{ name: 'React Router', images: ['/assets/react-router-mark-color.svg'] },
	{ name: 'Redux', images: ['/assets/redux.svg'] },
	{ name: 'Other Libraries!', images: null },
	{ name: 'Next.js', images: ['/assets/nextjs-2.svg'] },
	{ name: 'GIT', images: ['/assets/git-icon.svg'] },
	{ name: 'MongoDB', images: ['/assets/mongodb-icon-1.svg'] },
	{ name: 'Rest API', images: null },
	{ name: 'SQL Basics', images: null },
	{ name: 'PHP Basics', images: ['/assets/php.png'] },
]

const SkillsList = (): JSX.Element => {
	return (
		<ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4  font-bold text-text  xl:gap-6 2xl:gap-8'>
			{skills.map((skill) => (
				<SkillItem key={skill.name} images={skill.images} name={skill.name} />
			))}
		</ul>
	)
}

export default SkillsList
