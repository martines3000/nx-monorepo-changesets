import { execa } from 'execa';

const ALL_PACKAGES = {
  '@martines3000/core': [
    '@martines3000/package-1',
    '@martines3000/package-2',
    '@martines3000/package-3',
  ],
  '@martines3000/lib-1': ['@martines3000/lib-1'],
  '@martines3000/lib-2': ['@martines3000/lib-2'],
  '@martines3000/lib-3': ['@martines3000/lib-3'],
};

const DEPENDENCIES = {
  '@martines3000/package-1': ['@martines3000/lib-1', '@martines3000/package-2'],
  '@martines3000/package-2': ['@martines3000/lib-2', '@martines3000/package-3'],
  '@martines3000/package-3': ['@martines3000/lib-3'],
  '@martines3000/lib-1': ['@martines3000/lib-2', '@martines3000/lib-3'],
  '@martines3000/lib-2': ['@martines3000/lib-3'],
};

// Function to find all dependencies of the selected package
function findAllDependencies(pkg, dependencies = new Set()) {
  if (!DEPENDENCIES[pkg]) {
    return dependencies;
  }

  DEPENDENCIES[pkg].forEach((dependency) => {
    dependencies.add(dependency);
    findAllDependencies(dependency, dependencies);
  });

  return dependencies;
}

const main = async () => {
  const args = process.argv;
  console.log(args);
  if (args.length < 3) {
    console.error('No package was selected');
    process.exit(1);
  }

  // Should we version all packages?
  if (args[2] === 'all') {
    await execa('pnpm changeset version', {
      shell: true,
    });

    process.exit(0);
  }

  const allDependencies = new Set();

  // Find all dependencies of the selected packages
  ALL_PACKAGES[args[2]].map((pkg) =>
    findAllDependencies(pkg).forEach((dep) => allDependencies.add(dep))
  );

  // Version only the selected packages and their dependencies
  const packagesToIgnore = Object.entries(ALL_PACKAGES)
    .filter(([key]) => key !== args[2] && !allDependencies.has(key))
    .flatMap(([, value]) => value);

  await execa(
    `pnpm changeset version ${packagesToIgnore
      .map((pkg) => `--ignore ${pkg}`)
      .join(' ')}`,
    { shell: true }
  );
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
