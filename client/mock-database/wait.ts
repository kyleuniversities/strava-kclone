export const wait = (time: number) =>
  new Promise((resolve: (value: unknown) => void) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
