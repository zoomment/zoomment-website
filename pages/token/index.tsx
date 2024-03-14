import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

const Token = () => {
  useEffect(() => {
    if (window?.parent) {
      window.parent.postMessage({
        sender: 'zoomment',
        token: getCookie('token'),
      });
    }
  }, []);

  return null;
};

export default Token;
