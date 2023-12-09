export default class TaskServiceImpl {
  private tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }
}
