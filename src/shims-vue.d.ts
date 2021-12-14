declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '*.svg' {
  // It's really a string, precisely a resolved path pointing to the image file
  const filePath: string;

  export default filePath;
}
