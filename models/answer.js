module.exports = function (sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Answer.associate = function (models) {
        Answer.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Answer.belongsTo(models.Question, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Answer;
};