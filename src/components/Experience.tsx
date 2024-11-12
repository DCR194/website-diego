import React from 'react';
import { BuildingIcon, CalendarIcon } from '../components/icons';

const Experience = () => {
  const experiences = [
    {
      company: 'University of Toronto Open Source Society',
      position: 'Firefox Contributor',
      period: 'Sep 2024 - Present',
      description: `Contributed to Firefox development by fixing two bugs, improving browser functionality.
      Assisted members in setting up development environments, addressing cross-platform setup differences and OS-specific requirements.
      Maintained a progress-tracking system in Google Sheets to monitor contributions and project milestones.
      Currently developing a custom Firefox extension to further contribute to the open-source community.`,
    },
    {
      company: 'University of Toronto',
      position: 'Student Research Fellow',
      period: 'May 2024 - Aug 2024',
      description: `Researched and sourced components for the redesign of a power IGBT driver board, optimizing part selection in Altium and phasing out obsolete components.
      Led workshops for 30+ second-year engineering students, teaching CAD design, microprocessor programming, and advanced circuit prototyping.
      Revised and updated lab manuals for four courses, ensuring clarity and accuracy in technical documentation for lab equipment like oscilloscopes, function generators, and multimeters.`
    },
    {
      company: 'Nimbus Digital Transformations',
      position: 'Web Developer',
      period: 'Jul 2023 - Aug 2023',
      description: `Developed and integrated Create, Read, and Update operations for efficient data management in an AWS backend.
      Designed and implemented dynamic, responsive HTML/CSS components in Figma, ensuring adaptability across devices and screen sizes.
      Collaborated in weekly Agile sprints, presenting progress on AWS integration, React development, responsive design, and version control with Git.`,
    },
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <BuildingIcon />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <CalendarIcon />
                <span>{exp.period}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;