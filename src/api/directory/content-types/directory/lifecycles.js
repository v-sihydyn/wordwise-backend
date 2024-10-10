module.exports = {
  async beforeDelete(event) {
    const directoryId = event.params.where.id

    await strapi.db.query('api::term.term').delete({
      where: { directory: directoryId }
    })
    console.log('Successfully deleted all terms related to directory with id', directoryId)
  },
};
