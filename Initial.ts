interface Task {
    title: string;
    priority: number;
    completed: boolean;
}

class TaskManager {
    private tasks: Task[] = [];

    addTask(title: string, priority: number): void {
        this.tasks.push({
            title,
            priority,
            completed: false
        });
    }

    completeTask(title: string): void {
        const task = this.tasks.find(task => task.title === title);

        if (task) {
            task.completed = true;
        }
    }

    sortByPriority(): void {
        this.tasks.sort((a, b) => b.priority - a.priority);
    }

    printReport(): void {
        console.log("Task Report");
        console.log("===========");

        for (const task of this.tasks) {
            const status = task.completed ? "Completed" : "Pending";

            console.log(
                `${task.title} | Priority: ${task.priority} | ${status}`
            );
        }

        console.log("===========");
        console.log(`Total Tasks: ${this.tasks.length}`);
        console.log(
            `Completed: ${this.tasks.filter(task => task.completed).length}`
        );
    }
}

const manager = new TaskManager();

manager.addTask("Build website", 5);
manager.addTask("Write documentation", 3);
manager.addTask("Fix bugs", 4);
manager.addTask("Deploy application", 5);

manager.completeTask("Build website");
manager.completeTask("Fix bugs");

manager.sortByPriority();
manager.printReport();