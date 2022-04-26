import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 32,
		trim: true
	},
	lastname: {
		type: String,
		maxlength: 32,
		trim: true
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	userinfo: {
		type: String,
		trim: true
	},
	//TODO: Salt
	encry_password: {
		type: String,
		required: true
	},
	salt: String,
	role: {
		type: Number,
		default: 0
	},
	purchases: {
		type: Array,
		default: []
	}
});

userSchema.method = {
	securePassword: function(password) {
		if (!password) {
			return '';
		}

		try {
			return createHmac('sha256', this.salt).update(password).digest('hex');
		} catch (error) {
			return '';
		}
	}
};

module.exports = mongoose.model('User', userSchema);
