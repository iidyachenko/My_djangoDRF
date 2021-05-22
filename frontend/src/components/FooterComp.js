import React from 'react'
import AuthorList from "./User";


const FooterComp = () => {
    return (
        <div className="footer_block">
            <div className="footer_contacts">
                <ul className="footer_list">
                    <li className="footer_list_el">A. Разработчки: Дьяченко Игорь</li>
                    <li className="footer_list_el">T. +7 777 777 77 77</li>
                    <li className="footer_list_el">E. some_mail@mail.ru</li>
                </ul>
                <div className="footer_copywrite">
                    <p className="simple_text copy_txt">Все права защищены &copy; </p>
                </div>
            </div>
        </div>
    )
}

export default FooterComp