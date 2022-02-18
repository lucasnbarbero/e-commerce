import { Application } from "express";
import CommonRoutes from "./common.routes";
import CreateUserAction from "../actions/user/create.user.action";
import DeleteUserAction from "../actions/user/delete.user.action";
import ListUserAction from "../actions/user/list.user.action";
import UpdateUserAction from "../actions/user/update.user.action";

class UserRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, "User");
  }

  setUpRoutes(): Application {
    this.app.get('/users', ListUserAction.run);
    
    this.app.post('/users', CreateUserAction.run);
    
    this.app.put('/users/:id', UpdateUserAction.run);

    this.app.delete('/users/:id', DeleteUserAction.run);

    return this.app;
    
  }
}

export default UserRoutes;
