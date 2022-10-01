import { useCallback, useState } from 'react';

export function useMessageData () {
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState();

    return {
        message,
        isSuccess,
        setMessage: useCallback(msg => {
            setIsSuccess(msg.isSuccess || false);
            setMessage(msg.message);
        }, []),
        clearMessage: useCallback(() => {
            setIsSuccess(false);
            setMessage(undefined);
        }, []),
    };
}
