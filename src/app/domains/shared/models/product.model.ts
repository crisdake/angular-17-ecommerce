import { Category } from "./category.model"

export interface Product {
  id: number
  title: string
  description ?: string
  price: number
  image: string[]
  CreationAt ?: string
  category: Category
}
