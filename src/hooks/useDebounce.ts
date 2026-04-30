import { useState, useEffect } from "react"

export const useDebounce = <T,>(value: T, delay: number): T => {
    const [debounceVal, setDebounceVal ] = useState<T>(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceVal(value)
            
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [value, delay])

    return debounceVal;

}