export type Communication = {
    info: "close"
} | {
    info: "ready"
} | {
    info: "boundUpdate",
    bounding: DOMRect,
} | {
    info: "slugUpdate",
    slug: string
}

export interface Magazine {
    title: string
    slug: string
    // Link to each page
    content: string[]
}

const randomImage = () => `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/500/705`
const createContent = (len: number) => {
    return new Array(len).fill(null).map(() => randomImage())
}
// Dummy data
export const magazines: Magazine[] = (new Array(30).fill(null)).map((_, i) => {
    return {
        title: `Test ${i}`,
        slug: `test-${i}`,
        content: createContent(Math.floor(Math.random() * 20 + 10))
    }
})

export async function getMagazines() {
    return magazines
}

export async function getMagazine(slug: string) {
    for (const magazine of magazines) {
        if (magazine.slug == slug) {
            return magazine
        }
    }
    throw "Error";
}
export const styleElement = (el: HTMLElement, style: Partial<HTMLElement["style"]>) => {
    Object.entries(style).forEach(([k, v]) => el.style[k as any] = v as any);
};
export const createWaiter = function (): { resolve: any, waiter: any } {
    let resolver: (value: void) => void;
    const waiter = new Promise<void>((resolve) => {
        resolver = resolve;
    });
    return {
        waiter,
        //@ts-ignore
        resolve: resolver
    } as const;
};
export const waitListener = function <T extends EventTarget>(listener: T, type: string) {
    const { waiter: promise, resolve: resolver } = createWaiter();

    listener.addEventListener(type, () => {
        resolver();
    });
    return promise;
};
export const waitFrame = () => {
    const { waiter: promise, resolve: resolver } = createWaiter();

    requestAnimationFrame(() => {
        resolver();
    });
    return promise;
};
