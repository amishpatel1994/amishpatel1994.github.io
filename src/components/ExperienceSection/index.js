import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import StarIcon from '@material-ui/icons/Star'
import { Typography } from '@material-ui/core'
import 'react-vertical-timeline-component/style.min.css';
import config from '../../../config';
import './index.scss';

export default function() {
  const renderSkillBadges = (skills) => {
    return skills.map((skill) => (
      <Typography variant="body2" className="skill-badge">
        {skill}
      </Typography>
    ))
  }

  const renderTimelineElement = (experience) => {
    if(experience.type === 'work') {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#86b2d6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #86b2d6' }}
          date={experience.date}
          iconStyle={{ background: '#86b2d6', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{experience.organization} - {experience.location}</h4>
          <Typography variant="subtitle1">{experience.description}</Typography>
          <div className="skills-container">{ renderSkillBadges(experience.skills) }</div>
        </VerticalTimelineElement>
      )
    } else {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#f9b9a3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #f9b9a3' }}
          date={experience.date}
          iconStyle={{ background: '#f9b9a3', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{experience.organization} - {experience.location}</h4>
          <Typography variant="subtitle1">{experience.description}</Typography>
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

      <VerticalTimeline>
        {
          config.experiences.map((experience) => (renderTimelineElement(experience)))
        }
        <VerticalTimelineElement
          iconStyle={{ background: '#3bff80', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  )}