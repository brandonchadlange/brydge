export const applyCreate = <T>(entity: any, defaults?: Partial<T>) => {
  return (data: T) => {
    return entity.create({
      ...data,
      ...defaults,
    });
  };
};
