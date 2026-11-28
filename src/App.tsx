import { Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage lang="pt" />} />
      <Route path="/en" element={<HomePage lang="en" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
