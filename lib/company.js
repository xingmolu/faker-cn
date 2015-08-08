var Faker = require('../index');

var company = {
    suffixes: function () {
        return ["有限公司", "公司", "集团", "控股集团", "局"];
    },

    companyName: function (format) {
        switch ((format ? format : Faker.random.number(2))) {
        case 0:
            return Faker.Name.lastName() + Faker.Name.lastName() + this.companySuffix();
        case 1:
            return Faker.Name.lastName() + Faker.Name.lastName() + Faker.Name.lastName() + this.companySuffix();
        }
    },

    companySuffix: function () {
        return Faker.random.array_element(this.suffixes());
    },

    catchPhrase: function () {
        return Faker.random.catch_phrase_adjective() + "" +
            Faker.random.catch_phrase_descriptor() + "" +
            Faker.random.catch_phrase_noun();
    },

    bs: function () {
        return Faker.random.bs_adjective() + "" +
            Faker.random.bs_buzz() + "" +
            Faker.random.bs_noun();
    }
};

module.exports = company;
