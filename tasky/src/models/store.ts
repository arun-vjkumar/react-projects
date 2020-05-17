import Dexie from 'dexie';

export enum TodoStatus {
    COMPLETED = "COMPLETED",
    IN_PROGRESS = "IN_PROGRESS"
}

export interface ITodo {
    id?: number;
    uName: string;
    name: string;
    description: string;
    heading: string;
    status: TodoStatus;
}

export interface IUser {
    id?: number;
    "uName": string;
    "pwd": string;
}

export class AppDatabase extends Dexie {
    public static appDatabase: AppDatabase | null = null;
    public todos: Dexie.Table<ITodo, string>;
    public users: Dexie.Table<IUser, string>;

    private constructor() {
        super("AppDatabase")
        this.version(1).stores({
            todos: "++id, uName, name, description, heading",
            users: "++id, uName, password"
        })

        this.todos = this.table("todos")
        this.users = this.table("users")
    }

    public static getRepo(): AppDatabase {
        return AppDatabase.appDatabase || (AppDatabase.appDatabase = new AppDatabase())
    }

    public addUser(user: IUser): Promise<string> {
       return this.users.add(user)
    }

    public getUser(uName: string): Promise<IUser | undefined> {
        return this.users.get({uName: uName})
    }

    public getAllUser(): Promise<IUser[] | undefined> {
        return this.users.toArray();
    }

    async deleteAllUser() {
        await this.users.clear();
    }

    public addToDo(todo: ITodo) {
        return this.todos.add(todo);
    }

    async getAllTodos(): Promise<ITodo[]> {
        return await this.todos.toArray();
    }
}

