import React, { useEffect } from 'react';

function KommunicateChat() {
    useEffect(() => {
        if (!window.kommunicate) {
            (function (d, m) {
                var kommunicateSettings = {
                    appId: 'f41427c0bcc6e4f06044ef01d8bced3e',
                    popupWidget: true,
                    automaticChatOpenOnNavigation: true,
                };
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
                var h = document.getElementsByTagName('head')[0];
                h.appendChild(s);
                window.kommunicate = m;
                m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        }
    }, []);

    return <div></div>;
}

export default KommunicateChat;
