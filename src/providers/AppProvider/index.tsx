'use client'

import React, {ReactNode, useState} from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import dynamic from "next/dynamic";

type Props = {
    children?: ReactNode
}
const AntdProvider = dynamic(() => import('@/providers/AntdProvider'), {ssr: false})
export const AppProvider: React.FC<Props> = ({children}) => {
    console.log('v3.0.0')

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <AntdProvider>
                {children}
            </AntdProvider>
        </QueryClientProvider>
    )
}
