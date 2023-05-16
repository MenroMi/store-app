// theme
import theme from '@/utils/mui/theme';

import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

// providers
import AuthContextProvider from './AuthContextProvider';
import ReactQueryProvider from './ReactQueryProvider';
import { ThemeProvider } from '@mui/material/styles';

export interface IProvidersProps {
    children: ReactNode;
    dehydrateState: DehydratedState;
}

export default function Providers({ children, dehydrateState }: IProvidersProps) {
    return (
        <ReactQueryProvider dehydrateState={dehydrateState}>
            <AuthContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AuthContextProvider>
        </ReactQueryProvider>            
    );
}