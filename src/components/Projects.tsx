import React from 'react';
import { ExternalLinkIcon, GithubIcon } from '../components/icons';
import undyne from '/assets/unfairUndyne.png'
import homeServer from '/assets/homeServer.png'
import flowFields from '/assets/flow_fields.png'

const Projects = () => {
  const projects = [
    {
      title: 'Unfair Undyne',
      description: 'A two-player game inspired by a minigame from Undertale. One player shoots arrows at a heart while the other blocks them with a shield.',
      image: undyne,
      tech: ['C', 'Git', 'Nios II Assembly', 'Intel monitor program'],
      links: {
        demo: '',
        github: 'https://github.com/DCR194/unfairUndyne',
      },
    },
    {
      title: 'Home Server',
      description: 'A restored an HP EliteDesk 800 running Debian Linux. It blocks ads, serves as network attached storage, and hosts this web page.' ,
      image: homeServer,
      tech: ['NodeJs', 'Debian', 'Bash', 'Tailscale'],
      links: {
        demo: '',
        github: '',
      },
    },
    {
      title: 'Flow fields',
      description: 'A particle simulation that generates flow fields on the screen based on noise-driven angles, leaving a fading trail of its past positions. ',
      image: flowFields,
      tech: ['JavaScript', 'Linear Algebra', 'Object Oriented Programming', 'Algorithms'],
      links: {
        demo: '/assets/flow_fields/index.html',
        github: 'https://github.com/DCR194/flow_fields',
      },
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-55 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">


                {project.links.demo != '' &&

                  <a
                  href={project.links.demo}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  target='_blank'
                  >
                  <ExternalLinkIcon />
                  Demo
                </a>
                }

                {project.links.github != '' &&

                  <a
                  href={project.links.github}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  target='_blank'
                  >
                  <GithubIcon />
                  Code
                </a>
                }


              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;