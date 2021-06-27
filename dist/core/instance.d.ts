import { BackgroundDark, BorderDark, TextDark } from "../processor/processor.type";
export default class Instance {
    _predefined: object | any;
    _obj: object;
    _bgOpacity: number;
    _borderOpacity: number;
    _textOpacity: number;
    _bgDark?: BackgroundDark;
    _borderDark?: BorderDark;
    _textDark?: TextDark;
    constructor(customStyle?: object);
    updateObject(data: object | undefined): void;
    /**
     * Get pre defined styles from osmicsx
     * @param data
     */
    predefinedStyles(data: string): void;
    /**
     * Check if the width & height are
     * responsive or not
     * @param data
     */
    responsiveSize(data: string): void;
    /**
     * Auto generate fixed width size
     * @param data
     */
    fixedWidthSize(data: string): void;
    /**
     * Auto generate fixed height size
     * @param data
     */
    fixedHeightSize(data: string): void;
    /**
     * Checking if there's a color opacity
     * @param syntax
     */
    colorOpacity(syntax: string): void;
    /**
     * Checking if it's using dark mode or not
     * @param syntax
     */
    darkTheme(syntax: string): void;
    get predefined(): any;
    /**
     * Get final style data
     * @returns {*|{}}
     */
    getOutputStyle(): object;
}
