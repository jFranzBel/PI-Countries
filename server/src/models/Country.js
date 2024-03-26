const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
     sequelize.define(
          "Country",
          {
               id: {  // json property: cca3 
                    type: DataTypes.STRING(3),
                    allowNull: false,
                    primaryKey: true,
               },
               name: {  // json property: name.common
                    type: DataTypes.STRING,
                    allowNull: false,
               },
               flags: {  // json property: flags.png
                    type: DataTypes.STRING,
                    allowNull: false,
               },
               continents: {  // json property: continents "is an array may have two"
                    type: DataTypes.ARRAY(DataTypes.STRING),
                    allowNull: false,
                    defaultValue: [],
               },
               capital: {  // json property: capital / capital[0]
                    type: DataTypes.STRING,
                    allowNull: true, // < There are countries with no data
               },
               subregion: { type: DataTypes.STRING },
               area: { type: DataTypes.INTEGER },
               population: { type: DataTypes.INTEGER },
          },
          { timestamps: false }
     );
};
