import { LIB_NAME as LIB_NAME_3 } from '@martines3000/lib-3';

// eslint-disable-next-line import/prefer-default-export
export const PACKAGE_NAME = 'package-3';

const main = () => {
  console.log(`Hello from ${PACKAGE_NAME}`);

  // Dependencies
  console.log(`Dependencies: ${LIB_NAME_3}`);
};

main();
