import { Outlet } from 'react-router-dom'

const bodyTag = document.getElementById('bodyTag')

function addStarsBackground(){
  bodyTag.classList.toggle('starsBackground')
}

function addFireBackground(){
  bodyTag.classList.toggle('fireBackground');
}

function addCoinsBackground(){
  bodyTag.classList.toggle('coinsBackground');
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

export { App, addStarsBackground, addFireBackground, addCoinsBackground }