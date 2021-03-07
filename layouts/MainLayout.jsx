import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='w-full h-3 bg-gradient-to-r from-purple-400 to-purple-500'></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
