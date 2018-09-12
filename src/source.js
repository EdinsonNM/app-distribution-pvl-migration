var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let dotenv = require('dotenv');
dotenv.config();

const IPERIODO = process.env.IPERIODO;
console.log(IPERIODO);
module.exports = {
	documenttype: {
		query: `SELECT * FROM MaeTipDocumento`,
		transform : {
			code: 'iTipDoc',
			abbreviation: 'vAbrvTipDoc',
			name:'vDescTipDoc',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'documenttype',
			plural: 'documenttype',
			schema: {
				code: String,
				abbreviation:String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},
	benefittype: {
		query: `SELECT * FROM MaeMotRecBenf`,
		transform : {
			code: 'iCodMotRecBenf',
			name: 'vDescMotRecBenf',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'benefittype',
			plural: 'benefittype',
			schema: {
				code: String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},
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
	relationship: {
		query: `SELECT * FROM MaeParentesco`,
		transform : {
			code: 'iCodParentesco',
			name: 'vDescParentesco',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'relationship',
			plural: 'relationship',
			schema: {
				code: String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},
	socialprogram: {
		query: `SELECT * FROM MaeProgSocial`,
		transform : {
			code: 'iCodProgSoc',
			name: 'vDescProgSoc',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'socialprogram',
			plural: 'socialprogram',
			schema: {
				code: String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},
	governmenttype: {
		query: `SELECT * FROM MaeTipGobMuni`,
		transform : {
			code: 'iTipGobMuni',
			name:'vDescTipGobMuni',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'governmenttype',
			plural: 'governmenttype',
			schema: {
				code: String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},
	govlocal: {
		query: `SELECT * FROM TabGobLocal`,
		transform : {
			code: 'iCodGobLocal',
			codeubigeo:'vCodUbigeo',
			governmenttypeId:'iCodTipGobMuni',
			name:'vNomMuni',
			urbancoreId:'iTipNucUrbano',
			urbancoreName:'vNomNucUrbano',
			addresstypeId:'iCodTipVia',
			address:'vNomTipVia',
			number:'iNroVia',
			letter:'vLetraVia',
			block:'vBloque',
			manzana:'vManzana',
			lote:'vLote',
			floor:'iNroPiso',
			inside:'iNroPiso',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
		},
		model: {
			name: 'govlocal',
			plural: 'govlocal',
			schema: {
				code: String,
				codeubigeo:String,
				governmenttypeId:{type: Schema.Types.ObjectId, ref: 'governmenttype'},
				name:String,
				urbancoreId:{type: Schema.Types.ObjectId, ref: 'urbancore'},
				urbancoreName:String,
				addresstypeId:{type: Schema.Types.ObjectId, ref: 'viatype'},
				address:String,
				number:String,
				letter:String,
				block:String,
				manzana:String,
				lote:String,
				floor:String,
				inside:String,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,
			}
		},
		foreingKeys :{
			governmenttype: 'governmenttypeId',
			urbancore:'urbancoreId',
			viatype:'viatypeId'
		}
	},
	period: {
		query: `SELECT * FROM TabPeriodo where iPeriodo="${IPERIODO}"`,
		transform : {
			code: 'iCodPeriodo',
			name:'iPeriodo',
			description:'vDescPeriodo',
			govlocalId:'iCodGobLocal',
			documenttypeId:'iTipDocRespMuni',
			documentId:'vNroDocRespMuni',
			firstsurname:'vApePatRespMuni',
			lastsurname:'vApeMatRespMuni',
			names:'vNomRespMuni',
			email:'vEmailRespMuni',
			phone:'vTelefRespMuni',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
		},
		model: {
			name: 'period',
			plural: 'period',
			schema: {
				code: String,
				name:String,
				description:String,
				govlocalId:{type: Schema.Types.ObjectId, ref: 'govlocal'},
				documenttypeId:{type: Schema.Types.ObjectId, ref: 'documenttype'},
				documentId:String,
				firstsurname:String,
				lastsurname:String,
				names:String,
				email:String,
				phone:String,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date
			}
		},
		foreingKeys :{
			govlocal:'govlocalId',
			documenttypeId: 'documenttype'
		}
	},
	/*product: {
		query: `SELECT * FROM MaeTipAlimento`,
		transform : {
			code: 'iTipAlimentoID',
			name: 'vDescTipAlimento',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'product',
			plural: 'product',
			schema: {
				code: String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},*/
	ubigeo: {
		query: `SELECT * FROM MaeUbigeo`,
		transform : {
			code: 'vCodUbigeo',
			codeDep:'cCodDep',
			nameDep:'vNomDep',
			codeProv:'cCodPrv',
			nameProv:'vNomPrv',
			codeDist:'cCodDis',
			nameDist:'vNomDis',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'ubigeo',
			plural: 'ubigeo',
			schema: {
				code: String,
				codeDep:String,
				nameDep:String,
				codeProv:String,
				nameProv:String,
				codeDist:String,
				nameDist:String,
				active: Boolean,
				createdAt: Date,
				updatedAt: Date	
			}
		}
	},
	committee: {
		query: `SELECT * FROM TabComite where iPeriodo="${IPERIODO}"`,
		transform : {
			code: 'iCodComite',
			name: 'vNomComite',
			urbancoreId: 'iTipNucUrbano',
			urbancoreName: 'vNomNucUrbano',
			populatedCenter: 'iCodCCPP',
			populatedCenterName: 'vNomCCPP',
			addresstypeId: 'iCodTipVia',
			periodId:'iCodPeriodo',
			govLocalId:'iCodGobLocal',
			socialprogramId:'iCodProgSoc',
			addresstypeId:'iCodTipVia',
			addressName:'vNomTipVia',
			number:'iNroVia',
			letter:'vLetraVia',
			block:'vBloque',
			manzana:'vManzana',
			lote:'vLote',
			floor:'iNroPiso',
			inside:'vInterior',
			reprentative_documenttypeId:'iTipDocFunComite',
			reprentative_documentId:'vNroDocFunComite',
			representative_firstsurname:'vApePatFunComite',
			representative_lastsurname:'vApeMatFunComite',
			representative_names:'vNomFunComite',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
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
				periodId:String,
				govlocalId:{type: Schema.Types.ObjectId, ref: 'govlocal'},
				socialprogramId:{type: Schema.Types.ObjectId, ref: 'programsocial'},
				urbancoreId:{type: Schema.Types.ObjectId, ref: 'urbancore'},
				addresstypeId:{type: Schema.Types.ObjectId, ref: 'addresstype'},
				addressName:String,
				number:String,
				letter:String,
				block:String,
				manzana:String,
				lote:String,
				floor:String,
				inside:String,
				reprentative_documenttypeId:{type: Schema.Types.ObjectId, ref: 'documenttype'},
				reprentative_documentId:String,
				representative_firstsurname:String,
				representative_lastsurname:String,
				representative_names:String,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,
			}
		},
		foreingKeys :{
			urbancore: 'urbancoreId',
			addresstype: 'addresstypeId',
			period: 'periodId',
			govlocal:'govlocalId',
			socialprogram:'socialprogramId',
			urbancore:'urbancoreId',
			documenttype:'reprentative_documenttypeId',
			addresstype:'addresstypeId'
		}
	}, 
	partner: {
		query: `SELECT * FROM TabSocio where iPeriodo="${IPERIODO}"`,
		transform : {
			code: 'iCodSocio',
			periodId:'iPeriodo',
			committeeId: 'iCodComite',			
			benefittypeId: 'iCodMotRecBenf',
			addresstypeId:'iCodTipVia',
			address:'vNomTipVia',
			number:'iNroVia',
			letter:'vLetraVia',
			block:'vBloque',
			manzana:'vManzana',
			lote:'vLote',
			floor:'iNroPiso',
			inside:'vInterior',
			isBeneficiary: 'iEsBeneficiario',
			documenttypeId:'iTipDoc',
			documentId:'vNroDoc',
			firstsurname:'vApePat',
			lastsurname:'vApeMat',
			names:'vNombres',
			birthday: 'vFecNacimiento',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod'
		},
		model: {
			name: 'partner',
			plural: 'partner',
			schema: {
				code: String,
				periodId: String,
				committeeId: {type: Schema.Types.ObjectId, ref: 'committee'},		
				benefittypeId:  {type: Schema.Types.ObjectId, ref: 'benefittype'},
				addresstypeId:{type: Schema.Types.ObjectId, ref: 'addresstype'},
				address: String,
				number: String,
				letter: String,
				block: String,
				manzana: String,
				lote: String,
				floor: String,
				inside: String,
				isBeneficiary: String,
				documenttypeId: {type: Schema.Types.ObjectId, ref: 'documenttype'},
				documentId: String,
				firstsurname: String,
				lastsurname: String,
				names: String,
				birthday: Date,
				active: Boolean,
				createdAt: Date,
				updatedAt: Date
			}
		},
		foreingKeys :{
			period: 'periodId',
			committee:'committeeId',
			benefittype:'benefittypeId',
			addresstype:'addresstypeId',
			documenttype:'documenttypeId' //Verificar
		},
		foreingKeysId: {
			period: 'name'
		}
	}, 
	beneficiary: {
		query: `SELECT * FROM TabBeneficiario where iPeriodo="${IPERIODO}"`,
		transform : {
			code: 'iCodBenf',
			periodId:'iPeriodo',
			committeeId: 'iCodComite',
			partnerId: 'iCodSocio',
			relationshipId: 'iCodParentesco',
			firstsurname:'vApePat',
			lastsurname:'vApeMat',
			names:'vNombres',
			sexo:'cSexo',
			documenttypeId:'iTipDoc',
			documentId:'vNroDoc',
			age:'iEdad',
			birthdate:'vFecNacimiento',
			benefittypeId:'iCodMotRecBenf',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt: 'dtFecUltMod',	
		},
		model: {
			name: 'beneficiary',
			plural: 'beneficiary',
			schema: {
				code: String,
				periodId: String,
				committeeId: {type: Schema.Types.ObjectId, ref: 'committee'},
				partnerId: {type: Schema.Types.ObjectId, ref: 'partner'},
				relationshipId: {type: Schema.Types.ObjectId, ref: 'relationship'},
				firstsurname:String,
				lastsurname:String,
				names:String,
				sexo:String,
				documenttypeId: {type: Schema.Types.ObjectId, ref: 'documenttype'},
				otherdocumento:String,
				documentId:String,
				age:Number,
				birthdate:Date,
				benefittypeId:{type: Schema.Types.ObjectId, ref: 'benefittype'},
				active: Boolean,
				createdAt:Date,
				updatedAt: Date
			}
		},
		foreingKeys :{
			relationship: 'relationshipId',
			benefittype:'benefittypeId',
			partner:'partnerId',
			committee:'committeeId',
			documenttype: 'documenttypeId',
			period: 'periodId'
		},
		foreingKeysId: {
			period: 'name'
		}
	},

};