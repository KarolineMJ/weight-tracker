exports.up = pgm => {
    pgm.createTable('measurements', {
        id: 'id',
        weight: { type: 'numeric(5,1)', notNull: true },
        measure_date: { type: 'date', notNull: true }
    })
};
