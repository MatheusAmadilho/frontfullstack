import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroAnimal } from './Telas/CadastroAnimal'

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro-animal' element={<CadastroAnimal />} />
            </Routes>
        </BrowserRouter>
    )
}