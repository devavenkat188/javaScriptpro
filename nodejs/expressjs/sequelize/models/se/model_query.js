const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require('../../../config/db_connect');
const { Op } = require("sequelize");

const User = sequelize.define("user", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    userName: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    location: DataTypes.TEXT,
    department: DataTypes.STRING,
    salary: DataTypes.INTEGER,

}, {
    tableName: "Emp_Detail",
    timestamps: false,
    /*operatorsAliases: {
        $gt: Op.gt
    } */
});
// Simple insert query
(async () => {
    try {
        await sequelize.sync({ force: true }); // This will force the creation of the table
        console.log('Table created successfully.');

        const name = await User.create({ firstName: "Arun", lastName: "M", userName: "arun02", userId: 1, location: "Chennai", department: "System Engineer", salary: 30000 });
        await User.create({ firstName: "Deva", lastName: "V", userName: "deva88", userId: 2, location: "Salem", department: "Intern", salary: 20000 });
        await User.create({ firstName: "Sanjay", lastName: "V", userName: "sanjay66", userId: 3, location: "Chennai", department: "System Engineer", salary: 40000 });
        console.log("Auto-generated ID: ", name.id);

        // simple select query
        (async () => {
            const users = await User.findAll();
            console.log(users.every(user => user instanceof User));
            console.log("All Users:", JSON.stringify(users, "Deva"));
        })();

        // specifying attributes for Select query
        User.findAll({
            attributes: ['firstName', 'location', 'department'],
        });

        User.findAll({
            attributes: ['firstName', ['location', 'department'], 'salary'],
        });

        // sequelize.fn
        /* User.findAll({
            attributes: [
                'firstName',
                [sequelize.fn('COUNT', sequelize.col('location')), 'n_location'],
                'department'
            ]
        }); */
        /*
        User.findAll({
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('location')), 'n_location']
                ]
            }
        }); */
        User.findAll({
            where: {
                firstName: 'Arun',
                salary: 30000
            }
        });

        User.findAll({
            where: {
                [Op.or]: [
                    { firstName: 'Deva' },
                    { firstName: 'Sanjay' },
                ]
            }
        });


        User.destroy({
            where: {
                firstName: {
                    [Op.or]: ['Sanjay', 'Gokul']
                }
            }
        });
        // Combination of or & and operator:
        User.findAll({
            where: {
                [Op.or]: [
                    sequelize.where(sequelize.fn('char_length', sequelize.col('firstName')), 4),
                    {
                        firstName: {
                            [Op.like]: 'Deva%'
                        }
                    },
                    {
                        [Op.and]: [
                            { lastName: 'V' },
                            sequelize.where(sequelize.fn('char_length', sequelize.col('firstName')), {
                                [Op.gt]: sequelize.literal('5'),
                            }),
                        ]
                    }
                ]
            }
        })
        // using aliases:
        /* User.findAll({
             where: {
                 $gt: 6
             }
         }); */
        // Update using where clause
        await User.update({ lastName: "M" }, {
            where: {
                lastName: null
            }
        });
        // Bulk Create
        const Users = await User.bulkCreate([
            { firstName: "Kamalesh", lastName: "R", userName: "kamalesh06", userId: 4, location: "Salem", department: "IT", salary: 20000 },
            { firstName: "Raja", lastName: "S", userName: "Raja08", userId: 5, location: "Salem", department: "IT", salary: 25000 },
        ]);
        // pagination
        User.findAll({ limit: 2 });
        // findByPk - Primary Key
        const found_primary = await User.findByPk(1);
        if (found_primary === null) {
            console.log('Not found!');
        } else {
            console.log(found_primary instanceof User);
        }
        //findOne
        const found_user = await User.findOne({ where: { location: 'Chennai' } });
        if (found_user === null) {
            console.log('Not found');
        } else {
            console.log(found_user instanceof User);
            console.log(found_user.location);
        }
    } catch (error) {
        console.error('Error creating table:', error);
    }
})();

(async () => {
    const user = await User.create({
        userName: 'deva02',
        isAdmin: true,
    }, {
        fields: ['userName']
    });
    console.log(user.userName);
    console.log(user.isAdmin);
});
// findOrCreate --> will create an entries in a table unless it can find one fullfilling the query.
(async () => {
    const [user, created] = await User.findOrCreate({
        where: { userName: 'deva88' },
        defaults: {
            department: 'Intern',
        }
    });
    console.log(user.userName);
    console.log(user.department);
    console.log(created);
    if (created) {
        console.log(user.department);
    }
});
// findAndCountAll
(async () => {
    const { count, rows } = await User.findAndCountAll({
        where: {
            department: {
                [Op.like]: 'Intern%'
            }
        },
        offset: 10,
        limit: 2,
    });
    console.log(count);
    console.log(rows);
})
// Getters
/*
const user = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('userName');
            return rawValue ? rawValue.toUpperCase() : null;
        }
    }
});
*/
// simple select query

module.exports = User;
