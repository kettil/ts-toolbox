/* eslint-disable @typescript-eslint/naming-convention -- external definition */
import type { DefaultObject } from './types';

const config: DefaultObject = {
  rules: {
    // require node rules
    'require-author': 'off',
    'require-bin': 'off',
    'require-bugs': 'off',
    'require-bundledDependencies': 'off',
    'require-config': 'off',
    'require-contributors': 'error',
    'require-cpu': 'off',
    'require-dependencies': 'error',
    'require-description': 'error',
    'require-devDependencies': 'error',
    'require-directories': 'off',
    'require-engines': 'error',
    'require-files': 'off',
    'require-funding': 'off',
    'require-homepage': 'off',
    'require-keywords': 'error',
    'require-license': 'error',
    'require-main': 'off',
    'require-man': 'off',
    'require-module': 'off',
    'require-name': 'error',
    'require-optionalDependencies': 'off',
    'require-os': 'off',
    'require-peerDependencies': 'off',
    'require-preferGlobal': 'off',
    'require-private': 'error',
    'require-publishConfig': 'error',
    'require-repository-directory': 'off',
    'require-repository': 'error',
    'require-scripts': 'error',
    'require-types': 'off',
    'require-typings': 'off',
    'require-version': 'error',

    // type rules
    'bin-type': 'error',
    'bundledDependencies-type': 'error',
    'config-type': 'error',
    'cpu-type': 'error',
    'dependencies-type': 'error',
    'description-type': 'error',
    'devDependencies-type': 'error',
    'directories-type': 'error',
    'engines-type': 'error',
    'files-type': 'error',
    'homepage-type': 'error',
    'keywords-type': 'error',
    'license-type': 'error',
    'main-type': 'error',
    'man-type': 'error',
    'name-type': 'error',
    'optionalDependencies-type': 'error',
    'os-type': 'error',
    'peerDependencies-type': 'error',
    'preferGlobal-type': 'error',
    'private-type': 'error',
    'repository-type': 'error',
    'scripts-type': 'error',
    'version-type': 'error',

    // valid value rules
    'valid-values-author': 'off',
    'valid-values-engines': 'off',
    'valid-values-license': 'off',
    'valid-values-name-scope': 'off',
    'valid-values-private': 'off',
    'valid-values-publishConfig': 'off',

    // dependency rules
    'no-repeated-dependencies': 'error',

    // dependency rules - dependencies
    'no-absolute-version-dependencies': 'off',
    'no-archive-dependencies': 'error',
    'no-caret-version-dependencies': 'error',
    'no-file-dependencies': 'error',
    'no-git-dependencies': 'error',
    'no-restricted-dependencies': 'off',
    'no-restricted-pre-release-dependencies': 'off',
    'no-tilde-version-dependencies': 'error',
    'prefer-absolute-version-dependencies': 'error',
    'prefer-alphabetical-dependencies': 'error',
    'prefer-caret-version-dependencies': 'off',
    'prefer-no-version-zero-dependencies': 'off',
    'prefer-tilde-version-dependencies': 'off',

    // dependency rules - devDependencies
    'no-absolute-version-devDependencies': 'off',
    'no-archive-devDependencies': 'error',
    'no-caret-version-devDependencies': 'error',
    'no-file-devDependencies': 'error',
    'no-git-devDependencies': 'error',
    'no-restricted-devDependencies': 'off',
    'no-restricted-pre-release-devDependencies': 'off',
    'no-tilde-version-devDependencies': 'error',
    'prefer-absolute-version-devDependencies': 'error',
    'prefer-alphabetical-devDependencies': 'error',
    'prefer-caret-version-devDependencies': 'off',
    'prefer-no-version-zero-devDependencies': 'off',
    'prefer-tilde-version-devDependencies': 'off',

    // dependency rules - bundledDependencies
    'prefer-alphabetical-bundledDependencies': 'error',

    // dependency rules - optionalDependencies
    'prefer-alphabetical-optionalDependencies': 'error',

    // dependency rules - peerDependencies
    'prefer-alphabetical-peerDependencies': 'error',

    // scripts rules
    'prefer-alphabetical-scripts': 'error',
    'prefer-scripts': 'off',

    // format rules
    'description-format': [
      'error',
      {
        requireCapitalFirstLetter: true,
        requireEndingPeriod: true,
      },
    ],
    'name-format': 'error',
    'version-format': 'error',

    // package.json property rules
    'prefer-property-order': [
      'error',
      [
        'name',
        'version',
        'description',
        'license',
        'private',
        'contributors',
        'type',
        'main',
        'types',
        'module',
        'bin',
        'workspaces',
        'scripts',
        'dependencies',
        'devDependencies',
        'peerDependencies',
        'optionalDependencies',
        'homepage',
        'repository',
        'bugs',
        'keywords',
        'publishConfig',
        'engines',
      ],
    ],
    'no-duplicate-properties': 'error',

    // disallowed node rules
    'prefer-no-engineStrict': 'off',
    'prefer-no-dependencies': 'off',
    'prefer-no-devDependencies': 'off',
    'prefer-no-optionalDependencies': 'off',
    'prefer-no-peerDependencies': 'off',
  },
};

export { config };
