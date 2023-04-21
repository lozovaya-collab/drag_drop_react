import { React } from "react";

import { Button } from '../../components'

const MainHeader = () => {
    return (
        <header>
            <div className="header">
                <h1>TO DO APP (REACT)</h1>
                <Button classNameOut="header__button">ВЫХОД</Button>
            </div>
        </header>
    )
}

export { MainHeader }