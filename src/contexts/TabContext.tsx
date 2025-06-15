import { createContext, ReactNode, useContext, useState } from 'react';

type TabType = 'links' | 'profileDetails';

interface TabContextType {
    currentTab: TabType;
    setCurrentTab: (tab: TabType) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
    children: ReactNode;
}

export const TabProvider = ({ children }: TabProviderProps) => {
    const [currentTab, setCurrentTab] = useState<TabType>('links');

    return (
        <TabContext.Provider value={{ currentTab, setCurrentTab }}>
            {children}
        </TabContext.Provider>
    );
};

export const useTab = () => {
    const context = useContext(TabContext);
    if (context === undefined) {
        throw new Error('useTab must be used within a TabProvider');
    }
    return context;
}; 