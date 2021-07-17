import { Tag } from "antd";
import Image from "next/image";

export default function Home() {
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
      'Stock market analysis using Python', 'Blockchain'
    ],
    social: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/farisf/' },
      { type: 'twitter', url: 'https://twitter.com/madebyais' },
      { type: 'github', url: 'https://github.com/madebyais' }
    ]
  }

  return (
    <div className={`p-10 pt-20 text-lg md:p-32`}>
      <div className={`text-left`}>
        <Image alt={'My profile picture'} src={`/assets/images/profile-pic.jpg`} width={150} height={150} className={`rounded-full`} />

        <div className={`mt-5`}>
          Hello, my name is {profile.fullname}. Also known as <strong>{profile.nickname}</strong>.
        </div>

        <div className={`mt-5`}>
          I&apos;m a <strong>{profile.occupation}</strong> with more than <strong>{profile.workingExperience}</strong> of experience.<br/>
        </div>

        <div className={`mt-5`}>
          I&apos;m currently working as <strong>{profile.currentPosition}</strong> at <strong>{profile.company}</strong> based in {profile.location}.
        </div>

        <div className={`mt-5`}>
          Experienced with several programming languages & technologies, such as:<br/>
          {profile.technology.primary.map((item, i) => (
            <Tag key={i}>{item}</Tag>
          ))}
        </div>

        <div className={`mt-5`}>
          I&apos;m so grateful that for the last {profile.workingExperience} of my software engineering journey, I&apos;m able to play & implement:<br/>
          {profile.technology.secondary.map((item, i) => (
            <Tag key={i}>{item}</Tag>
          ))}
        </div>

        <div className={`mt-5`}>
          My current interests and experiments are:<br/>
          {profile.interest.map((item, i) => (
            <Tag key={i}>{item}</Tag>
          ))}
        </div>

        <div className={`mt-5`}>
          You can drop me a message into my email at <a className={`font-bold mr-1`} href={`mailto:faris@monolog.id`}>faris@monolog.id</a>
          if you have any project or any questions. I would love to hear them. :)
        </div>

        <div className={`my-20`}>
          {profile.social.map((item, i) => (
            <SocialMediaLink key={i} type={item.type} href={item.url} />
          ))}
        </div>

        <div>Develop with ❤️ in Indonesia.</div>
        <div className={`text-xs mt-2`}>
          I make this personal website as an open-source project.<br/>
          You can use it by clicking this <a className={`font-bold underline`} href={`https://github.com/madebyais/personal-website`} target={`_blank`}>link</a> and follow its steps.
        </div>
      </div>
    </div>
  )
}

const SocialMediaLink = ({ type, href }: any) => (
  <a className={`mr-5`} href={href} target={`_blank`}>
    <i className={`fa fa-2x fa-${type}`} />
  </a>
)