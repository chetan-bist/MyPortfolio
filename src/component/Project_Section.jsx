export default function Project_Section(){
    const projects = [
    {
      title: "iSmart Hotel",
      description:
        "A hotel management system built using Java and Spring. Includes room booking, customer management, and more.",
      image: "https://img.freepik.com/free-vector/hotel-management-concept-illustration_114360-4715.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubLink: "https://github.com/chetan-bist/Emp-Management-System"
    },
    {
      title: "Portfolio Website",
      description:
        "This personal portfolio website built using React and Tailwind CSS.",
      image: "https://img.freepik.com/free-vector/web-design-concept-illustration_114360-4724.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubLink: "https://github.com/chetan-bist/Emp-Management-System"
    }
  ];
    return(
       <section id="Projects" className="px-8 py-16 bg-white animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
          <div className="border rounded-xl p-6 shadow-md bg-[#f3f1ee] hover:scale-105 transition">
             <img
                src={project.image}
                 alt={project.title}
                 className="mb-4 rounded-xl w-full h-48 object-cover"
               />
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-[#5d5a58] mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#151412] text-white px-4 py-2 rounded hover:bg-[#3b3a38]"
                >
                  Watch Video
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5d5a58] text-white px-4 py-2 rounded hover:bg-[#3b3a38]"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
             </div>
      </section>
          
      //   <section id="projects" className="px-8 py-16 bg-[#f3f1ee] animate-fade-in">
      //   <h3 className="text-3xl font-semibold mb-6">Projects</h3>
      //   <div className="grid md:grid-cols-2 gap-8">
      //     {projects.map((project, index) => (
      //       <div
      //         key={index}
      //         className="border rounded-xl p-6 shadow-md bg-white block hover:shadow-lg transition hover:scale-105"
      //       >
      //         <img
      //           src={project.image}
      //           alt={project.title}
      //           className="mb-4 rounded-xl"
      //         />
      //         <h4 className="text-xl font-bold mb-2">{project.title}</h4>
      //         <p className="text-sm text-[#5d5a58] mb-4">{project.description}</p>
      //         <div className="flex gap-4">
      //           <a
      //             href={project.youtubeLink}
      //             target="_blank"
      //             rel="noopener noreferrer"
      //             className="bg-[#151412] text-white px-4 py-2 rounded hover:bg-[#3b3a38]"
      //           >
      //             Watch Video
      //           </a>
      //           <a
      //             href={project.githubLink}
      //             target="_blank"
      //             rel="noopener noreferrer"
      //             className="bg-[#5d5a58] text-white px-4 py-2 rounded hover:bg-[#3b3a38]"
      //           >
      //             View Code
      //           </a>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </section>
    )
}