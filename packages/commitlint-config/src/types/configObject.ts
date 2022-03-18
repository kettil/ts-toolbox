/* eslint-disable @typescript-eslint/naming-convention -- The naming convention is given by commitlint */
import type { Applicable } from './applicable';
import type { Case } from './case';
import type { Level } from './level';

type ConfigObject = {
  extends?: string[] | string;
  rules?: {
    'body-full-stop'?: [Level, Applicable, string];
    'body-leading-blank'?: [Level, Applicable];
    'body-empty'?: [Level, Applicable];
    'body-max-length'?: [Level, Applicable, number];
    'body-min-length'?: [Level, Applicable, number];
    'body-max-line-length'?: [Level, Applicable, number];
    'body-case'?: [Level, Applicable, Case | Case[]];
    'footer-leading-blank'?: [Level, Applicable];
    'footer-max-length'?: [Level, Applicable, number];
    'footer-max-line-length'?: [Level, Applicable, number];
    'footer-min-length'?: [Level, Applicable, number];
    'footer-empty'?: [Level, Applicable];
    'header-case'?: [Level, Applicable, Case | Case[]];
    'header-full-stop'?: [Level, Applicable, string];
    'header-max-length'?: [Level, Applicable, number];
    'header-min-length'?: [Level, Applicable, number];
    'references-empty'?: [Level, Applicable];
    'scope-case'?: [Level, Applicable, Case | Case[]];
    'scope-empty'?: [Level, Applicable];
    'scope-max-length'?: [Level, Applicable, number];
    'scope-min-length'?: [Level, Applicable, number];
    'subject-max-length'?: [Level, Applicable, number];
    'subject-min-length'?: [Level, Applicable, number];
    'subject-case'?: [Level, Applicable, Case | Case[]];
    'subject-empty'?: [Level, Applicable];
    'subject-full-stop'?: [Level, Applicable, '.'];
    'subject-exclamation-mark'?: [Level, Applicable];
    'type-case'?: [Level, Applicable, Case | Case[]];
    'type-empty'?: [Level, Applicable];
    'type-enum'?: [Level, Applicable, string[]];
    'type-max-length'?: [Level, Applicable, number];
    'type-min-length'?: [Level, Applicable, number];
  };
};

export type { ConfigObject };
