# String functions

## camelCase

Converts a string to camelCase.

```typescript
const value = camelCase('lorem ipsum'); // = 'loremIpsum'
```

## dotCase

Converts a string to dot.case.

```typescript
const value = dotCase('lorem ipsum'); // = 'lorem.ipsum'
```

## indent

Inserts each line from the string, either with spaces or arbitrary characters.

```typescript
const value = indent(`lorem\nipsum`); // = '  lorem\n  ipsum'
const value = indent(`lorem\nipsum`, 4); // = '    lorem\n    ipsum'
const value = indent(`lorem\nipsum`, '> '); // = '> lorem\n> ipsum'
const value = indent(`lorem\nipsum`, '> ', 2); // = '> > lorem\n> > ipsum'
```

## kebabCase

Converts a string to kebab-case.

```typescript
const value = kebabCase('lorem ipsum'); // = 'lorem-ipsum'
```

## lowerCaseFirst

Converts the first character from string to lowercase.

```typescript
const value = lowerCaseFirst('Lorem ipsum'); // = 'lorem ipsum'
```

## upperCaseFirst

Converts the first character from string to uppercase.

```typescript
const value = upperCaseFirst('lorem ipsum'); // = 'Lorem ipsum'
```
