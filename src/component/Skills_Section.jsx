export default function Skill_Section(){
    const skills = [
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      url: "https://tailwindcss.com"
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      url: "https://www.oracle.com/java/"
    },
    {
      name: "Spring",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      url: "https://spring.io"
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      url: "https://www.figma.com"
    }
  ];
    return(
         <section id="skills" className="px-8 py-16 bg-white animate-fade-in">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#151412]">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-3 hover:scale-105 transition-transform">
              <a href={skill.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                {skill.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
}