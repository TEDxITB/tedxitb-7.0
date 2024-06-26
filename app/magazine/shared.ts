import { MagazineQueryResult } from "@/types/cms";

export type Communication =
  | {
      info: "close";
    }
  | {
      info: "ready";
    }
  | {
      info: "boundUpdate";
      bounding: DOMRect;
    }
  | {
      info: "idUpdate";
      id: string;
    }
  | {
      info: "customSourceUpdate";
      data: Magazine;
    };

export type Magazine =
  MagazineQueryResult["allMonthlyMagazines"] extends (infer K)[] ? K : never;

export const styleElement = (
  el: HTMLElement,
  style: Partial<HTMLElement["style"]>
) => {
  Object.entries(style).forEach(([k, v]) => (el.style[k as any] = v as any));
};

export const createWaiter = function (): { resolve: any; waiter: any } {
  let resolver: (value: void) => void;
  const waiter = new Promise<void>((resolve) => {
    resolver = resolve;
  });
  return {
    waiter,
    //@ts-ignore
    resolve: resolver,
  } as const;
};

export const waitListener = function <T extends EventTarget>(
  listener: T,
  type: string
) {
  const { waiter: promise, resolve: resolver } = createWaiter();

  listener.addEventListener(type, () => {
    resolver();
  });
  return promise;
};

export const waitFrameSingle = () => {
  const { waiter: promise, resolve: resolver } = createWaiter();

  requestAnimationFrame(() => {
    resolver();
  });
  return promise;
};

export const waitFrame = async () => {
  for (let i = 0; i < 5; ++i) {
    await waitFrameSingle();
  }
};
