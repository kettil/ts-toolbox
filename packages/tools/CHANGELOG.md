# Changelog

# @kettil/tools [4.0.0](https://github.com/kettil/ts-toolbox/compare/@kettil/tools@3.3.2...@kettil/tools@4.0.0) (2022-03-13)


### Features

* create the new package "types" (moved from "tools") ([61e63c6](https://github.com/kettil/ts-toolbox/commit/61e63c693f8a46c6c80aa308d69214338f81e6de))
* **tools:** add dotCase function ([ab3d654](https://github.com/kettil/ts-toolbox/commit/ab3d65496e4606d8ae6d8e58bc023d7b726b2f19))
* **tools:** add isFunction function ([0cfb052](https://github.com/kettil/ts-toolbox/commit/0cfb0525daa9ac04562a1041a7259c0bce5bb67a))
* **tools:** add isNil function ([8802e2e](https://github.com/kettil/ts-toolbox/commit/8802e2efd2dc64475733f18dedb8ddcbec62b4af))
* **tools:** add isNumber function ([af5bfa1](https://github.com/kettil/ts-toolbox/commit/af5bfa1718427e3aa8794a1060efa741f64232a5))
* **tools:** add kebabCase function ([917ca18](https://github.com/kettil/ts-toolbox/commit/917ca18ee99965de7817f3983046dfc5b6f17f1f))
* **tools:** add lowercaseFirst function ([b82c0ab](https://github.com/kettil/ts-toolbox/commit/b82c0ab84cc08213b21fb12485e54b093b9cc4d0))
* **tools:** add ms function ([b2247c5](https://github.com/kettil/ts-toolbox/commit/b2247c5eaad72bd501983cf4ea3f3ca9c8c9a4ce))
* **tools:** add splitCase function (internal) ([693fea4](https://github.com/kettil/ts-toolbox/commit/693fea492b546f7788d40ec27372e299182119e8))
* **tools:** add uppercaseFirst function ([f6b8973](https://github.com/kettil/ts-toolbox/commit/f6b8973448c080f443ef6f59b8bf5741f2d6ee81))
* **tools:** extends Unpacked type with Set and Promise ([7342fb8](https://github.com/kettil/ts-toolbox/commit/7342fb85533198d36bfbebfbf9baeb4920d28a12))
* **tools:** rename the "dummy" function to "noop" ([e409f9d](https://github.com/kettil/ts-toolbox/commit/e409f9dcef6dcb47b859484d950882b9feed1b8b))
* **tools:** rename the function toCamelCase to camelCase ([584dec7](https://github.com/kettil/ts-toolbox/commit/584dec70cfe237ee0a3f02f5f62095b5060aa06b))


### BREAKING CHANGES

* The general type definition has been moved from the "tools" package to the new "types" package.
* **tools:** For a consistent naming scheme the function toCamelCase has been unnamed to camelCase
* **tools:** The "dummy" function is renamed to "noop", because the name describes the function better.





### Dependencies

* **@kettil/types:** upgraded to 1.0.0

## [3.3.2](https://github.com/kettil/tool-lib/compare/3.3.1...3.3.2) (2022-01-25)


### Bug Fixes

* **deps:** bump nanoid from 3.1.30 to 3.2.0 ([7f1e786](https://github.com/kettil/tool-lib/commit/7f1e786d01e83833f6a4c12bad0deaff626d95f3))

## [3.3.1](https://github.com/kettil/tool-lib/compare/3.3.0...3.3.1) (2021-10-20)


### Bug Fixes

* **is:** adjustment of the type definition of isArray ([5a285c9](https://github.com/kettil/tool-lib/commit/5a285c9f1ce2e860a7dc7b328ba772b27987ef60))

# [3.3.0](https://github.com/kettil/tool-lib/compare/3.2.1...3.3.0) (2021-10-16)


### Features

* add isString function ([0bdcb32](https://github.com/kettil/tool-lib/commit/0bdcb328c26f34acc432d48c99463baa0222ad63))

## [3.2.1](https://github.com/kettil/tool-lib/compare/3.2.0...3.2.1) (2021-09-28)


### Bug Fixes

* **deps:** bump semver-regex from 3.1.2 to 3.1.3 ([ee4f6d5](https://github.com/kettil/tool-lib/commit/ee4f6d5b29ca4b3abe27a239141720e176de730c))
* **deps:** bump tmpl from 1.0.4 to 1.0.5 ([fab2d61](https://github.com/kettil/tool-lib/commit/fab2d611b61790e6c116fa41218f1585e7be642d))

# [3.2.0](https://github.com/kettil/tool-lib/compare/3.1.0...3.2.0) (2021-05-03)


### Features

* **object:** add objectPick function ([e9c5d33](https://github.com/kettil/tool-lib/commit/e9c5d335543a71a7b86cc3844ea06ad06a756fd0))

# [3.1.0](https://github.com/kettil/tool-lib/compare/3.0.0...3.1.0) (2021-05-01)


### Features

* **promise:** add allSettledSequence function ([8c14c18](https://github.com/kettil/tool-lib/commit/8c14c1810bcc9596f8dcce0324eaed448432c30a))
* **string:** add indent function ([77b0730](https://github.com/kettil/tool-lib/commit/77b07300305521faca8049f1b41f9b29b5eb37f2))

# [3.0.0](https://github.com/kettil/tool-lib/compare/2.9.2...3.0.0) (2021-04-24)


### Features

* switching the environment to carna ([8846a6c](https://github.com/kettil/tool-lib/commit/8846a6ccb3851b788d966c7ce1ba8d9a6b07f05c))


### BREAKING CHANGES

*

## [2.9.2](https://github.com/kettil/tool-lib/compare/2.9.1...2.9.2) (2021-04-18)


### Bug Fixes

* **array:** fix the type handling at isArray ([c6873bf](https://github.com/kettil/tool-lib/commit/c6873bf9a491f1401f3d271fce27e0627a7f5555))

## [2.9.1](https://github.com/kettil/tool-lib/compare/2.9.0...2.9.1) (2021-04-17)


### Bug Fixes

* **array:** specifies the type handling at isArray ([fed1cad](https://github.com/kettil/tool-lib/commit/fed1cad37eb435cb7e5d6d9b2c1dc48de6abb846))
* an empty string has thrown an error ([a17ea9f](https://github.com/kettil/tool-lib/commit/a17ea9fd8a13f3dd24904b96febdcbf60b6c7c60))

# [2.9.0](https://github.com/kettil/tool-lib/compare/2.8.0...2.9.0) (2021-03-07)


### Bug Fixes

* **object:** fix return type of objectFromEntries ([dbe062d](https://github.com/kettil/tool-lib/commit/dbe062d0d8a89434c8b85568d58a386b97162050))
* **object:** fix the typing of objectEntries ([ae8c570](https://github.com/kettil/tool-lib/commit/ae8c5707580c5144938b64a0bc01215439e59216))
* **types:** fix the type equality test ([de47998](https://github.com/kettil/tool-lib/commit/de479987b8e787f6d09ea368c735a4a5970e996d))


### Features

* **object:** add objectFromEntries function ([c62ac9b](https://github.com/kettil/tool-lib/commit/c62ac9b32c8e308edf2acbf1e06daddfaf70160e))
* **object:** add objectMap function ([251d86b](https://github.com/kettil/tool-lib/commit/251d86bdb9801261a03de52cce5cad9e5d418e43))
* **types:** add Addition and Subtract types ([e258358](https://github.com/kettil/tool-lib/commit/e258358a9ea3cf3df697227fa49a83e30e822b33))
* **types:** add ExtractTypeFromTupleArray tpye ([5cf9856](https://github.com/kettil/tool-lib/commit/5cf98564668ab85acff93a0c89f7c84677418c0a))
* **types:** add TupelLength type ([6777157](https://github.com/kettil/tool-lib/commit/6777157704fe6bf1a18eca0ae4433e4a350c218a))
* **types:** add UnionToTuple type ([664c563](https://github.com/kettil/tool-lib/commit/664c563b38f793cb6bbb407578edb5522b7e4625))
* **types:** add Unpacked type ([90945d9](https://github.com/kettil/tool-lib/commit/90945d9adb39334208576d4909cc0d820722e95a))
* **types:** export UnionToIntersection type ([d33a880](https://github.com/kettil/tool-lib/commit/d33a880c5ad300a482a8bf0d19074eb8eeec8983))

# [2.8.0](https://github.com/kettil/tool-lib/compare/2.7.0...2.8.0) (2020-12-09)


### Features

* update the index export ([88b89e5](https://github.com/kettil/tool-lib/commit/88b89e5c6c35a4ec29374d44c45b2f3881b7ff0c))
* **types:** add Expect, TupleOf and Range generic types ([0a2ddf1](https://github.com/kettil/tool-lib/commit/0a2ddf1d19221afc940b7cbced0c49810d33808c))
* **types:** add many swagger generic types ([fe5f2d0](https://github.com/kettil/tool-lib/commit/fe5f2d06bf3f53cb09e55f38c8811ac57d2a6bd0))
* **types:** add ObjectType, ObjectClean and ObjectNormalize generic types ([e426b8f](https://github.com/kettil/tool-lib/commit/e426b8f9abe566e29c9ccf6df7c476efc35be522))

# [2.7.0](https://github.com/kettil/tool-lib/compare/2.6.0...2.7.0) (2020-08-25)


### Features

* **string:** add toCamelCase function ([73443e4](https://github.com/kettil/tool-lib/commit/73443e45acf5bc131dfae1ff0b6619926591bbd0))

# [2.6.0](https://github.com/kettil/tool-lib/compare/2.5.0...2.6.0) (2020-08-12)


### Features

* **funcs:** add a dummy function ([3496feb](https://github.com/kettil/tool-lib/commit/3496feb739ab0a73d4b5f8b872a464bb4df84af7))

# [2.5.0](https://github.com/kettil/tool-lib/compare/2.4.0...2.5.0) (2020-08-12)


### Bug Fixes

* **array:** fix the return type of intersectArray ([c0cae57](https://github.com/kettil/tool-lib/commit/c0cae572dce103ac1a913b05ca4afed79b4379d9))


### Features

* **type:** add the type "EqualType" ([ec0d3c8](https://github.com/kettil/tool-lib/commit/ec0d3c85210c4c528ef52b4084f9e2d0962f9285))

# [2.4.0](https://github.com/kettil/tool-lib/compare/2.3.0...2.4.0) (2020-07-25)


### Features

* **is:** add isWeekday ([4b8aa1c](https://github.com/kettil/tool-lib/commit/4b8aa1c8aa2b0a8f6b4b92d440ebd04777657a9f))

# [2.3.0](https://github.com/kettil/tool-lib/compare/2.2.0...2.3.0) (2020-07-06)


### Features

* **node:** update the env function ([505dcd6](https://github.com/kettil/tool-lib/commit/505dcd600c961e66f0265205945493745fe2932b))

# [2.2.0](https://github.com/kettil/tool-lib/compare/2.1.0...2.2.0) (2020-05-28)


### Features

* **array:** Add the function intersectArray ([f9c8c2e](https://github.com/kettil/tool-lib/commit/f9c8c2ec8c8c5aa0e9b2a5459d9587725360c6e9))

# [2.1.0](https://github.com/kettil/tool-lib/compare/2.0.0...2.1.0) (2020-05-25)


### Bug Fixes

* **array:** Change the type of the return value ([53e8842](https://github.com/kettil/tool-lib/commit/53e8842e8607bc6e5c378ce024e3a831f76f7db0))


### Features

* **object:** Add the function objectEntries ([236caf8](https://github.com/kettil/tool-lib/commit/236caf885336898f924a70c176539c06e20ee376))
* **object:** Add the function objectKeys ([13882b1](https://github.com/kettil/tool-lib/commit/13882b1d95014f4e37c0eb2a666811020dcc3b04))

# [2.0.0](https://github.com/kettil/tool-lib/compare/1.3.0...2.0.0) (2020-05-23)


* Merge pull request #28 from kettil/rename-of-function ([3ab1661](https://github.com/kettil/tool-lib/commit/3ab1661bae610a9a7c2ae743d7f9dcf824c39a2b)), closes [#28](https://github.com/kettil/tool-lib/issues/28)


### BREAKING CHANGES

* Renaming of some functions

# [1.3.0](https://github.com/kettil/tool-lib/compare/1.2.0...1.3.0) (2020-05-23)


### Features

* **node:** Add function delay() ([d9af110](https://github.com/kettil/tool-lib/commit/d9af110a289c11fe67a0e93db66ae92c1255a534))

# [1.2.0](https://github.com/kettil/tool-lib/compare/1.1.0...1.2.0) (2020-05-21)


### Features

* **node:** Add function env() ([aace7a2](https://github.com/kettil/tool-lib/commit/aace7a2b3a84ee869abc21b808e6096def191eba))
* **node:** env() can return the whole env object ([8bcf9d5](https://github.com/kettil/tool-lib/commit/8bcf9d5a72cba2b729f4c5491cffe925e669e6ba))

# [1.1.0](https://github.com/kettil/tool-lib/compare/1.0.0...1.1.0) (2020-05-18)


### Features

* **array:** Add function arrayCreate() ([da178af](https://github.com/kettil/tool-lib/commit/da178af4c08effabe7fa51c22a94714094421141))

# 1.0.0 (2020-05-12)


### Features

* 🐣 ([6b7d79d](https://github.com/kettil/tool-lib/commit/6b7d79da356cc9f9c9bbb99b218a513057d856f9))
