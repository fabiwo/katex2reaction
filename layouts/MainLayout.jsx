import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='w-full h-3 bg-gradient-to-r from-purple-400 to-purple-500'></div>
      <Navbar />
      <main>
        <div className='flex flex-col items-center justify-center mx-auto space-y-5'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
