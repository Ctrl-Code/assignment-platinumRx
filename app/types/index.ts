export type {Product} from './product-data'

export type UnknownObject = {
    [key: string]: UnknownObject | string | number | null
}