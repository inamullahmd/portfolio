import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-4">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description: 'My Programming Playground: Languages, Tools, and the Perfect Setup',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Programming Playground: Languages, Tools, and the Perfect Setup."
      intro=" I want to share the tools and tricks that keep me creative and productive. We&lsquo;ll dive into the programming languages I love, explore the tools that streamline my workflow, and finally, peek at the setup that fuels my coding sessions. Buckle up, and let&lsquo;s get nerdy!"
    >
      <div className="space-y-20">
        <ToolsSection title="Programming Languages">
          <Tool title="Python">
            Python has been my go-to for the past four years, empowering my journey through backend development, predictive modeling, and ETL processes. It&lsquo;s not just a language; it&lsquo;s my toolkit for turning ideas into reality.
          </Tool>
          <Tool title='SQL'>
            I&lsquo;ve used SQL since my undergraduate years, mastering it for web development and data analysis. Skilled in MS SQL, MySQL, SQLite, and MariaDB, I rely on SQL for crafting complex queries and managing data efficiently, whether for dynamic websites or detailed data analysis tasks.
          </Tool>
          <Tool title="R">
            R serves as a valuable alternative to Python in my toolkit, especially when I require intensive statistical analysis and visualization capabilities. 
          </Tool>
          <Tool title="PHP">          
            Currently, I&lsquo;m working with PHP, specifically developing RESTful APIs for a website I&lsquo;m working on for a state housing agency.
          </Tool>
          <Tool title="Java">          
            I used Java during my bachelor&lsquo;s degree while developing websites for my college. Although I haven&lsquo;t used it much since then, I still know my way around it.
          </Tool>          
        </ToolsSection>

        <ToolsSection title="Web Technologies">
          <Tool title="HTML, CSS and JavaScript">
            I rely heavily on HTML, CSS, and JavaScript. These languages form the backbone of modern web development, allowing me to create dynamic and interactive user interfaces.
          </Tool>
          <Tool title='Bootstrap CSS and Tailwind CSS'>
            I choose Bootstrap for projects requiring speed and consistency, while I opt for Tailwind CSS when I need more control over the design and want to create a highly customized look and feel.
          </Tool>
          <Tool title="Angular JS and React JS">
            I used AngularJS for the housing website, leveraging its capabilities for creating dynamic and interactive features. For this portfolio, I opted for ReactJS to craft reusable UI components, highlighting its simplicity and efficiency in building fast, scalable web interfaces.
          </Tool>   
        </ToolsSection>

        <ToolsSection title="Cloud">
          <Tool title="Microsoft Azure">
          I&lsquo;ve used Microsoft Azure extensively, particularly during my time at Cognizant. My experience includes working with Azure Functions, Logic Apps, Azure Storage, APIM, and Redis Cache, as well as Azure DevOps, VMs, Web Apps, and Identity Management.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Tools">

          <Tool title="Microsoft VS Code">            
            VS Code is best due to its versatility, vast extension ecosystem, and seamless integration with various languages and tools, making it a top choice for development of all kinds.
          </Tool>
          <Tool title="Tableau and PowerBI">
            I prefer PowerBI for its seamless integration with other Microsoft products, which aligns well with my workflow. However, I appreciate Tableau&lsquo;s robust features and intuitive interface, making it my go-to for complex analytics and interactive dashboard creation.
          </Tool>
          <Tool title="Microsoft Office Suite">
            I don&lsquo;t need a bunch of different programs for different tasks.  Office suites let me write, calculate, and present, all in one place!
          </Tool>
          <Tool title='Git and GitHub'>
            Never fear a messy codebase again! Git and GitHub keep my projects organized, letting me rewind mistakes and collaborate effortlessly with my team.
          </Tool>
          <Tool title='Postman'>
            Postman is an absolute game-changer for anyone who works with APIs. It&lsquo;s like a Swiss Army knife for developers, letting you build, test, and document APIs with ease.
          </Tool>
          <Tool title="Notepad++">
            Notepad++ is my coding right-hand man. It colors my code for easy reading and lets me automate tasks and compare files like a coding ninja.
          </Tool>

        </ToolsSection>

        <ToolsSection title="Workstation">
          <Tool title="14” HP, AMD Ryzen 5 5500U, 16GB RAM (2021)">
          I do most of my work on my trusty home PC. But when I need to be on the move, my laptop&lsquo;s my sidekick – perfect for travel, work, and the occasional presentation. Portable power at its best!
          </Tool>
          <Tool title="The Beast Unleashed: My Intel Core i7-14700K, 32GB RAM, RTX 4070 Powerhouse">
          This beast handles almost all my work, from coding marathons to data crunching. With this setup, I can run anything, from hardcore computations to intensive graphic rendering, without breaking a sweat. This is where the magic happens!
          </Tool>
          <Tool title="Dell 32” LED Curved QHD FreeSync Gaming Monitor">
          This 32&quot; curved beauty is where I visualize all my projects. With QHD resolution and FreeSync technology, it ensures every detail is crisp and every motion smooth, making it perfect for coding, designing, and gaming alike. This monitor brings my work to life!
          </Tool>
          <Tool title="Razer Blackwidow V4 Keyboard & Razer Basilisk V3 Mouse">
          Meet my dynamic duo, the Razer Blackwidow V4 keyboard, and the Razer Basilisk V3 mouse. They&lsquo;re not just peripherals; they&lsquo;re my partners in productivity and gaming glory. With the Blackwidow&lsquo;s tactile feedback and the Basilisk&lsquo;s precision, every task becomes an adventure!
          </Tool>
          <Tool title="Elevated Throne: GOTMINSI Gaming Chair & Claiks Electric Standing Desk">
          My GOTMINSI Gaming Chair is my throne, providing comfort and support for long gaming sessions. Paired with the Claiks Electric Standing Desk, I can seamlessly transition from sitting to standing, ensuring I stay energized and focused throughout the day. 
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
