import React from 'react';
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import DisplayUser from './pages/DisplayUser';
import DisplayUsers from './pages/DisplayUsers';

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<DisplayUsers />} />
        <Route path='/user/:id' element={<DisplayUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster
        position="bottom-center" />
    </Layout>
  )
}
