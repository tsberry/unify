module.exports = function (sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
        transport: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        food: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faculty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        campuslife: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        security: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                unique: true,
                primaryKey: true
            }
        });

        Rating.belongsTo(models.College, {
            foreignKey: {
                allowNull: false
            },
            constraints: false
        });
    };

    return Rating;
};