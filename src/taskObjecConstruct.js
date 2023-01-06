class Task {
    constructor(name, tag, dueDate, iD) {
        this.name = name;
        this.tag = tag;
        this.dueDate = dueDate;
        this.iD = iD; //*point to id generator
        this.status = false; //*test if false is a valid default value
    }
};

export {Task}
