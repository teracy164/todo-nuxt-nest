/* tslint:disable */
/* eslint-disable */
/**
 * TODO App API example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * 
     * @type {number}
     * @memberof Todo
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    contents?: string;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    start?: string;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    end?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Todo
     */
    isCompleted?: boolean;
}

/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary TODO追加
         * @param {Array<Todo>} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTodo: async (todo: Array<Todo>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'todo' is not null or undefined
            assertParamExists('addTodo', 'todo', todo)
            const localVarPath = `/api/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary TODO削除
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteTodo', 'id', id)
            const localVarPath = `/api/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary TODO一覧取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary TODO更新
         * @param {number} id 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodo: async (id: number, todo: Todo, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTodo', 'id', id)
            // verify required parameter 'todo' is not null or undefined
            assertParamExists('updateTodo', 'todo', todo)
            const localVarPath = `/api/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary TODO部分更新
         * @param {number} id 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodoPartial: async (id: number, todo: Todo, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTodoPartial', 'id', id)
            // verify required parameter 'todo' is not null or undefined
            assertParamExists('updateTodoPartial', 'todo', todo)
            const localVarPath = `/api/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary TODO追加
         * @param {Array<Todo>} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addTodo(todo: Array<Todo>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Todo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addTodo(todo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary TODO削除
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTodo(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTodo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary TODO一覧取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodos(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Todo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodos(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary TODO更新
         * @param {number} id 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTodo(id: number, todo: Todo, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTodo(id, todo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary TODO部分更新
         * @param {number} id 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTodoPartial(id: number, todo: Todo, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTodoPartial(id, todo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodoApiFp(configuration)
    return {
        /**
         * 
         * @summary TODO追加
         * @param {Array<Todo>} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTodo(todo: Array<Todo>, options?: any): AxiosPromise<Array<Todo>> {
            return localVarFp.addTodo(todo, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary TODO削除
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTodo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary TODO一覧取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos(options?: any): AxiosPromise<Array<Todo>> {
            return localVarFp.getTodos(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary TODO更新
         * @param {number} id 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodo(id: number, todo: Todo, options?: any): AxiosPromise<Todo> {
            return localVarFp.updateTodo(id, todo, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary TODO部分更新
         * @param {number} id 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodoPartial(id: number, todo: Todo, options?: any): AxiosPromise<Todo> {
            return localVarFp.updateTodoPartial(id, todo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
    /**
     * 
     * @summary TODO追加
     * @param {Array<Todo>} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public addTodo(todo: Array<Todo>, options?: any) {
        return TodoApiFp(this.configuration).addTodo(todo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary TODO削除
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public deleteTodo(id: number, options?: any) {
        return TodoApiFp(this.configuration).deleteTodo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary TODO一覧取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public getTodos(options?: any) {
        return TodoApiFp(this.configuration).getTodos(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary TODO更新
     * @param {number} id 
     * @param {Todo} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public updateTodo(id: number, todo: Todo, options?: any) {
        return TodoApiFp(this.configuration).updateTodo(id, todo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary TODO部分更新
     * @param {number} id 
     * @param {Todo} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public updateTodoPartial(id: number, todo: Todo, options?: any) {
        return TodoApiFp(this.configuration).updateTodoPartial(id, todo, options).then((request) => request(this.axios, this.basePath));
    }
}


