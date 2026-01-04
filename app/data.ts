type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type TalkPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: '졸업작품',
    description:
      'ㅈㄴ 힘들었다.',
    link: 'https://jae-ill.com',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: '경성대학교',
    title: '건축학과',
    start: '2019',
    end: 'Present',
    link: 'https://www.ksa.ac.kr/',
    id: 'work1',
  }, 
]

export const TALK_POSTS: TalkPost[] = [
  {
    title: '졸업 작품 발표',
    description: '졸업 작품 발표 후 전시 및 수상',
    link: 'https://www.jae-ill.com/',
    uid: 'talk-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jaeill12',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jaeill-Heo',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/_j._.11',
  },
]

export const EMAIL = 'jaiil2001@naver.com'
