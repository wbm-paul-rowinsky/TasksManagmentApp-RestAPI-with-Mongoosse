import * as Task from "../models/task.model.js";

export class TasksController {
  constructor() {
    this.init();
  }
  async init() {
    //this.tasks = await Task.getAll();
  }

  async getAll() {
    return await Task.getAll();
  }
  async getById(id) {
    return await Task.getTaskById(id);
  }
  async deleteById(id) {
    const result = await Task.deleteTaskById(id);

    if (result && result.deletedCount > 0) {
      return { deleted: true, deletedCount: result.deletedCount };
    } else {
      return { deleted: false, deletedCount: 0 };
    }
  }
}
