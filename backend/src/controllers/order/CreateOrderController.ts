import { Request, Response } from "express";
import { CreatOrderService } from "../../services/order/CreatOrderService";

class CreateOrderController{
    async handle(req: Request, res: Response){
        const { table, name} = req.body;

        const createOrder = new CreatOrderService();

        const order = await createOrder.execute({
            table,
            name
        })

        return res.json(order);
    }
}

export {CreateOrderController}