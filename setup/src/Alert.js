import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
   // se deja dependencia vacia para q inicie cuando se renderice el componente, que en este caso es Alert => cada q salga el alert salta este
   useEffect(() => {
      const timeout = setTimeout(() => {
         removeAlert(); //va a ocupar los valores default
      }, 3000);

      return () => clearTimeout(timeout);
   }, [list]);

   return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
