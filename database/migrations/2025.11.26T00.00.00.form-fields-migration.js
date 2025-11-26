'use strict'

async function up(knex) {
    await knex.from('components_content_page_components_forms_cmps')
        .update({ field: 'formFields' })
        .where({ field: 'fields' });
}

module.exports = { up };