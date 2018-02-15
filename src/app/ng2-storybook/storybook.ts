import { Type } from '@angular/core';

export interface StorybookConfig {
    storybook: Array<any>;
    default: Array<number>;
}

export class Item implements StorybookItem {

    subcomponents: Array<Item>;

    constructor(
        public title: string,
        public component?: Type<any>,
        public inputs?: Object
    ) { }
}

export interface StorybookItem {
    title: string;
    component?: any;
    subcomponents?: Array<StorybookItem>
    inputs?: any;
}
