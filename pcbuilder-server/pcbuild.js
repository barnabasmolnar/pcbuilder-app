var mongoose = require("mongoose");
var mongoURL = require("./mongoCredentials");
mongoose.Promise = Promise;
mongoose.connect(mongoURL);

var requiredStr = { type: String, required: true }

var buildSchema = mongoose.Schema({
    configName: requiredStr,
    userName: requiredStr,
    currencyLabel: requiredStr,
    componentsArr: [
        {
            _id: false,
            componentName: requiredStr,
            itemName: requiredStr,
            price: { type: Number, required: true }
        }
    ]
}, {timestamps: { createdAt: 'createdAt' }});

module.exports = mongoose.model('pcBuild', buildSchema);