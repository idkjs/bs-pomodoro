// tslint:disable-next-line:no-var-requires
const $$Array = require('bs-platform/lib/js/array');
// tslint:disable-next-line:max-classes-per-file
export class EmptyList {
}
// tslint:disable-next-line:max-classes-per-file
export class Cons {
}
export function cons(itm, lst) {
    return /* :: */ [itm, lst];
}
export const emptyList = 0;
export const fromArray = $$Array.to_list;
//# sourceMappingURL=ReasonPervasives.shim.js.map