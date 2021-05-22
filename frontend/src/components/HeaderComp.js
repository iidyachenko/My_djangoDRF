import React from 'react'
import AuthorList from "./User";


const HeaderComp = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Главная</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a href="#"
                           className="nav-link">
                            Контакты
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComp