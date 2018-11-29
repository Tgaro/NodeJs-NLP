function userDAO(user){
	this._user = user	
}

userDAO.prototype.authenticate = function() {

	let validation
	this._user == 'Tiago'
	? validation = true
	: validation = false

	return validation
}

module.exports = function(){
    return userDAO;
}