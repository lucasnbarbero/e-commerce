import { Router } from "express";


import listUserAction from "../actions/user/list.user.action";
import createUserAction from "../actions/user/create.user.action";


class UserRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', listUserAction.run)
    this.router.post('/', createUserAction.run)
  }

}

const userRouter = new UserRouter();
export default userRouter.router;
