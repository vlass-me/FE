import { useEffect, useRef, useCallback } from 'react';

type EventData = any; // Replace with the type of your event data

const useEventSource = (url: string) => {
    console.log('useEventSource')
    const callbackRef = useRef<((data: EventData) => void) | null>(null);
    const setCallback = (callback: (data: EventData) => void) => {
        callbackRef.current = callback;
    };

    const dataRef = useRef<EventData>(null);
    const eventSourceRef = useRef<EventSource | null>(null);

    const connect = useCallback(() => {
        console.log('try connect ' + url)
        if(url.includes('INVALID')){
            console.log('skip invalid url')
            return
        }
        // Close existing connection if it exists
        if (eventSourceRef.current) {
            eventSourceRef.current.close();
            eventSourceRef.current = null;
        }

        eventSourceRef.current = new EventSource(url);
        eventSourceRef.current.onopen = (event) => {
            console.log("open event source " + url)
            console.log(event)
        }
        eventSourceRef.current.onmessage = (event) => {
            // const newData = JSON.parse(event.data) as EventData;
            const newData = event.data
            if(newData == null || newData == '' || newData == undefined){
                return
            }
            dataRef.current = newData

            // Call the callback with the updated data
            callbackRef.current && callbackRef.current(dataRef.current);
        };

        eventSourceRef.current.onerror = (err: Event) => {
            console.error('EventSource failed:', err);
            
            // If the connection was lost, try to reconnect after 1 second
            if (eventSourceRef.current?.readyState === EventSource.CLOSED) {
                console.log('Connection lost. Reconnecting...');
            }
            setTimeout(connect, 1000);

            eventSourceRef.current?.close();
        };
    }, [url]);

    useEffect(() => {
        connect();

        return () => {
            eventSourceRef.current?.close();
        };
    }, [connect]);

    return { dataRef, setCallback };
};

export default useEventSource;

