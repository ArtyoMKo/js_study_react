import React from 'react'
import LangList from "./vineti_comp";
import Context from "./context";

function VinetiReactExample() {

    const [langs, setLangs] = React.useState(
        [
        {id: 1, vote: 0, title: 'Php'},
        {id: 2, vote: 0, title: 'Python'},
        {id: 3, vote: 0, title: 'Java'},
        {id: 4, vote: 0, title: 'Ruby'},
        {id: 5, vote: 0, title: 'Go'},
    ])

    function voteLang(id) {
        setLangs(langs.map(lang => {
            if (id === lang.id) {
                lang.vote += 1
            }
            return lang
            }
        ))
    }

    function resetLangs() {
        setLangs(langs.map(lang => {
            lang.vote = 0
            return lang
        }))
    }

    return (
        <Context.Provider value={{voteLang}}>
            <div className='wrapper'>
                <h1>Vote Your Language!</h1>
                {
                    langs.length ? <LangList langs={langs} reset={resetLangs}/> : <p> langs = None</p>
                }
            </div>
        </Context.Provider>
    )
}

export default VinetiReactExample