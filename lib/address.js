var Helpers = require('./helpers');
var Faker = require('../index');
var definitions = require('../lib/definitions');

var address = {
    zipCode: function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.array_element(['######']));
    },

    zipCodeFormat: function (format) {
        return Helpers.replaceSymbolWithNumber(['######'][format]);
    },

    city: function () {
        var result;
        result = Faker.random.last_name() + Faker.random.last_name() + Faker.random.city_suffix();
        return result;
    },

    streetName: function () {
        var result;
        switch (Faker.random.number(2)) {
        case 0:
            result = Faker.random.last_name() + Faker.random.last_name() + Faker.random.street_suffix();
            break;
        case 1:
            result = Faker.random.first_name() + Faker.random.last_name() + Faker.random.street_suffix();
            break;
        }
        return result;
    },

    //
    // TODO: change all these methods that accept a boolean to instead accept an options hash.
    //
    streetAddress: function (useFullAddress) {
        if (useFullAddress === undefined) { useFullAddress = false; }
        var address = "";
        switch (Faker.random.number(3)) {
        case 0:
            address = this.streetName() + Helpers.replaceSymbolWithNumber("#####") + "号";
            break;
        case 1:
            address = this.streetName() + Helpers.replaceSymbolWithNumber("####") +  "号";
            break;
        case 2:
            address = this.streetName() + Helpers.replaceSymbolWithNumber("###") + "号";
            break;
        }
        return useFullAddress ? (address + this.secondaryAddress()) : address;
    },

    secondaryAddress: function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.array_element(
            [
                '##号楼#0#',
                '##栋##号#0#',
                '#0#'
            ]
        ));
    },

    brState: function (useAbbr) {
        return useAbbr ? Faker.random.br_state_abbr() : Faker.random.br_state();
    },

    ukCounty: function () {
        return Faker.random.uk_county();
    },

    ukCountry: function () {
        return Faker.random.uk_country();
    },

    cnState: function (useAbbr) {
        return useAbbr ? Faker.random.cn_state_abbr() : Faker.random.cn_state();
    },

    latitude: function () {
        return (Faker.random.number(180 * 10000) / 10000.0 - 90.0).toFixed(4);
    },

    longitude: function () {
        return (Faker.random.number(360 * 10000) / 10000.0 - 180.0).toFixed(4);
    }
};

module.exports = address;
