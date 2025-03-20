import { Card } from 'primereact/card'

const workExperience = [
  {
    title: 'Senior Frontend Developer',
    subTitle: 'Couchsurfing | Aug 2024 - Present',
    description: `- Create web interfaces using NextJs and getting the data using tRpc
- Create/Update web components with Storybook documentation`,
  },
  {
    title: 'Mid Frontend Developer',
    subTitle: 'Softserve | Oct 2023 - Aug 2024',
    description: `- Working in agile team with React/Vue and composition API in a web sales system application.
- Develop features or fix bugs with unit testing to make sure the application works fine.
- Do pull request review and publish develop branch using Jenkins (CI / CD)
- Taking scrum meetings: sprint planning, backlog score, sprint work presentation demo
- Help team members to solve questions`,
  },
  {
    title: 'FullStack Developer',
    subTitle: 'Intel | Dec 2021 - Oct 2023',
    description: `- Working in dynamic ticketing system project built with react and Laravel for all engineering teams, there were like 100 people using it
- Develop features according need of the needs and fix bugs.
- Migrate Wordpress website to react and node, loading time was from 9s to 3.5 s`,
  },
]

export function WorkSection() {
  return (
    <div className="bg-slate-100 p-5 sm:p-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Work Experience</h1>
        <p>
          Over 8 years of professional experience building frontend applications
        </p>
        <div className="flex flex-col gap-4 mt-10">
          {workExperience.map(experience => (
            <Card
              key={experience.title}
              title={experience.title}
              subTitle={experience.subTitle}
              className="w-full max-w-3xl mx-auto"
            >
              <p className="m-0 whitespace-pre-line text-left">
                {experience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
