import {Router} from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuth } from "./middlewares/isAuth";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig  from './config/multer'
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrdedrController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./temp"))

//--ROTAS USER
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

router.post('/category', isAuth, new CreateCategoryController().handle)

router.get('/category', isAuth, new ListCategoryController().handle)

//-- ROTAS PRODUCTS
router.post('/product', isAuth, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuth, new ListByCategoryController().handle)

//--ROTAS ORDER
router.post('/order', isAuth, new CreateOrderController().handle)
router.delete('/order', isAuth, new RemoveOrderController().handle)
router.post('/item', isAuth, new AddItemController().handle)
router.delete('/item/remove', isAuth, new RemoveItemController().handle)
router.put('/order/send', isAuth, new SendOrderController().handle)
router.get('/orders', isAuth, new ListOrderController().handle)
router.get('/orders/details', isAuth, new DetailOrderController().handle)
router.put('/order/finish', isAuth, new FinishOrderController().handle)

export {router};
