export default (sequelize, DataTypes) => {
    const GoogleAuth = sequelize.define('google_auth', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        google_id: DataTypes.STRING,
        email: DataTypes.STRING,
        name: DataTypes.STRING
    })

    GoogleAuth.associate = models => {
        GoogleAuth.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
    }

    return GoogleAuth
}