declare module '*.css' {
  const content: { [className: string]: string }
  // eslint-disable-next-line import/no-default-export
  export default content
}
