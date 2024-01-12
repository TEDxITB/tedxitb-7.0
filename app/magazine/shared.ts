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

const randomImage = () => `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/200`
const createContent = (len: number) => {
    return new Array(len).fill(null).map(() => randomImage())
}
// Dummy data
const cover = "/magazine-a4-cover.png"
export const magazines: Magazine[] = [
    {
        title: "Test 1",
        slug: "test-1",
        content: createContent(10)
    },
    {
        title: "Test 2",
        slug: "test-2",
        content: createContent(5)
    },
    {
        title: "Test 3",
        slug: "test-3",
        content: createContent(3)
    }
]

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
