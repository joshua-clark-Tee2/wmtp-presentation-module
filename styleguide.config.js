const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'WMTP modules',
    pagePerSection: true,
    exampleMode: "expand",
    usageMode: "expand",
    sections: [ {
        name: 'Components',
        description: 'WMTP components',
        components: function () {
            return glob.sync(path.resolve(__dirname, 'components/**/*.tsx'))
                .filter(function (module) {
                    return /\/[A-Z]\w*\.tsx$/.test(module);
                });
        },
    }],
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};