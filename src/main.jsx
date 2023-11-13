import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './components/toReal/App'
import MonetaryConverter from './components/monetaryConverter/MonetaryConverter.jsx'
import MetricConverter from './components/metricConverter/MetricConverter.jsx'
import TemperatureConverter from './components/temperatureConverter/TemperatureConverter.jsx'
import MundialConverter from './components/mundialConverter/MundialConverter.jsx'
import './index.css'

const router = createBrowserRouter([
  {
      path: "/",
      element: < App/>,
      children: [
        {
          path: "/",
          element: <MonetaryConverter />,
        },
        {
          path: "/metric-converter",
          element: <MetricConverter />,
        },
        {
          path: "/temperature-converter",
          element: <TemperatureConverter />,
        },
        {
          path: "/global-converter",
          element: <MundialConverter />,
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)