# About the issue

- When you copy code that relay on symbols that already exits in the target file - you will have duplicate imports.

- When you copy code to a comment it will also copy the imports.

## Demo
<video width="640" height="360" controls>
  <source src="./video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## reproduce

```
npm install
```

Try to copy `mongoose.Model<Lock444>` from `thing.ts` to `copy.ts`.