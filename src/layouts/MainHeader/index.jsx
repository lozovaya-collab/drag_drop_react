import { React } from "react";

import { Button } from '../../components'

const MainHeader = () => {
    return (
        <header>
            <div className="header">
                <h1>TO DO APP</h1>
                <Button>ВЫХОД</Button>
            </div>
        </header>
    )
}

export { MainHeader }