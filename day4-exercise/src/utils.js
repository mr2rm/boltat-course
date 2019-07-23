import families from "./data.json";

export const getPersonById = id => families.find(person => person.id === id);
