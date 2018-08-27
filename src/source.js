var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = {
	urbancore: {
		query: `SELECT * FROM MaeNucUrbano`,
		transform : {
			code: 'iTipNucUrbano',
			name: 'vTipoNucUrbano'
		},
		model: {
			name: 'urbancore',
			plural: 'urbancore',
			schema: {
				code: String,
				name: String,
				active: Boolean
			}
		}
	},
	addresstype: {
		query: `SELECT * FROM MaeTipVia`,
		transform : {
			code: 'iCodTipVia',
			name: 'vDescTipVia',
			active: 'iEstaReg'
		},
		model: {
			name: 'addresstype',
			plural: 'addresstype',
			schema: {
				code: String,
				name: String,
				active: Boolean
			}
		}
	},
	product: {
		query: `SELECT * FROM MaeTipAlimento`,
		transform : {
			code: 'iTipAlimentoID',
			name: 'vDescTipAlimento',
			active: 'iEstaReg'
		},
		model: {
			name: 'product',
			plural: 'product',
			schema: {
				code: String,
				name: String,
				active: Boolean

			}
		}
	},
	committee: {
		query: `SELECT * FROM TabComite`,
		transform : {
			code: 'iCodComite',
			name: 'vNomComite',
			urbancoreId: 'iTipNucUrbano',
			urbancoreName: 'vNomNucUrbano',
			populatedCenter: 'iCodCCPP',
			populatedCenterName: 'vNomCCPP',
			addresstypeId: 'iCodTipVia',
		},
		model: {
			name: 'committee',
			plural: 'committee',
			schema: {
				code: String,
				name: String,
				urbancoreId: {type: Schema.Types.ObjectId, ref: 'urbancore'},
				urbancoreName: String,
				populatedCenter: Number,
				populatedCenterName: String,
				addresstypeId: {type: Schema.Types.ObjectId, ref: 'addresstype'},
			}
		},
		foreingKeys :{
			urbancore: 'urbancoreId',
			addresstype: 'addresstypeId'
		}
	}
};