/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAction, props } from '@ngrx/store';
import { BookModel, BookRequiredProps } from '@book-co/shared-models';

export const enterBookPage = createAction("[Books Page] Enter Books Page", props<{key: {}}>());

export const createBook = createAction("[Books Page] Create a Book", props<{book: BookRequiredProps}>());

