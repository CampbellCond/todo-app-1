// Code generated by Prisma (prisma@1.22.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  todo: (where?: TodoWhereInput) => Promise<boolean>;
  todoList: (where?: TodoListWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  todo: (where: TodoWhereUniqueInput) => TodoPromise;
  todoes: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Todo>;
  todoesConnection: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TodoConnectionPromise;
  todoList: (where: TodoListWhereUniqueInput) => TodoListPromise;
  todoLists: (args?: {
    where?: TodoListWhereInput;
    orderBy?: TodoListOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<TodoList>;
  todoListsConnection: (args?: {
    where?: TodoListWhereInput;
    orderBy?: TodoListOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TodoListConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTodo: (data: TodoCreateInput) => TodoPromise;
  updateTodo: (args: {
    data: TodoUpdateInput;
    where: TodoWhereUniqueInput;
  }) => TodoPromise;
  updateManyTodoes: (args: {
    data: TodoUpdateManyMutationInput;
    where?: TodoWhereInput;
  }) => BatchPayloadPromise;
  upsertTodo: (args: {
    where: TodoWhereUniqueInput;
    create: TodoCreateInput;
    update: TodoUpdateInput;
  }) => TodoPromise;
  deleteTodo: (where: TodoWhereUniqueInput) => TodoPromise;
  deleteManyTodoes: (where?: TodoWhereInput) => BatchPayloadPromise;
  createTodoList: (data: TodoListCreateInput) => TodoListPromise;
  updateTodoList: (args: {
    data: TodoListUpdateInput;
    where: TodoListWhereUniqueInput;
  }) => TodoListPromise;
  updateManyTodoLists: (args: {
    data: TodoListUpdateManyMutationInput;
    where?: TodoListWhereInput;
  }) => BatchPayloadPromise;
  upsertTodoList: (args: {
    where: TodoListWhereUniqueInput;
    create: TodoListCreateInput;
    update: TodoListUpdateInput;
  }) => TodoListPromise;
  deleteTodoList: (where: TodoListWhereUniqueInput) => TodoListPromise;
  deleteManyTodoLists: (where?: TodoListWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  todo: (
    where?: TodoSubscriptionWhereInput
  ) => TodoSubscriptionPayloadSubscription;
  todoList: (
    where?: TodoListSubscriptionWhereInput
  ) => TodoListSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TodoOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "complete_ASC"
  | "complete_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type TodoListOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type TodoWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TodoWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  complete?: Boolean;
  complete_not?: Boolean;
  author?: UserWhereInput;
  todoList?: TodoListWhereInput;
  AND?: TodoWhereInput[] | TodoWhereInput;
  OR?: TodoWhereInput[] | TodoWhereInput;
  NOT?: TodoWhereInput[] | TodoWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  todos_every?: TodoWhereInput;
  todos_some?: TodoWhereInput;
  todos_none?: TodoWhereInput;
  todoLists_every?: TodoListWhereInput;
  todoLists_some?: TodoListWhereInput;
  todoLists_none?: TodoListWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface TodoListWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  author?: UserWhereInput;
  todos_every?: TodoWhereInput;
  todos_some?: TodoWhereInput;
  todos_none?: TodoWhereInput;
  AND?: TodoListWhereInput[] | TodoListWhereInput;
  OR?: TodoListWhereInput[] | TodoListWhereInput;
  NOT?: TodoListWhereInput[] | TodoListWhereInput;
}

export type TodoListWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface TodoCreateInput {
  title?: String;
  complete: Boolean;
  author: UserCreateOneWithoutTodosInput;
  todoList: TodoListCreateOneWithoutTodosInput;
}

export interface UserCreateOneWithoutTodosInput {
  create?: UserCreateWithoutTodosInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutTodosInput {
  email: String;
  password: String;
  name: String;
  todoLists?: TodoListCreateManyWithoutAuthorInput;
}

export interface TodoListCreateManyWithoutAuthorInput {
  create?:
    | TodoListCreateWithoutAuthorInput[]
    | TodoListCreateWithoutAuthorInput;
  connect?: TodoListWhereUniqueInput[] | TodoListWhereUniqueInput;
}

export interface TodoListCreateWithoutAuthorInput {
  title?: String;
  todos?: TodoCreateManyWithoutTodoListInput;
}

export interface TodoCreateManyWithoutTodoListInput {
  create?: TodoCreateWithoutTodoListInput[] | TodoCreateWithoutTodoListInput;
  connect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
}

export interface TodoCreateWithoutTodoListInput {
  title?: String;
  complete: Boolean;
  author: UserCreateOneWithoutTodosInput;
}

export interface TodoListCreateOneWithoutTodosInput {
  create?: TodoListCreateWithoutTodosInput;
  connect?: TodoListWhereUniqueInput;
}

export interface TodoListCreateWithoutTodosInput {
  title?: String;
  author: UserCreateOneWithoutTodoListsInput;
}

export interface UserCreateOneWithoutTodoListsInput {
  create?: UserCreateWithoutTodoListsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutTodoListsInput {
  email: String;
  password: String;
  name: String;
  todos?: TodoCreateManyWithoutAuthorInput;
}

export interface TodoCreateManyWithoutAuthorInput {
  create?: TodoCreateWithoutAuthorInput[] | TodoCreateWithoutAuthorInput;
  connect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
}

export interface TodoCreateWithoutAuthorInput {
  title?: String;
  complete: Boolean;
  todoList: TodoListCreateOneWithoutTodosInput;
}

export interface TodoUpdateInput {
  title?: String;
  complete?: Boolean;
  author?: UserUpdateOneRequiredWithoutTodosInput;
  todoList?: TodoListUpdateOneRequiredWithoutTodosInput;
}

export interface UserUpdateOneRequiredWithoutTodosInput {
  create?: UserCreateWithoutTodosInput;
  update?: UserUpdateWithoutTodosDataInput;
  upsert?: UserUpsertWithoutTodosInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutTodosDataInput {
  email?: String;
  password?: String;
  name?: String;
  todoLists?: TodoListUpdateManyWithoutAuthorInput;
}

export interface TodoListUpdateManyWithoutAuthorInput {
  create?:
    | TodoListCreateWithoutAuthorInput[]
    | TodoListCreateWithoutAuthorInput;
  delete?: TodoListWhereUniqueInput[] | TodoListWhereUniqueInput;
  connect?: TodoListWhereUniqueInput[] | TodoListWhereUniqueInput;
  disconnect?: TodoListWhereUniqueInput[] | TodoListWhereUniqueInput;
  update?:
    | TodoListUpdateWithWhereUniqueWithoutAuthorInput[]
    | TodoListUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | TodoListUpsertWithWhereUniqueWithoutAuthorInput[]
    | TodoListUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: TodoListScalarWhereInput[] | TodoListScalarWhereInput;
  updateMany?:
    | TodoListUpdateManyWithWhereNestedInput[]
    | TodoListUpdateManyWithWhereNestedInput;
}

export interface TodoListUpdateWithWhereUniqueWithoutAuthorInput {
  where: TodoListWhereUniqueInput;
  data: TodoListUpdateWithoutAuthorDataInput;
}

export interface TodoListUpdateWithoutAuthorDataInput {
  title?: String;
  todos?: TodoUpdateManyWithoutTodoListInput;
}

export interface TodoUpdateManyWithoutTodoListInput {
  create?: TodoCreateWithoutTodoListInput[] | TodoCreateWithoutTodoListInput;
  delete?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
  connect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
  disconnect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
  update?:
    | TodoUpdateWithWhereUniqueWithoutTodoListInput[]
    | TodoUpdateWithWhereUniqueWithoutTodoListInput;
  upsert?:
    | TodoUpsertWithWhereUniqueWithoutTodoListInput[]
    | TodoUpsertWithWhereUniqueWithoutTodoListInput;
  deleteMany?: TodoScalarWhereInput[] | TodoScalarWhereInput;
  updateMany?:
    | TodoUpdateManyWithWhereNestedInput[]
    | TodoUpdateManyWithWhereNestedInput;
}

export interface TodoUpdateWithWhereUniqueWithoutTodoListInput {
  where: TodoWhereUniqueInput;
  data: TodoUpdateWithoutTodoListDataInput;
}

export interface TodoUpdateWithoutTodoListDataInput {
  title?: String;
  complete?: Boolean;
  author?: UserUpdateOneRequiredWithoutTodosInput;
}

export interface TodoUpsertWithWhereUniqueWithoutTodoListInput {
  where: TodoWhereUniqueInput;
  update: TodoUpdateWithoutTodoListDataInput;
  create: TodoCreateWithoutTodoListInput;
}

export interface TodoScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  complete?: Boolean;
  complete_not?: Boolean;
  AND?: TodoScalarWhereInput[] | TodoScalarWhereInput;
  OR?: TodoScalarWhereInput[] | TodoScalarWhereInput;
  NOT?: TodoScalarWhereInput[] | TodoScalarWhereInput;
}

export interface TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput;
  data: TodoUpdateManyDataInput;
}

export interface TodoUpdateManyDataInput {
  title?: String;
  complete?: Boolean;
}

export interface TodoListUpsertWithWhereUniqueWithoutAuthorInput {
  where: TodoListWhereUniqueInput;
  update: TodoListUpdateWithoutAuthorDataInput;
  create: TodoListCreateWithoutAuthorInput;
}

export interface TodoListScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  AND?: TodoListScalarWhereInput[] | TodoListScalarWhereInput;
  OR?: TodoListScalarWhereInput[] | TodoListScalarWhereInput;
  NOT?: TodoListScalarWhereInput[] | TodoListScalarWhereInput;
}

export interface TodoListUpdateManyWithWhereNestedInput {
  where: TodoListScalarWhereInput;
  data: TodoListUpdateManyDataInput;
}

export interface TodoListUpdateManyDataInput {
  title?: String;
}

export interface UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput;
  create: UserCreateWithoutTodosInput;
}

export interface TodoListUpdateOneRequiredWithoutTodosInput {
  create?: TodoListCreateWithoutTodosInput;
  update?: TodoListUpdateWithoutTodosDataInput;
  upsert?: TodoListUpsertWithoutTodosInput;
  connect?: TodoListWhereUniqueInput;
}

export interface TodoListUpdateWithoutTodosDataInput {
  title?: String;
  author?: UserUpdateOneRequiredWithoutTodoListsInput;
}

export interface UserUpdateOneRequiredWithoutTodoListsInput {
  create?: UserCreateWithoutTodoListsInput;
  update?: UserUpdateWithoutTodoListsDataInput;
  upsert?: UserUpsertWithoutTodoListsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutTodoListsDataInput {
  email?: String;
  password?: String;
  name?: String;
  todos?: TodoUpdateManyWithoutAuthorInput;
}

export interface TodoUpdateManyWithoutAuthorInput {
  create?: TodoCreateWithoutAuthorInput[] | TodoCreateWithoutAuthorInput;
  delete?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
  connect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
  disconnect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput;
  update?:
    | TodoUpdateWithWhereUniqueWithoutAuthorInput[]
    | TodoUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | TodoUpsertWithWhereUniqueWithoutAuthorInput[]
    | TodoUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: TodoScalarWhereInput[] | TodoScalarWhereInput;
  updateMany?:
    | TodoUpdateManyWithWhereNestedInput[]
    | TodoUpdateManyWithWhereNestedInput;
}

export interface TodoUpdateWithWhereUniqueWithoutAuthorInput {
  where: TodoWhereUniqueInput;
  data: TodoUpdateWithoutAuthorDataInput;
}

export interface TodoUpdateWithoutAuthorDataInput {
  title?: String;
  complete?: Boolean;
  todoList?: TodoListUpdateOneRequiredWithoutTodosInput;
}

export interface TodoUpsertWithWhereUniqueWithoutAuthorInput {
  where: TodoWhereUniqueInput;
  update: TodoUpdateWithoutAuthorDataInput;
  create: TodoCreateWithoutAuthorInput;
}

export interface UserUpsertWithoutTodoListsInput {
  update: UserUpdateWithoutTodoListsDataInput;
  create: UserCreateWithoutTodoListsInput;
}

export interface TodoListUpsertWithoutTodosInput {
  update: TodoListUpdateWithoutTodosDataInput;
  create: TodoListCreateWithoutTodosInput;
}

export interface TodoUpdateManyMutationInput {
  title?: String;
  complete?: Boolean;
}

export interface TodoListCreateInput {
  title?: String;
  author: UserCreateOneWithoutTodoListsInput;
  todos?: TodoCreateManyWithoutTodoListInput;
}

export interface TodoListUpdateInput {
  title?: String;
  author?: UserUpdateOneRequiredWithoutTodoListsInput;
  todos?: TodoUpdateManyWithoutTodoListInput;
}

export interface TodoListUpdateManyMutationInput {
  title?: String;
}

export interface UserCreateInput {
  email: String;
  password: String;
  name: String;
  todos?: TodoCreateManyWithoutAuthorInput;
  todoLists?: TodoListCreateManyWithoutAuthorInput;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  name?: String;
  todos?: TodoUpdateManyWithoutAuthorInput;
  todoLists?: TodoListUpdateManyWithoutAuthorInput;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
  name?: String;
}

export interface TodoSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TodoWhereInput;
  AND?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput;
  OR?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput;
  NOT?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput;
}

export interface TodoListSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TodoListWhereInput;
  AND?: TodoListSubscriptionWhereInput[] | TodoListSubscriptionWhereInput;
  OR?: TodoListSubscriptionWhereInput[] | TodoListSubscriptionWhereInput;
  NOT?: TodoListSubscriptionWhereInput[] | TodoListSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Todo {
  id: ID_Output;
  title?: String;
  complete: Boolean;
}

export interface TodoPromise extends Promise<Todo>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  complete: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
  todoList: <T = TodoListPromise>() => T;
}

export interface TodoSubscription
  extends Promise<AsyncIterator<Todo>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  complete: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
  todoList: <T = TodoListSubscription>() => T;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  todos: <T = FragmentableArray<Todo>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  todoLists: <T = FragmentableArray<TodoList>>(args?: {
    where?: TodoListWhereInput;
    orderBy?: TodoListOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  todos: <T = Promise<AsyncIterator<TodoSubscription>>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  todoLists: <T = Promise<AsyncIterator<TodoListSubscription>>>(args?: {
    where?: TodoListWhereInput;
    orderBy?: TodoListOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TodoList {
  id: ID_Output;
  title?: String;
}

export interface TodoListPromise extends Promise<TodoList>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: <T = UserPromise>() => T;
  todos: <T = FragmentableArray<Todo>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TodoListSubscription
  extends Promise<AsyncIterator<TodoList>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
  todos: <T = Promise<AsyncIterator<TodoSubscription>>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TodoConnection {}

export interface TodoConnectionPromise
  extends Promise<TodoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoEdge>>() => T;
  aggregate: <T = AggregateTodoPromise>() => T;
}

export interface TodoConnectionSubscription
  extends Promise<AsyncIterator<TodoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TodoEdge {
  cursor: String;
}

export interface TodoEdgePromise extends Promise<TodoEdge>, Fragmentable {
  node: <T = TodoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoEdgeSubscription
  extends Promise<AsyncIterator<TodoEdge>>,
    Fragmentable {
  node: <T = TodoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTodo {
  count: Int;
}

export interface AggregateTodoPromise
  extends Promise<AggregateTodo>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoSubscription
  extends Promise<AsyncIterator<AggregateTodo>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TodoListConnection {}

export interface TodoListConnectionPromise
  extends Promise<TodoListConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoListEdge>>() => T;
  aggregate: <T = AggregateTodoListPromise>() => T;
}

export interface TodoListConnectionSubscription
  extends Promise<AsyncIterator<TodoListConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoListEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoListSubscription>() => T;
}

export interface TodoListEdge {
  cursor: String;
}

export interface TodoListEdgePromise
  extends Promise<TodoListEdge>,
    Fragmentable {
  node: <T = TodoListPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoListEdgeSubscription
  extends Promise<AsyncIterator<TodoListEdge>>,
    Fragmentable {
  node: <T = TodoListSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTodoList {
  count: Int;
}

export interface AggregateTodoListPromise
  extends Promise<AggregateTodoList>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoListSubscription
  extends Promise<AsyncIterator<AggregateTodoList>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TodoSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface TodoSubscriptionPayloadPromise
  extends Promise<TodoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoPreviousValuesPromise>() => T;
}

export interface TodoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoPreviousValuesSubscription>() => T;
}

export interface TodoPreviousValues {
  id: ID_Output;
  title?: String;
  complete: Boolean;
}

export interface TodoPreviousValuesPromise
  extends Promise<TodoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  complete: () => Promise<Boolean>;
}

export interface TodoPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  complete: () => Promise<AsyncIterator<Boolean>>;
}

export interface TodoListSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface TodoListSubscriptionPayloadPromise
  extends Promise<TodoListSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoListPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoListPreviousValuesPromise>() => T;
}

export interface TodoListSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoListSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoListSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoListPreviousValuesSubscription>() => T;
}

export interface TodoListPreviousValues {
  id: ID_Output;
  title?: String;
}

export interface TodoListPreviousValuesPromise
  extends Promise<TodoListPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface TodoListPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoListPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Todo",
    embedded: false
  },
  {
    name: "TodoList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;