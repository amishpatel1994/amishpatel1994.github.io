import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import config from '../../config';
import { Icon } from '@iconify/react';
import baselineWork from '@iconify/icons-ic/baseline-work';
import baselineSchool from '@iconify/icons-ic/baseline-school';
import starFill from '@iconify/icons-bi/star-fill';


export default function() {
  const renderSkillBadges = (skills) => {
    return skills.map((skill) => (
      <p className="skill-badge">
        {skill}
      </p>
    ))
  }

  const renderTimelineElement = (project) => {
    if(project.type === 'work') {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#86b2d6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #86b2d6' }}
          date={project.date}
          iconStyle={{ background: '#86b2d6', color: '#fff' }}
          icon={<Icon icon={baselineWork} />}
        >
          <h3 className="vertical-timeline-element-title">{project.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{project.organization} - {project.location}</h4>
          <p className="vertical-timeline-element-description">{project.description}</p>
          <div className="skills-container">{ renderSkillBadges(project.skills) }</div>
        </VerticalTimelineElement>
      )
    } else {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#f9b9a3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #f9b9a3' }}
          date={project.date}
          iconStyle={{ background: '#f9b9a3', color: '#fff' }}
          icon={<Icon icon={baselineSchool} />}
        >
          <h3 className="vertical-timeline-element-title">{project.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{project.organization} - {project.location}</h4>
          <p className="vertical-timeline-element-description">{project.description}</p>
          <div className="skills-container">{ renderSkillBadges(project.skills) }</div>
        </VerticalTimelineElement>
      )
    }
  }
  return (
    <div className="container">
      <header>
        <h2>Projects</h2>
      </header>

      <VerticalTimeline layout="1-column">
        {
          config.projects.map((project) => (renderTimelineElement(project)))
        }
        <VerticalTimelineElement
          iconStyle={{ background: '#8ebebc', color: '#fff' }}
          icon={<Icon icon={starFill} />}
        />
      </VerticalTimeline>
    </div>
  )}