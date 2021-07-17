# personal-website

This is a my personal website source code. You can visit [madebyais.com](https://madebyais.com)

You can use this for you own personal website by following below steps.
 
### Getting Started

Before getting started, you can clone this project or run following command:

```bash
yarn create next-app --example https://github.com/madebyais/personal-website
```

Change the value of this variable in `pages/index.tsx` according to your preferences.

```
const profile = {
  fullname: 'Faris',
  nickname: 'Ais',
  occupation: 'fullstack software engineer',
  workingExperience: '10 years',
  currentPosition: 'System Engineer',
  company: 'GoTo Financial (GoTo Group - known before as GoJek Group)',
  location: 'Jakarta, Indonesia',
  technology: {
    primary: [
      'Go', 'Typescript', 'Javascript', 'Python', 'Java', 'Shell script', 'ReactJS', 
      'NextJS', 'HTML5', 'CSS3', 'PostgreSQL', 'MongoDB', 'Redis', 'GRPC', 'REST Api', 
      'WebSocket', 'Prometheus', 'Grafana'
    ],
    secondary: [
      'Docker', 'Kubernetes', 'Nginx', 'HAProxy', 'Terraform', 'Ansible', 'Google Cloud Platform', 
      'Amazon Web Services', 'Digital Ocean', 'Monolithic', 'Microservices', 'Distributed Systems'
    ]
  },
  interest: [
    'Stock analysis using Python', 'Blockchain'
  ],
  social: [
    { type: 'linkedin', url: 'https://www.linkedin.com/in/farisf/' },
    { type: 'twitter', url: 'https://twitter.com/madebyais' },
    { type: 'github', url: 'https://github.com/madebyais' }
  ]
}
```


And run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Author

[Ais](https://github.com/madebyais)