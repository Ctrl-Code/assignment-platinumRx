interface ProductCategory {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Product {
    created_at: string;
    description: string;
    id: string;
    image: string;
    manufacturer: string;
    name: string;
    price: number;
    product_category: ProductCategory;
    product_category_id: string;
    updated_at: string;
}
