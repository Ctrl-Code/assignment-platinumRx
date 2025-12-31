'use client'

import { ModelContext } from "@/app/contexts"
import { useContext, useEffect, useMemo, useRef } from "react"
import { Product } from "@/app/types"
import { PrimaryButton } from "../button"
import Image from "next/image"

type ModalProps = {
    products: Product[],
}

export const Modal: React.FC<ModalProps> = ({ products }) => {
    const modelContext = useContext(ModelContext)
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleClose = () => {
        dialogRef.current?.close()
        modelContext?.setData({})
    }

    const productData: Partial<Product> | null = useMemo(() => {
        const id = modelContext?.data?.id;
        return products.find(item => item.id === id) || null
    }, [modelContext?.data?.id, products])

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;
        if (modelContext?.data?.id) {
            // Check if already open to avoid redundant calls
            if (!dialog.open) dialog.showModal();
        }
        else { dialog.close(); }
    }, [modelContext?.data?.id])

    return <dialog
        ref={dialogRef}
        className="m-auto bg-cyan-950 p-6 w-90vw md:w-3/4 lg:w-1/2 h-min-content rounded-lg text-white backdrop:bg-black/50  border-solid"
        onCancel={handleClose} // Handles closing via 'Esc' key
    >
        {productData?.id && (
            <section className="flex flex-col gap-2.5">
                <h2>{productData?.name}</h2>
                <Image
                    src={productData?.image as string}
                    alt={`Cover art for ${productData?.name ?? ''}`}
                    // fill
                    height={200}
                    width={200}
                    className="object-cover"
                />
                <p>{productData?.description ?? ''}</p>
                <p>Price - {productData?.price ?? ''}</p>
                <p>Manufacturer - {productData?.manufacturer ?? ''}</p>
            </section>
        )}
        <form method="dialog" className="mt-5">
            <PrimaryButton
                label="Close"
                ariaLabel="Close Dialog"
                onClick={handleClose}
            />
        </form>
    </dialog >
}