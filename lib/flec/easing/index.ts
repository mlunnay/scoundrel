export * from './linear';
export * from './back';
export * from './bounce';
export * from './circular';
export * from './cubic';
export * from './elastic';
export * from './exponential';
export * from './quadratic';
export * from './quartic';
export * from './quintic';
export * from './sine';
export * from './twoway';

export type easingFunction = (t: number, b: number, c: number, d: number) => number;