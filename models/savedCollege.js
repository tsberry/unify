module.exports = function (sequelize, DataTypes) {
    var SavedCollege = sequelize.define("SavedCollege", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        queryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ratingFor_Transport: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        ratingFor_Food: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        ratingFor_Faculty: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        ratingFor_CampusLife: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        ratingFor_Security: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    });

    SavedCollege.associate = function (models) {
        SavedCollege.belongsToMany(models.User, {
            through: "UserCollege",
            foreignKey: {
                allowNull: true
            }
        });
        SavedCollege.hasMany(models.Question, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return SavedCollege;
};