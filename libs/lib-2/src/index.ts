import { LIB_NAME as LIB_NAME_3 } from '@martines3000/lib-3';

// eslint-disable-next-line import/prefer-default-export
export const LIB_NAME = 'lib-2';

const main = () => {
  console.log(`Hello from ${LIB_NAME}`);

  // Dependencies
  console.log(`Dependencies: ${LIB_NAME_3}`);
};

main();
