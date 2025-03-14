/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Skylar', pet_type_id: 1},
    {id: 2, name: 'Jenny', pet_type_id: 1},
    {id: 3, name: 'Rose', pet_type_id: 3},
    {id: 4, name: 'Ash', pet_type_id: 1},
    {id: 5, name: 'Scratch', pet_type_id: 2},
    {id: 6, name: 'Cliff', pet_type_id: 2},
  ]);
};
