import PageHeader from '@/components/headers/PageHeader.vue'
import NavBar from '@/components/headers/NavBar.vue'
import ResponsiveNavBar from '@/components/headers/ResponsiveNavBar.vue'

const pageHeaders = [
  {
    id: 0,
    title: 'Easy page header',
    description: 'How to create an easy page header using HTML and CSS.',
    source: 'https://www.youtube.com/watch?v=LGKrTYEnjy0',
    sourceName: 'YouTube - DarkCode',
    component: PageHeader,
  },
  {
    id: 1,
    title: 'Nav Bar',
    description: 'How to create a navbar using HTML and CSS.',
    source: 'https://www.youtube.com/watch?v=zfeFgGROkSg',
    sourceName: 'YouTube - DarkCode',
    component: NavBar,
  },
  {
    id: 2,
    title: 'Reponsive Nav Bar',
    description: 'How to make a responsive navigation bar with only HTML & CSS.',
    source: 'https://www.youtube.com/watch?v=zc74kYaOZSs',
    sourceName: 'YouTube - DarkCode',
    component: ResponsiveNavBar,
  },
]
export default pageHeaders
