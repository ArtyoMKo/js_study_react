import React from 'react'
import Context from '../context'

const styles = {
    li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem'
        }
}

function LangElement({item}) {

    const {voteLang} = React.useContext(Context)

    return (
        <li style={styles.li}>
            <span>
                <strong>{item.vote}</strong>
                &nbsp;
                {item.title}
            </span>

            <button className="rm" onClick={voteLang.bind(null, item.id)}>
                <strong id="butt"> Click here </strong>
            </button>
        </li>
    )
}

export default LangElement