'use client'

import Image from "next/image";
import { useContext } from "react";
import { ModelContext } from "@/app/contexts";
import { Product } from "@/app/types";

export default function ProductCard({
    id,
    name,
    price,
    description,
    image,
}: Product) {
    const modelContext = useContext(ModelContext)

    const handleClick = () => {
        modelContext?.setData({
            id
        })
    }
    return (
        <article className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all flex items-center border-solid cursor-pointer"
            onClick={handleClick}
        >
            {/* 3.4 & 3.5 Performance & Accessibility: next/image for lazy loading and alt text */}
            <div className="relative h-48 p-5 grid">
                <Image
                    src={image}
                    alt={`Cover art for ${name}`}
                    // fill
                    priority
                    height={200}
                    width={200}
                    className="object-cover place-self-center"
                    sizes="200px"
                />
            </div>

            <div className="flex-1 p-4 max-w-3/4">
                {/* Semantic Heading for SEO */}
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
                <span className="text-green-400 font-mono text-lg">${price}</span>

            </div>
        </article>
    );
}
