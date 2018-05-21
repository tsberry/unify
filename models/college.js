module.exports = function (sequelize, DataTypes) {
    var College = sequelize.define("College", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        queryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        students: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        years: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownership: {
            type: DataTypes.STRING,
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

    College.associate = function (models) {
        College.belongsToMany(models.User, {
            through: "UserCollege",
            foreignKey: "College"
        });

        College.hasMany(models.Question, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return College;
};