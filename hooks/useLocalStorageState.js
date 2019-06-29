import {useState, useEffect} from "react"

function useLocalStorageState(key, initialValue) {
    // make a state based on localStorage value or dafaultValue
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(initialValue)
            );
        } catch (e) {
            value = initialValue
        }
        return value;
    });
    // update the localStorage when the state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    // returns a state and a function to set that state
    return [state, setState];
}
export default useLocalStorageState;

/*
 Usage examples:
 
 const [language, setLanguage] = useLocalStorageState("language", "portuguese")
 const [todos, setTodos] = useLocalStorageState("todos", [])
 const [mood, setMood] = useLocalStorageState("mood", "happy")
 */