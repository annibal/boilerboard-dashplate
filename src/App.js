import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AppMenu from './components/AppMenu/AppMenu'
import AppContent from './components/AppContent/AppContent'
import AppRouter from './components/AppRouter/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppMenu />
        <AppContent>
          <AppRouter />
        </AppContent>
      </Layout>
    </BrowserRouter>
  )
}

export default App;