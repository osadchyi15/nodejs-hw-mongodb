const parseFavourite = (isFavourite) => {
  if (typeof isFavourite === 'boolean') return isFavourite;
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
  return undefined;
};

const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return undefined;

  const validContactTypes = ['work', 'home', 'personal'];
  const normalizedType = contactType.toLowerCase();

  return validContactTypes.includes(normalizedType)
    ? normalizedType
    : undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseFavourite(isFavourite);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
