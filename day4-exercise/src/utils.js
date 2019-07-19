export const getPersonById = (families, id) => {
  return families.find(person => person.id === id);
};
