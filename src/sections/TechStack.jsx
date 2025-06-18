import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import { iconsList } from '../constants'
import TechIcon from '../components/TechIcon'
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 80, category: "frontend", image: "/images/html.svg" },
  { name: "CSS", level: 80, category: "frontend", image: "/images/css.svg" },
  { name: "JavaScript", level: 70, category: "frontend", image: "/images/js.svg" },
  { name: "TypeScript", level: 20, category: "frontend",image: "/images/ts.svg" },
  { name: "React", level: 65, category: "frontend",image: "/images/react.svg" },
  { name: "Tailwind CSS", level: 55, category: "frontend",image: "/images/tailwind.svg" },
  { name: "Bootstrap", level: 70, category: "frontend",image: "/images/bootstrap.svg" },
  { name: "Twig", level: 60, category: "frontend",image: "/images/twig.svg" },

  // Backend
  { name: "Node.js", level: 50, category: "backend",image: "/images/nodejs.svg" },
  { name: "Express.js", level: 35, category: "backend",image: "/images/expressjs.svg" },
  { name: "PHP", level: 65, category: "backend",image: "/images/php.svg" },
  { name: "Symfony", level: 75, category: "backend",image: "/images/symfony.svg" },
  { name: "REST API", level: 75, category: "backend",image: "/images/api.svg" },
  { name: "GraphQL", level: 20, category: "backend",image: "/images/graphql.svg" },
  { name: "C", level: 50, category: "backend",image: "/images/c.png" },
  { name: "Python", level: 60, category: "backend",image: "/images/python.svg" },

  // Database
  { name: "MySQL", level: 80, category: "database",image: "/images/mysql.svg" },
  { name: "PostgreSQL", level: 70, category: "database",image: "/images/postgresql.svg" },
  { name: "MongoDB", level: 50, category: "database",image: "/images/mongodb.svg" },
  { name: "Firebase", level: 50, category: "database",image: "/images/firebase.svg" },

  // DevOps / Tools
  { name: "Git / GitHub / Gitlab", level: 95, category: "tools", image: "/images/git.svg" },
  { name: "Docker", level: 75, category: "tools", image: "/images/docker.svg" },
  { name: "Kubernetes", level: 50, category: "tools", image: "/images/kubernetes.svg" },
  { name: "Figma", level: 75, category: "tools", image: "/images/figma.svg" },
  { name: "VS Code", level: 85, category: "tools", image: "/images/vscode.svg" },
  { name: "Postman", level: 70, category: "tools", image: "/images/postman.svg" },
  { name: "Photoshop", level: 80, category: "tools", image: "/images/photoshop.svg" },
  { name: "Illustrator", level: 80, category: "tools", image: "/images/illustrator.svg" },

  // Mobile Development
  { name: "Swift", level: 65, category: "mobile",image: "/images/swift.svg" },
  { name: "Xcode", level: 60, category: "mobile",image: "/images/xcode.svg" },

  // System / Infrastructure
  { name: "Active Directory", level: 70, category: "infra",image: "/images/ad.svg" },
  { name: "JAMF (MDM)", level: 65, category: "infra",image: "/images/jamf.svg" },

  // CI/CD
  { name: "Jenkin", level: 50, category: "CI/CD",image: "/images/jenkins.svg" },
  { name: "Ansible", level: 35, category: "CI/CD",image: "/images/ansible.svg" },
  { name: "Terraform", level: 35, category: "CI/CD",image: "/images/terraform.svg" },

];


const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "mobile",
  "CI/CD",
  "tools",
  "infra",
];


const TechStack = () => {

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  function getCategoryBgClass(category) {
    switch (category) {
      case "frontend":
        return "bg-black-300";
      case "backend":
        return "bg-sky-500/10";
      case "database":
        return "bg-yellow-500/10";
      case "mobile":
        return "bg-purple-500/10";
      case "tools":
        return "bg-pink-100/10";
      case "infra":
        return "bg-gray-100/10";
      case "softskills":
        return "bg-orange-100/10";
      case "CI/CD":
        return "bg-red-100/10";  
      default:
        return "bg-neutral-100"; // fallback màu nền trung tính
    }
  };  

  return (
    <> 
      <div className='w-full h-full'>
        <div className="">
          <div className="container mx-auto md:p-0 px-5">
            <TitleHeader 
              title="TECH STACK" 
              number="03"
              text="My Go-To Tools for Crafting Solutions"
            />
          </div>
          <div className="md:mt-20 mt-10 relative">
              <div className="marquee h-52">
                  <div className="marquee-box md:gap-12 gap-5">
                      {iconsList.map((icon, index) => (
                          <TechIcon key={index} icon={icon} />
                      ))}
                      {iconsList.map((icon, index) => (
                          <TechIcon key={index} icon={icon} />
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </div>

      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-semibold text-lg",
                activeCategory === category
                  ? "bg-blue-50 text-primary-foreground text-white"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                getCategoryBgClass(skill.category),
                "p-6 rounded-lg shadow-xs card-hover"
              )}
            >

              <div className="flex justify-between items-center mb-8">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                <img className="md:size-7 size-6" src={skill.image} alt="arrowup" />
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-50 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default TechStack
