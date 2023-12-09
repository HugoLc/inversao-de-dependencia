export interface TaskService {
  addTask: (task: string) => void;
  getTasks: () => string[];
}

export default class TaskServiceImpl implements TaskService {
  private tasks: string[] = [];
  addTask(task: string) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }
}
