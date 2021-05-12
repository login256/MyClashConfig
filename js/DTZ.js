module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    var pat = /DOMAIN-SUFFIX,.*\..*,DIRECT/
    const obj = yaml.parse(raw)
    obj.rules = obj.rules.map(element => {
        if (element.search('GEOIP,CN,DIRECT') != -1) {
            return "GEOIP,CN,🚀直接连接"
        }
        if (pat.test(element)) {
            return element.replace("DIRECT", "🚀直接连接")
        }
        return element
    });
    return yaml.stringify(obj)
}