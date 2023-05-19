// theme
import theme from '@/utils/mui/theme';

import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

// providers
import { ThemeProvider } from '@mui/material/styles';
import AuthProvider from './auth';
import ReactQueryProvider from './queryClient';

export interface IProvidersProps {
    children: ReactNode;
    dehydrateState: DehydratedState;
}

export default function Providers({ children, dehydrateState }: IProvidersProps) {
    return (
        <ReactQueryProvider dehydrateState={dehydrateState}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </ReactQueryProvider>
    );
}