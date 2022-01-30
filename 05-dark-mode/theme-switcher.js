const doc = document.getElementsByTagName('html')[0]
const light = document.getElementById('light')
const dark = document.getElementById('dark')

const themeSwitcher = theme => {
  if (theme == 'light') {
    light.style.display = 'none'
    dark.style.display = 'block'
    doc.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark')
    return
  }

  light.style.display = 'block'
  dark.style.display = 'none'
  doc.classList.remove('dark-mode')
  localStorage.setItem('theme', 'light')
}

light.addEventListener('click', () => themeSwitcher('light'))
dark.addEventListener('click', () => themeSwitcher('dark'))

if (localStorage.getItem('theme')) {
  themeSwitcher(localStorage.getItem('theme') == 'dark' ? 'light' : 'dark')
}

if (!localStorage.getItem('theme')) {
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? themeSwitcher('light')
    : themeSwitcher('dark')
}
