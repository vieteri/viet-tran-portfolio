export const slugify = (text: string) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, ''); // Remove all non-word chars
  