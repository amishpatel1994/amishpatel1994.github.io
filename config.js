module.exports = {
  siteTitle: 'Amish Patel', // <title>
  manifestName: 'Portfolio',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/portfolio/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Amish',
  heading: 'Software Engineer | Data Scientist',
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
      title: 'Data Scientist Intern',
      organization: 'Geotab',
      link: 'https://www.geotab.com/',
      date: 'May 2020 - present',
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
      title: 'Software Engineer Intern',
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

  ]
};
