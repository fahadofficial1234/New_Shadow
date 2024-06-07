import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

const Twak = () => {
    const tawkMessengerRef = useRef();

    const handleMinimize =() => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"
                ref={tawkMessengerRef}/>
        </div>
    );
}
export default Twak