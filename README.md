# use-client-memo

use-client-memo is a library for useMemo in Serverside rendering framework.

## Installation

```shell
npm install --save use-client-memo
# or
yarn add use-client-memo
```

## Usage

```typescript
const Component = () => {
  // this raises error trying to reference undefined "window"
  //  on server side rendering

  // const windowArea = useMemo(() => {
  //   return window.innerWidth * window.innerHeight;
  // }, []);

  // this works on server side rendering
  const windowArea = useClientMemo(() => {
    return window.innerWidth * window.innerHeight;
  }, 0, []);
}
```
