import React from 'react'
import LangElement from "./LangElement";
import PropTypes from 'prop-types'

const LangList = (items) => {
    return(
        <ul>
            {items.langs.map((lang, index) => {
                return <LangElement item={lang} />
            })},
            <button className="rm" onClick={items.reset.bind(null)}>
                <strong id="butt"> Reset </strong>
            </button>
        </ul>
    )
}

LangList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default LangList