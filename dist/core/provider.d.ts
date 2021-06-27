/**
 * Create OsmiProvider for custom theme
 */
export default class OsmiProvider {
    _predefined?: object | any;
    width: (widthPercent: number) => number;
    height: (heightPercent: number) => number;
    constructor(customStyle?: object);
    connect(style: object): any;
    apply(): any;
}
