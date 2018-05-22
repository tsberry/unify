module.exports = function (sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
        ratingFor_Transport: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ratingFor_Food: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ratingFor_Faculty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ratingFor_CampusLife: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ratingFor_Security: {
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