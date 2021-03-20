module.expots = (sequelize, DataTypes) => 
    sequelize.define('Users', {
        email: {
            type: DataTypes.STRING,
            uniqu: true
        },
        password: DataTypes.STRING
    })