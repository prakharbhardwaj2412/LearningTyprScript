const a = "1";
console.log('aaa', a);

// ======================VARIABLES in TS======================
let hello: string = "world";
hello = "5"


// ======================FUNCTION in TS=============================
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}
console.log(getFullName("Prakhar", "Bhardwaj"));


// ======================OBJECTS in TS==========================
const user: UserInterface = {
    name: "Prakhar",
    age: 30,
    getMessage() {
        return "Hello" + name;
    }
}
const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello" + name;
    }
}
console.log(user.age);


// ======================INTERFACE in TS==========================
interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string
}


// ======================UNION & TYPE ALIAS in TS===========================
let pageName: string | number = '1';

let errorMessage: string | null = null;

type ID = string
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface newUserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonTag: MaybePopularTag = 'dragon';
let user3: newUserInterface | null = null;


// ======================VOID in TS==================
const doSomething = (): void => {
    console.log("doSomething");
    // return "doSomething"
}
let foo: void = undefined;
// foo = "foo";


// ======================ANY In TS======================
let faa: any = "faa"
// console.log(faa.bar());


// ======================NEVER IN TS====================
const doSmthng = (): never => {
    throw "never";
}


// ======================UNKNOWN in TS & TYPE ASSERTION==================
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;

// console.log(vAny.foo());
// console.log(vUnknown.foo());


// ======================WORKING WITH DOM==========================
const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log('someElement', (someElement as any).value);
// console.log('someElement', someElement.value);

// someElement.addEventListener('blur', (event) => {
//     const target = event.target as HTMLInputElement;
//     // console.log('event', target.value);

// })


// ======================CLASSES in TS===============================
interface UserInterface2 {
    getFullname(): string;
}
class User implements UserInterface2 {
    firstName: string;
    lasteName: string;
    readonly unchangableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lasteName = lastName;
        this.unchangableName = firstName
    }

    getFullname(): string {
        return this.firstName + ' ' + this.lasteName
    }
}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const user4 = new User("Prakhar", "Bhardwaj")
console.log(user4);
console.log(User.maxAge);

const admin = new Admin("Foo", "Bar")

// ======================GENERICS in TS===========================
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    }
}

interface UserInterface3<T, V> {
    name: string;
    data: T;
    meta: V;
}

const user5: UserInterface3<{ meta: string }, string> = {
    name: 'Jack',
    data: {
        meta: "foo",
    },
    meta: "bar",
}

const user6: UserInterface3<string[], string> = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: "hello",
}
// const result = addId<UserInterface3>(user5);
// console.log('result', result);


// =========================================================
const searchStr = "foo";
// const hasSearchedString = any<string>((el: string) => el.contains(searchStr), ["fooooo", "bar", "baz"])


// ======================ENUMS in TS==========================
const statuses = {
    notStarted: 0,
    inProgress: "in progress",
    done: 2
}

console.log(statuses.inProgress);

enum StatusEnum {
    NotStarted,
    InProgress,
    Done
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
