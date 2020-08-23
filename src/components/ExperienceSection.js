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
      <p className="skill-badge" key={skill}>
        {skill}
      </p>
    ))
  }

  const renderTimelineElement = (experience) => {
    if(experience.type === 'work') {
      return (
        <VerticalTimelineElement key={`${experience.title}-${experience.organization}`}
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#86b2d6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #86b2d6' }}
          date={experience.date}
          iconStyle={{ background: '#86b2d6', color: '#fff' }}
          icon={<Icon icon={baselineWork} />}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{experience.organization} - {experience.location}</h4>
          <p className="vertical-timeline-element-description">{experience.description}</p>
          <div className="skills-container">{ renderSkillBadges(experience.skills) }</div>
        </VerticalTimelineElement>
      )
    } else {
      return (
        <VerticalTimelineElement key={`${experience.title}-${experience.organization}`}
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#f9b9a3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #f9b9a3' }}
          date={experience.date}
          iconStyle={{ background: '#f9b9a3', color: '#fff' }}
          icon={<Icon icon={baselineSchool} />}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{experience.organization} - {experience.location}</h4>
          <p className="vertical-timeline-element-description">{experience.description}</p>
          <div className="skills-container">{ renderSkillBadges(experience.skills) }</div>
        </VerticalTimelineElement>
      )
    }
  }
  return (
    <div className="container">
      <header>
        <h2>Work & Education</h2>
      </header>

      <VerticalTimeline layout="1-column">
        {
          config.experiences.map((experience) => (renderTimelineElement(experience)))
        }
        <VerticalTimelineElement key="experience-start"
          iconStyle={{ background: '#8ebebc', color: '#fff' }}
          icon={<Icon icon={starFill} />}
        />
      </VerticalTimeline>
    </div>
  )}