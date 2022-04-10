# Exceptions

[![npm](https://img.shields.io/npm/v/@kettil/errors)](https://www.npmjs.com/package/@kettil/errors)

Simple creation of customized error classes.

## Installation

```bash
npm install @kettil/errors
```

## Usage

```typescript
import { customError, isCustomError, isError } from '@kettil/errors';

// create a custom error
class SimpleExampleError extends customError({
  code: 'SimpleExample';
})

// throw the custom error
throw new SimpleExampleError('message');
```

With the following test functions, it can be tested, whether a variable is an Error/CustomError instance.

```typescript
if (isError(errorVariable)) {
  // is true if the variable is an instance of Error
}

if (isCustomError(errorVariable)) {
  // is true if the variable is an instance of CustomError
}

if (isCustomError(errorVariable, SimpleExampleError)) {
  // is true if the variable is an instance of CustomError
  // and "code" value is equal
}
```

A complete example with explanation of the parameters.

```typescript
// Create a error class
class ExampleError extends customError({
  code: 'UniqueErrorCode',
  // statusCode is used in the context of an web API and is
  // interpreted by e.g. Fastify. [Default: 500]
  statusCode = 500, // optional
  // The error message if none was defined when throwing, if
  // "defaultMessage" is undefined, then the converted "code"
  // value is used. ("UniqueErrorCode" => "Unique error code.")
  defaultMessage: 'Error message.', // optional
})

// The simplest kind. Error message is the default message.
throw new ExampleError();

// The natural kind. Overwrites the default message.
throw new ExampleError('Other error message.');

// The complete kind. All parameters are optional.
throw new ExampleError({
  message: 'Error message.',
  // Status code for the web API context.
  statusCode: 404,
  // Error instance from a previous error.
  cause: otherErrorVariable,
  // Additional data relevant to the context of the error.
  data: { foo: 42 },
});
```

A detailed description of "cause" can be found in the [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#syntax).

### Logger support

The `customError` instances have a built-in `toJSON()` function so that a consistent output is generated when logging.

## Example for a Project

Create an `errors.ts` in the `lib` folder of your project.
In this file all error cases for this project are defined.

```typescript
/* eslint-disable max-classes-per-file -- collect all error classes */
import { customError, defaultErrors } from '@kettil/errors';

class SimpleExampleError extends customError({
  code: 'SimpleExample';
})

class FullExampleError extends customError({
  code: 'FullExample';
  statusCode: 404;
  defaultMessage: 'Default error message.';
})

const errors = {
  ...defaultErrors,

  SimpleExampleError,
  FullExampleError
} as const;

export { errors };
```

If an error is to be thrown, the error classes can simply be imported.

```typescript
import { errors } from '<path>/errors.ts';

// ...

throw new errors.FullExampleError();

// ...
```

## Integrated customized error classes

| Error                      | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `ExternalServiceError`     | A wrapper for an error of an external service. |
| `GenericError`             | Replaced the original error class.             |
| `NotImplementedError`      | If a feature is not yet fully implemented.     |
| `OutsideRangeError`        | If a value is out of the allowed range.        |
| `UndefinedSwitchCaseError` | If an undefined switch case occurs.            |
| `WrongTypeError`           | If the variable has the wrong type.            |
