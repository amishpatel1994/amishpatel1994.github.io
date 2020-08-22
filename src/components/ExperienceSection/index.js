import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import StarIcon from '@material-ui/icons/Star'
import 'react-vertical-timeline-component/style.min.css';
import config from '../../../config';

export default function() {
  const renderTimelineElement = (experience) => {
    if(experience.type === 'work') {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={experience.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
          <p>{experience.description}</p>
        </VerticalTimelineElement>
      )
    } else {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date={experience.date}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">{experience.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
          <p>{experience.description}</p>
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
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  )}