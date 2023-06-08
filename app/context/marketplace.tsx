'use client';

import { createContext, useContext, useState } from "react";

const MarketplaceContext = createContext({})

export const MarketplaceContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [marketplacePrompt, setMarketplacePrompt] = useState({});

    return (
        <MarketplaceContext.Provider value={{ marketplacePrompt, setMarketplacePrompt }}>
            {children}
        </MarketplaceContext.Provider>
    )
};

export const useMarketplaceContext = () => useContext(MarketplaceContext);
