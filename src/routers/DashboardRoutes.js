import { Navbar } from "../components/ui/Navbar"
import { Route,Routes, useNavigate } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import HeroScreen from "../components/hero/HeroScreen"

const DashboardRoutes = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                </Routes>
            </div>
        </>

    )
}

export default DashboardRoutes
