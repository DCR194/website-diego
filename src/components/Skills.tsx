import React from 'react';
import { CodeIcon, DatabaseIcon, ChipIcon, PersonIcon } from '../components/icons';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon />,
      skills: ['C/C++', 'Python', 'Matlab', 'HTML', 'JavaScript', 'CSS', 'Assembly'],
    },
    {
      title: 'Dev Tools',
      icon: <DatabaseIcon />,
      skills: ['Docker', 'Linux', 'ZSH', 'Git', 'SSH', 'ufw', 'AWS', 'React', 'Figma'],
    },
    {
      title: 'Hardware',
      icon: <ChipIcon />,
      skills: ['STM32', 'Arduino', 'Altium', 'Quartus Prime', 'Verilog', 'LTSpice', 'Modelsim'],
    },
    {
      title: 'Soft Skills',
      icon: <PersonIcon />,
      skills: ['Communication', 'Research', 'Organization', 'Teamwork', 'Adaptability', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;