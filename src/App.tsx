import React from 'react'
import './style/style.css'
import HomePage from './pages/HomePage'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

const App: React.FC = () => (
  <div className="min-h-screen text-2xl font-bold text-black bg-white duration-200 dark:bg-black dark:text-white">
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default App
