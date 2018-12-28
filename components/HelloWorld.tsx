import * as React from 'react';

/**
 * Hello World Module Properties
 */
export interface IProps {
    /** Description for prop 1 */
    prop1: string
    /** Description for prop 2 */
    prop2: number
    /** Description for prop 3 */
    prop3?: object
}

/**
 * Form HelloWorld
 */
export class HelloWorld extends React.Component<IProps> {
    render() {
        return (
            <div>
                Fancy React Typescript Component!
            </div>
        );
    }
}

export default HelloWorld;