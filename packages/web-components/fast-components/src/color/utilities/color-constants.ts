import { parseColorHexRGB } from "@microsoft/fast-colors";
import { SwatchRGB } from "../swatch";

/**
 * @internal
 */
export const white = SwatchRGB.create(1, 1, 1);
/**
 * @internal
 */
export const black = SwatchRGB.create(0, 0, 0);

/**
 * @internal
 */
export const middleGrey = SwatchRGB.create(0.5, 0.5, 0.5);

/**
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
const base = parseColorHexRGB("#DA1A5F")!;
export const accentBase = SwatchRGB.create(base.r, base.g, base.b);
