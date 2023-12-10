module.exports = (sequelize, Sequelize) => {
    const CapstoneProjectBeGrup27 = sequelize.define('capstone_project_be_grup27', {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        published: {
            type: Sequelize.BOOLEAN,
        },
    });
    return CapstoneProjectBeGrup27;
}
