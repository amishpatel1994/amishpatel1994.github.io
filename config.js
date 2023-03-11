import React from 'react'
import { Icon } from '@iconify/react';
import pytorchIcon from '@iconify/icons-logos/pytorch';
import reactIcon from '@iconify/icons-logos/react';
import tensorflowIcon from '@iconify/icons-logos/tensorflow';
import phoenixIcon from '@iconify/icons-logos/phoenix';
import iotPlatform from '@iconify/icons-carbon/iot-platform';


export default {
  authorName: 'Amish',
  heading: 'Software Engineer',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/amishpatel1994',
    },
    {
      icon: 'fa-linkedin',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/amish-patel-a558a364/',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:av2patel94@gmail.com',
    },
  ],
  experiences: [
    {
      title: 'Senior Software Developer',
      organization: 'theScore, Inc.',
      link: 'https://www.thescore.com/',
      date: 'Sep 2021 - present',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Continued efforts on adding new enhancements to the promotions engine with a focus on technical leadership, mentoring, observability, and performance optimizations',
      skills: ['Elixir', 'Phoenix', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Apache Airflow', 'DBT', 'RedShift', 'GCP', 'JIRA', 'GitHub', 'Docker', 'CircleCI', 'DataDog', 'Splunk']
    },
    {
      title: 'Software Developer',
      organization: 'theScore, Inc.',
      link: 'https://www.thescore.com/',
      date: 'Jan 2021 - Sep 2021',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Designed and implemented promotions engine for theScore Bet Platform',
      skills: ['Elixir', 'Phoenix', 'PostgreSQL', 'Apache Kafka', 'GCP', 'JIRA', 'GitHub', 'Docker', 'CircleCI', 'DataDog', 'Splunk']
    },
    {
      title: 'Data Scientist Intern',
      organization: 'Geotab',
      link: 'https://www.geotab.com/',
      date: 'May 2020 - December 2020',
      location: 'Oakville, ON',
      type: 'work',
      description: 'Collision detection research and building ML pipeline around it',
      skills: ['Airflow', 'BigQuery', 'Redash', 'Facets', 'Tensorflow 2', 'plotly', 'sklearn', 'django']
    },
    {
      title: 'Student Researcher',
      organization: 'The Hospital for Sick Children',
      link: 'https://www.sickkids.ca/',
      date: 'Feb 2020 - May 2020',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Classifying multiple sclerosis using OCT (Optical Coherence Tomography) scans',
      skills: ['pyTorch', '3D CNN', 'Denoising Autoencoder']
    },
    {
      title: 'Teaching Assistant',
      organization: 'University of Toronto',
      link: 'https://www.utoronto.ca/',
      date: 'Sep 2019 - Apr 2020',
      location: 'Toronto, ON',
      type: 'work',
      description: 'TA for Introduction to Programming in Python',
      skills: ['Python', 'Mentor']
    },
    {
      title: 'Master of Science in Applied Computing (MScAC)',
      organization: 'University of Toronto',
      link: 'https://www.utoronto.ca/',
      date: 'Sep 2019 - Dec 2020',
      location: 'Toronto, ON',
      type: 'education',
      description: 'Learning Machine Learning from some of the best in the world! :D',
      skills: ['Machine Learning', 'Blockchain', 'Dynamic A/B testing', 'Neural Networks', 'ML for health']
    },
    {
      title: 'Full Stack Engineer',
      organization: 'theScore, Inc.',
      link: 'https://www.thescore.com/',
      date: 'Jun 2017 - Sep 2019',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Designed and implemented core API microservices for theScore and theScore Bet',
      skills: ['Phoenix', 'Ruby on Rails', 'PostgreSQL', 'React+Redux', 'AMP HTML', 'ElasticSearch', 'Redis', 'AWS', 'JIRA', 'CircleCI', 'GitHub']
    },
    {
      title: 'BASc. in Computer Engineering with Distinction',
      organization: 'University of Waterloo',
      link: 'https://uwaterloo.ca/',
      date: 'Sep 2012 - Apr 2017',
      location: 'Waterloo, ON',
      type: 'education',
      description: 'Learning CS fundamentals with some hardware based courses',
      skills: ['Distributed Computing', 'Databases', 'Programming for Performance', 'Data Structures & Algorithms', 'Embedded Systems']
    },
    {
      title: 'Software Engineering Intern',
      organization: 'theScore, Inc.',
      link: 'https://www.thescore.com/',
      date: 'Sep 2016 - Dec 2016',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Developed RESTful API for theScore app. and developed notifications service for Cricket',
      skills: ['Ruby on Rails', 'Rspec', 'MySQL', 'AWS', 'JIRA', 'CircleCI', 'GitHub']
    },
    {
      title: 'Software Engineering Intern',
      organization: 'FiveStars',
      link: 'https://www.fivestars.com/',
      date: 'Sep 2015 - Dec 2015',
      location: 'San Francisco, CA',
      type: 'work',
      description: 'Designed and implemented core customer facing table application',
      skills: ['Cordova', 'AngularJS', 'bootstrap', 'CSS', 'bower', 'grunt', 'django', 'GitHub']
    },
    {
      title: 'Software Engineering Intern',
      organization: 'FarmLogs',
      link: 'https://farmlogs.com/',
      date: 'Jan 2015 - Apr 2015',
      location: 'Ann Arbor, MI',
      type: 'work',
      description: 'Implemented front-end components for the core FarmLogs web application',
      skills: ['BackboneJS', 'ReactJS', 'bower', 'grunt', 'LESS', 'MustacheJS', 'GitHub']
    },
    {
      title: 'Software Developer Intern',
      organization: 'Ontario Institute for Cancer Research',
      link: 'https://oicr.on.ca/',
      date: 'May 2014 - Aug 2014',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Implemented console software to automatically provision clusters',
      skills: ['Perl', 'Bash Scripting', 'Cloud Computing', 'GitHub', 'Ansible']
    },
    {
      title: 'Software QA Analyst',
      organization: 'NexJ Systems',
      link: 'https://www.nexj.com/',
      date: 'Sep 2013 - Dec 2013',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Devleoped test cases and performed automated and manual testing',
      skills: ['Telerik Test Studio']
    },
    {
      title: 'iOS App. Developer',
      organization: 'Mohawk college - iDeaWORKS',
      link: 'https://www.mohawkcollege.ca/ideaworks',
      date: 'Jan 2013 - Apr 2013',
      location: 'Toronto, ON',
      type: 'work',
      description: 'Developed an iPhone application called The Lup which helps patients with lupus keep track of their progress',
      skills: ['Objective-C', 'JIRA', 'Git']
    }
  ],
  projects: [
    {
      title: 'Spaced Repetition',
      description: 'Built to keep track of review tasks using the concept of spaced repetition',
      date: 'Aug 2020',
      type: 'Chrome Extension - Personal Project',
      mainIcon: <Icon icon={reactIcon} />,
      gitLink: 'https://github.com/amishpatel1994/SpacedRepetition',
      demoLink: 'https://chrome.google.com/webstore/detail/spacedrepetition/iplpbaappjaabjkaihgjhlkimfolcdgp',
      memoriesLink: '',
      skills: ['reactjs', 'chrome-extension', 'reactstrap', 'css']
    },
    {
      title: 'Hyperparameter Analysis for Image Captioning',
      description: 'Conducted experiments with two different architectures for image captioning: CNN-based enoder + Attention-based LSTM Decoder and CNN encoder + Transformer Decoder',
      date: 'Feb 2020 - Apr 2020',
      type: 'Deep Learning - Research Project',
      mainIcon: <Icon icon={pytorchIcon} />,
      gitLink: 'https://github.com/aravindvarier/Image-Captioning-Pytorch',
      demoLink: '',
      memoriesLink: '',
      skills: ['pyTorch', 'CNN', 'LSTM', 'Attention', 'Transformers']
    },
    {
      title: 'Github Stats',
      description: 'Web application that shows all the repositories watched by a particular user',
      date: 'Feb 2020',
      type: 'Web Application - Personal Project',
      mainIcon: <Icon icon={phoenixIcon} />,
      gitLink: 'https://github.com/amishpatel1994/githubstats',
      demoLink: '',
      memoriesLink: '',
      skills: ['Phoenix', 'Elixir']
    },
    {
      title: 'Bitcoin Price Prediction',
      description: 'Performed time-series forecasting using BiDirectional LSTM network',
      date: 'Dec 2019',
      type: 'Deep Learning - Research Project',
      mainIcon: <Icon icon={tensorflowIcon} />,
      gitLink: 'https://github.com/amishpatel1994/BitcoinPricePrediction',
      demoLink: 'https://github.com/amishpatel1994/BitcoinPricePrediction/blob/master/price_prediction.ipynb',
      memoriesLink: '',
      skills: ['Tensorflow', 'LSTM']
    },
    {
      title: 'MuscleMix',
      description: 'Generates randomized workouts based on the muscle groups you want to work on for the day',
      date: 'Dec 2018 - Sep 2019',
      type: 'React Native - Personal Project',
      mainIcon: <Icon icon={reactIcon} />,
      gitLink: '',
      demoLink: 'https://apps.apple.com/gb/app/muscle-mix/id1457276561?fbclid=IwAR3S7pHQlEjSTgZnCoTdnK_v6LR-qofYPS3XqkECrj4NDprV8ceDCN14X_g',
      memoriesLink: 'https://www.linkedin.com/feed/update/urn:li:activity:6580622501087457280/',
      skills: ['React Native', 'Redux-Saga']
    },
    {
      title: 'Voice',
      description: 'Sign to Speech Translation glove performed using accelerometer+flex sensors, phone, and arduino',
      date: 'May 2016 - Apr 2017',
      type: 'Wearable - Fourth Year Design Project',
      mainIcon: <Icon icon={iotPlatform} />,
      gitLink: 'https://github.com/3browns1asian',
      demoLink: '',
      memoriesLink: 'https://www.instagram.com/p/BR9naG8hIhAOkGfl6r8rRErU1wbpI9ZIAJ8gP80/',
      skills: ['Arduino', 'Android Development', 'Machine Learning', 'sklearn', 'flask']
    }
  ]
};
