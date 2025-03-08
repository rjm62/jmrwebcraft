import {createContext, useState} from 'react'

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
    const [pageChoosen, setPageChoosen] = useState("presentations")
    const [selection, setSelection] = useState(0)
    const [animation, setAnimation] = useState(true)
    const [seenAnimation, setSeenAnimation] = useState(false)

    return (
        <DataContext.Provider value ={{ pageChoosen, setPageChoosen, selection, setSelection,animation, setAnimation, seenAnimation, setSeenAnimation }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider