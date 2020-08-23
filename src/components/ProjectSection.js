import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import config from '../../config';
import { Icon } from '@iconify/react';
import starFill from '@iconify/icons-bi/star-fill';
import SkillBadges from './SkillsBadges';
import githubIcon from '@iconify/icons-logos/github-icon';


export default function() {
  return (
    <div className="container">
      <header>
        <h2>Projects</h2>
      </header>
      <VerticalTimeline layout="1-column">
        {
          config.projects.map((project) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#8ebebc', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #8ebebc' }}
              date={project.date}
              iconStyle={{ background: '#8ebebc', color: '#fff' }}
              icon={project.mainIcon}
            >
              <h3 className="vertical-timeline-element-title">{project.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{project.type}</h4>
              <p className="vertical-timeline-element-description">{project.description}</p>
              <div className="skills-container">
                <SkillBadges skills={project.skills} />
              </div>
              <div className="demo-container">
                {project.demoLink.length > 0 && <a target="_blank" rel="noopener noreferrer" href={project.demoLink}>Demo!</a> }
                {project.memoriesLink.length > 0 && <a target="_blank" rel="noopener noreferrer" href={project.memoriesLink}>Memories!</a>}
                {project.gitLink.length > 0 && <a target="_blank" rel="noopener noreferrer" href={project.gitLink}><Icon icon={githubIcon} /> </a>}
              </div>
            </VerticalTimelineElement>
          ))
        }
        <VerticalTimelineElement
          iconStyle={{ background: '#8ebebc', color: '#fff' }}
          icon={<Icon icon={starFill} />}
        />
      </VerticalTimeline>
    </div>
  )}