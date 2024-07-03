import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});

const FormWrapper = ({ children, ...rest }) => {
    const methods = useForm({ ...rest });
    return <FormProvider {...methods}>{children}</FormProvider>;
};

export const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <QueryClientProvider client={queryClient} >
            <FormWrapper>
                {children}
            </FormWrapper>
        </QueryClientProvider>
    )
};