module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Question.associate = function (models) {
        Question.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Question.belongsTo(models.College, {
            foreignKey: {
                allowNull: false
            }
        });

        Question.hasMany(models.Answer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Question;
};