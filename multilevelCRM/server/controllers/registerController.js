const userDB ={
    users:require("../models/users.json"),
    setUser: function (data){this.users  = data}
}
const fsPromises = reuire('fs').promises;
const path = require('path');
const 