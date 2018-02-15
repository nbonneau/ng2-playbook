import { Injectable } from '@angular/core';

import { StorybookConfig } from "../storybook";

@Injectable()
export class StorybookService {

    constructor(public config: StorybookConfig) { }

}