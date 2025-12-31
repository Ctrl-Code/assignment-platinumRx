'use client'

import { createContext, PropsWithChildren, useState } from "react";
import { Product } from '@/app/types';

type ProductCard_Null = {
    data: Product
    setData: (x: Partial<Product>) => void
} | null

export const ModelContext = createContext<ProductCard_Null>(null)

export const ModelContextWrapper = ({ children }: PropsWithChildren) => {
    const [modelData, setModelData] = useState<Product | null>(null)

    return <ModelContext value={{ data: modelData, setData: setModelData } as ProductCard_Null}>
        {children}
    </ModelContext>
}