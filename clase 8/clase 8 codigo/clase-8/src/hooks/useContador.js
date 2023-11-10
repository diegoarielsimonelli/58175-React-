import { useState } from 'react';

// Custom hook para gestionar un contador
export function useContador(initialValue) {
    const [contador, setContador] = useState(initialValue);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    const resetear = () => {
        setContador(initialValue);
    };

    return { contador, incrementar, decrementar, resetear };
}


