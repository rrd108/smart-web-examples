const doc = document.getElementsByTagName('html')[0]
const light = document.querySelector('#light')
const dark = document.querySelector('#dark')

const themeSwitcher = theme => {
  if (theme == 'light') {
    light.style.display = 'none'
    dark.style.display = 'block'
    return doc.classList.add('dark-theme')
  }
  doc.classList.remove('dark-theme')
  light.style.display = 'block'
  dark.style.display = 'none'
}

light.addEventListener('click', () => themeSwitcher('light'))
dark.addEventListener('click', () => themeSwitcher('dark'))
