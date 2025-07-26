# About the issue

- When you copy code that relay on symbols that already exits in the target file - you will have duplicate imports.

- When you copy code to a comment it will also copy the imports.

## Demo

https://github.com/user-attachments/assets/8a2df326-a40f-41fb-93dc-cecedea283f7

## reproduce

```
npm install
```

Try to copy `mongoose.Model<Lock444>` from `thing.ts` to `copy.ts`.
