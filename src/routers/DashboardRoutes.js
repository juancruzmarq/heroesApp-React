import { Routes, Route } from "react-router-dom";
import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreens } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from "../components/hero/HeroeScreen";

export const DashboardRoutes = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelScreens />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="heroe/:heroId" element={<HeroeScreen />} />
            <Route path="/" element={<MarvelScreens />} />
        </Routes>
        </div>
    </div>
  )
}
