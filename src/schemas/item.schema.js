import {z} from 'zod'

export const createItemSchema = z.object({
  iid: z.string({required_error: "iid is required"}),
  sku: z.string().optional(),
  name: z.string({required_error: "Name is required"}),
  description: z.string().optional(),
  img_front: z.string().optional(),

  category: z.string().optional(),
  licence: z.string().optional(),
  price: z.number().int().optional(),
  stock: z.number().int().optional(),
})

export const updateItemSchema = z.object({
  iid: z.string().optional(),
  sku: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  img_front: z.string().optional(),
  // img_back: z.object().optional(),
  category: z.string().optional(),
  licence: z.string().optional(),
  price: z.number().int().optional(),
  stock: z.number().int().optional(),
})

