import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function WorkAppearance({
  title,
  position,
  description,
  event,
  responsibilities
}: {
  title: string
  position: string
  description: string
  event: string
  href: string
  responsibilities: string[]
}) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Position as="h6">
        {position}
      </Card.Position>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Responsibilities as="ul">
      {responsibilities}
    </Card.Responsibilities>
      
    </Card>
  )
}


function Education({
  title,
  location,
  course,
  event,
  gpa,
  href,
  activities,
  coursework
}: {
  title: string
  location: string
  course: string
  event: string
  gpa: string
  href: string
  activities: string[]
  coursework: string[]
}) {
  return (
    <Card as="article">
      <Card.Position as="h6">
        {course}
      </Card.Position>
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <span className='text-xs text-gray-500'>{location}</span>      
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>      
      <Card.Gpa>{gpa}</Card.Gpa>
      <Card.Responsibilities>{activities}</Card.Responsibilities>
      <h5 className='font-medium text-xs'>Relevant Coursework</h5>
      <div className='flex flex-wrap'>
        {coursework.map((course, index) => (
          <span key={index} className='bg-teal-200 text-gray-800 text-xs font-medium mr-2 my-1 px-2.5 py-0.5 rounded dark:text-white dark:bg-teal-900'>
            {course}
          </span>
        ))}
      </div>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Background',
  description:
    'Career Chronicles and Academic Achievements',
}

export default function Background() {
  return (
    <SimpleLayout
      title="Career Chronicles and Academic Achievements"
      intro="Embarking on a journey from the halls of academia to the tech trenches, I've blended theoretical prowess with practical skill, crafting solutions that redefine possibility."
    >
      <div className="space-y-20">
        <SpeakingSection title="Work Experience">
          <WorkAppearance
            href=""
            title= "University of Oklahoma"
            position = "Graduate Research Assistant"
            description="
            Worked as a full-stack developer on a website to automate Oklahoma housing assessment for Oklahoma Housing Finance Agency (OHFA).
            "
            event="Jan 2023 - present"
            responsibilities={[
              "Designed and implemented a robust database architecture for assessing housing needs, ensuring data storage, retrieval efficiency, and scalability.",
              "Built and optimized an ETL process to fetch demographic and housing data from the Census Bureau, transforming and dumping it into the database for reliable analysis.",
              "Developed dynamic front-end interfaces using Angular, focusing on data visualization and user interaction for effective housing assessment data presentation.",
              "Engineered back-end components with PHP and MariaDB, ensuring data integrity, efficient query processing, and seamless integration for complex data operations.",
              "Integrated the ArcGIS JavaScript API for advanced data representation on geographical maps, facilitating intuitive analysis based on spatial data trends in housing needs."
            ]}
          />
          <WorkAppearance
            href=""
            title= "Cognizant Technology Solutions"
            position = "Programmer Analyst"
            description="
            Worked as a backend developer on a railway assets maintainance website for a UK based client.
            "
            event="Jan 2021 - Dec 2022"
            responsibilities={[
              "Designed and deployed over a dozen Python APIs using Azure Functions, focusing on optimal functionality and user experience, with extensive code testing for stable performance.",
              "Enhanced API security with JWT authentication and integrated with Azure API Management (APIM) for efficient exposure and scalability.",
              "Developed an innovative data processing workflow using Azure Logic App, prioritizing smooth data ingestion and significantly boosting processing efficiency through automation.",
              "Adapted Azure Logic App for handling large data volumes, establishing robust monitoring and logging for consistent operation and simplified troubleshooting.",
              "Initiated the creation of a custom Python library with utility aids, business logic calculations, and advanced data access and authorization methods.",
              "Ensured seamless integration of the custom Python library with existing systems and continuously revised it to meet evolving business needs and technological progress."
            ]}
          />
        </SpeakingSection>
        
        <SpeakingSection title="Education">
          <Education
            href=""
            title="University of Oklahoma"
            location='Norman, OK'
            course="Master's in Data Science & Analytics"
            event="Jan 2023 - Dec 2024 (Expected)"
            gpa="GPA: 3.89 / 4.0"
            activities={[
              "Working as a Graduate Research Assistant for the Department of Electrical and Computer Engineering",
              "Member of OU Cricket Club and OU DSA Club"
              ]}
              coursework={[
                "Advanced Database Management Systems",
                "Intelligent Data Analytics",
                "Machine Learning",
                "Healthcare Analytics",
                "Advanced Analytics & Metaheuristics"
              ]}
          />
          <Education
            href=""
            title="Jawaharlal Nehru Technological University"
            location='Kakinada, India'
            course="Bachelor's in Computer Science & Engineering"
            event="2016 - 2020"
            gpa="GPA: 3.27 / 4.0"
            activities={[
              "Platinum Member of the College's Research and Development Cell and mentored 7 teams in developing school automation system",
              "Technical Coordinator for annual college festival for 2 consecutive years",
              "Coordinator for department's weekly association activities"
            ]}
            coursework={[
              "Advanced Data Structures",
              "Web Technologies",
              "Design & Analysis of Algorithms",
              "Java Programming",
              "Data Warehousing and Mining",
              "Big Data Analysis",
              "Cloud Computing"
            ]}
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
