declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare interface Global extends NodeJS.Global {
  MINHAGLOBAL: string;
}

declare const global: CustomGlobal;
