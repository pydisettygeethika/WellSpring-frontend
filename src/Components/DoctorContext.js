// DoctorContext.js
import React, { createContext, useContext, useState } from 'react';

const DoctorContext = createContext();

export const useDoctor = () => {
    return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }) => {
    const [doctor, setDoctor] = useState(null);

    return (
        <DoctorContext.Provider value={{ doctor, setDoctor }}>
            {children}
        </DoctorContext.Provider>
    );
};
