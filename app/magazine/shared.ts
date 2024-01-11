export type Communication = {
    info: "close"
} | {
    info: "ready"
} | {
    info: "boundUpdate",
    bounding: DOMRect,
} | {
    info: "slugUpdate",
    title: string
}

export interface Magazine {
    title: string;
    cover: string;
}