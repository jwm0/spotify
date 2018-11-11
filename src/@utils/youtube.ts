export const getArtist = (title: string) => {
  // TODO: improve regex
  const arr = title.match(/[^-]+/g);

  if (arr) {
    const [artistName = '', title = ''] = arr;
    return {
      artistName: artistName.trim(),
      title: title.trim(),
    };
  }
  return {};
};
