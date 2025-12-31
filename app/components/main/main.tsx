'use client'

import { Product } from "@/app/types";
import { ProductCard } from "../product-card"
import { useContext, useState } from "react";
import { ModelContext } from "@/app/contexts";

export default function Main({ products }: { products: Product[] }) {
    const modelContext = useContext(ModelContext)

    const [activeIndex, setActiveIndex] = useState(0)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
        const handleArrow = (caseKey: 'ArrowUp' | 'ArrowDown') => {
            e.preventDefault()
            const newIdx = (caseKey === 'ArrowUp'
                ? (activeIndex - 1 + products.length) % products.length
                : (activeIndex + 1)) % products.length;
            const parent = e.currentTarget
            const childToFocus = parent.children[newIdx] as HTMLElement
            setActiveIndex(newIdx)
            childToFocus?.focus();
        }
        const id = products[activeIndex].id
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                handleArrow(e.key)
                break;
            case 'Enter':
            case ' ': // spacebar
                e.preventDefault()
                modelContext?.setData({
                    id
                })
        }
    }

    return <main className="w-[90%]">
        <ul onKeyDown={handleKeyDown}>
            {
                products.map((data, idx) => <li key={data.id}
                    className="mb-5" tabIndex={idx === activeIndex ? 0 : -1}
                    data-id={data.id}
                >
                    <ProductCard  {...data} />
                </li>)
            }
        </ul>
    </main>
}