
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateMessageInput {
    text?: Nullable<string>;
}

export interface UpdateMessageInput {
    id?: Nullable<string>;
    text?: Nullable<string>;
}

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UpdateUserInput {
    id: string;
}

export interface Message {
    id?: Nullable<string>;
}

export interface ISubscription {
    createMessage(createMessageInput: CreateMessageInput): Message | Promise<Message>;
    updateMessage(updateMessageInput: UpdateMessageInput): Message | Promise<Message>;
    removeMessage(id: string): Nullable<Message> | Promise<Nullable<Message>>;
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
