module.exports = {
    // config for a library is scoped under "dependency" key
    dependency: {
        platforms: {
            android: {
                "packageInstance": "new FabricPackage()"
            }, // projects are grouped into "platforms"
        }
    },
};