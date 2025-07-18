declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

// custom.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

