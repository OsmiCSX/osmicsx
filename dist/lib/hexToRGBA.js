"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (hex) => {
    let c;
    let d;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        d = '0x' + c.join('');
        return 'rgba(' + [(d >> 16) & 255, (d >> 8) & 255, d & 255].join(', ') + ', --osmi-opacity)';
    }
    throw new Error('Custom Colors: Bad Hex');
};
//# sourceMappingURL=hexToRGBA.js.map