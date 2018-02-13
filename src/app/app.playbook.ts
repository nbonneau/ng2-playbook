
import { Test0Component } from "./components/test-0/test.component";
import { Test1Component } from "./components/test-1/test.component";
import { InputComponent } from "./components/input/input.component";

export const PLAYBOOK = [
    { "title": "Test 0", "component": Test0Component, "inputs": {"test": "OK"} },
    { "title": "Test 1", "component": Test1Component },
    { "title": "Input", "subcomponents": [
        {"title": "Input (default)", "component": InputComponent},
        {"title": "Input with placeholder", "component": InputComponent, "inputs": {"placeholder": "Placeholder"}}
    ]}
]