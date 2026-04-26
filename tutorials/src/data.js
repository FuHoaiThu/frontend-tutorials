import LoginForm from './components/forms/LoginForm.vue'
import RegistrationForm from './components/forms/RegistrationForm.vue'

export const sidebarItems = [
  {
    name: 'Home',
    id: 0,
    icon: 'fa-solid fa-house',
    path: '/',
  },
  {
    name: 'Forms',
    id: 1,
    icon: 'fa-brands fa-wpforms',
    path: '/forms',
  },
]
export const formFields = [
  {
    id: 0,
    title: 'Make a login form for beginner',
    description: 'A basic HTML/CSS form practice. Inspired by the source listed below.',
    source: 'https://www.youtube.com/watch?v=QNEAcqjxHJs&t=18s',
    sourceName: 'YouTube - DarkCode',
    component: LoginForm,
  },
  {
    id: 1,
    title: 'Create a registration form',
    description:
      'An intermediate form practice with more complex styling and additional fields. Inspired by the source listed below.',
    source: 'https://www.youtube.com/watch?v=6ja2jIsYtcA',
    sourceName: 'YouTube - DarkCode',
    component: RegistrationForm,
  },
]
