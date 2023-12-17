import { Router } from "express";
import { tokenRequired } from "../middlewares/validateToken.js";
import { getAll, getOne, postOne, putOne, deleteOne } from '../controllers/item.controller.js'
import { validateSchema } from "../middlewares/validateFields.js";
import { upload } from "../middlewares/storage.js";
import { createItemSchema, updateItemSchema } from "../schemas/item.schema.js";

const router = Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', tokenRequired, validateSchema(createItemSchema), /*upload.single('image'),*/ postOne)
router.put('/:id', tokenRequired, validateSchema(updateItemSchema), putOne)
router.delete('/:id', tokenRequired, deleteOne)

export default router;