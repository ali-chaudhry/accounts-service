
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateMessegeInput {
    text?: Nullable<string>;
}

export interface UpdateMessegeInput {
    id?: Nullable<string>;
    text?: Nullable<string>;
}

export interface CreateUserInput {
    id?: Nullable<string>;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    id: string;
}

export interface Messege {
    id?: Nullable<string>;
}

export interface ISubscription {
    createMessege(createMessegeInput: CreateMessegeInput): Messege | Promise<Messege>;
    updateMessege(updateMessegeInput: UpdateMessegeInput): Messege | Promise<Messege>;
    removeMessege(id: string): Nullable<Messege> | Promise<Nullable<Messege>>;
}

export interface User {
    id?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    deleted?: Nullable<boolean>;
}

export interface IQuery {
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    updateUser(input?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    removeUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
