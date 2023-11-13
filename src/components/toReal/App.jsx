import { Outlet } from 'react-router-dom'

function addStarsBackground(){
  const bodyTag = document.getElementById('bodyTag')

  bodyTag.classList.toggle('starsBackground')
}

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export { App, addStarsBackground }