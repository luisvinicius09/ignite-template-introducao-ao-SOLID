import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;

  name: string;

  admin = false;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
