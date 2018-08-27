var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = {
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
	product: {
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
	},
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
	viatype: {
		query: `SELECT * FROM MaeTipVia`,
		transform : {
			code: 'iCodTipVia',
			name:'vDescTipVia',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt:'dtFecUltMod'			
		},
		model: {
			name: 'viatype',
			plural: 'viatype',
			schema: {
				code: String,
				name: String,
				active: Boolean,
				createdAt: Date,
				updatedAt:Date
			}
		}
	},
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
			name: 'viatype',
			plural: 'viatype',
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
	beneficiary: {
		query: `SELECT * FROM TabBeneficiario`,
		transform : {
			code: 'iCodBenf',
			period:'iPeriodo',
			comiteId: 'iCodComite',
			socioId: 'iCodSocio',
			relationshipId: 'iCodParentesco',
			lastname1:'vApePat',
			lastname2:'vApeMat',
			name:'vNombres',
			sexo:'cSexo',
			documenttypeId:'iTipDoc',
			otherdocumento:'vOtroTipDoc',
			numberdoc:'vNroDoc',
			age:'iEdad',
			birthdate:'vFecNacimiento',
			benefittypeId:'iCodMotRecBenf',
			isdataok:'iEsDataValida',
			active: 'iEstaReg',
			createdAt: 'dtFecCreacion',
			updatedAt: 'dtFecUltMod',	
			codeMuni:'COD_MUNI',
			codeComite:'ID_COMITE',
			codeSocio:'ID_SOCIO',
			code:'ID_BENEF'
		},
		model: {
			name: 'beneficiary',
			plural: 'beneficiary',
			schema: {
				code: String,
				period:String,
				committeeId: {type: Schema.Types.ObjectId, ref: 'committee'},
				partnerId: {type: Schema.Types.ObjectId, ref: 'partner'},
				relationshipId: {type: Schema.Types.ObjectId, ref: 'relationship'},
				lastname1:String,
				lastname2:String,
				name:String,
				sexo:String,
				documenttypeId:String,
				otherdocumento:String,
				numberdoc:String,
				age:Number,
				birthdate:Date,
				benefittypeId:{type: Schema.Types.ObjectId, ref: 'benefittype'},
				isdataok:Boolean,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,	
				codemuni:String,
				codecommittee:String,
				codepartner:String,
				codeId:String
			}
		},
		foreingKeys :{
			relationship: 'relationshipId',
			benefittype:'benefittypeId',
			partner:'partnerId',
			committee:'committeeId'
		}
	},
	committee: {
		query: `SELECT * FROM TabComite`,
		transform : {
			code: 'iCodComite',
			name:'vNomComite',
			codeperiod:'iCodPeriodo',
			periodId:'iPeriodo',			
			govLocalId:'iCodGobLocal',
			socialprogramId:'iCodProgSoc',
			codeCCPP:'iCodCCPP',
			nameCCPP:'vNomCCPP',
			urbancoreId:'iTipNucUrbano',
			nameurbancore:'vNomNucUrbano',
			viatypeId:'iCodTipVia',
			nametypevia:'vNomTipVia',
			numbervia:'iNroVia',
			lettervia:'vLetraVia',
			block:'vBloque',
			apple:'vManzana',
			lot:'vLote',
			numberfloor:'iNroPiso',
			inside:'vInterior',
			foodtypeId:'vTipAlimentoID',
			otherfoottype:'vOtroTipAlimento',
			documenttypefundcommitteeId:'iTipDocFunComite',
			numberfundcommittee:'vNroDocFunComite',
			lastname1fundcommittee:'vApePatFunComite',
			lastname2fundcommittee:'vApeMatFunComite',
			namefundcommittee:'vNomFunComite',
			isdataok:'iEsDataValida',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
			codemuni:'COD_MUNI',
			codeId:'ID_COMITE'
		},
		model: {
			name: 'committee',
			plural: 'committee',
			schema: {
				code: String,
				name:String,
				codeperiod:{type: Schema.Types.ObjectId, ref: 'period'},
				periodId:String,				
				govlocalId:{type: Schema.Types.ObjectId, ref: 'govlocal'},
				socialprogramId:{type: Schema.Types.ObjectId, ref: 'programsocial'},
				codeCCPP:String,
				nameCCPP:String,
				urbancoreId:{type: Schema.Types.ObjectId, ref: 'urbancore'},
				nameurbancore:String,
				viatypeId:String,
				nametypevia:String,
				numbervia:String,
				lettervia:String,
				block:String,
				apple:String,
				lot:String,
				numberfloor:String,
				inside:String,
				foodtypeId:String,
				otherfoottype:String,
				documenttypefundcommitteeId:{type: Schema.Types.ObjectId, ref: 'documenttype'},
				numberfundcommittee:String,
				lastname1fundcommittee:String,
				lastname2fundcommittee:String,
				namefundcommittee:String,
				isdataok:Boolean,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,
				codemuni:String,
				codeId:String
			}
		},
		foreingKeys :{
			period: 'codeperiod',
			govlocal:'govlocalId',
			socialprogram:'socialprogramId',
			urbancore:'urbancoreId',
			documenttype:'documenttypefundcommitteeId' //Verificar
		}
	},
	govlocal: {
		query: `SELECT * FROM TabGobLocal`,
		transform : {
			code: 'iCodGobLocal',
			codeubigeo:'vCodUbigeo',
			governmenttypeId:'iCodTipGobMuni',
			namemuni:'iCodTipGobMuni',
			urbancoreId:'iTipNucUrbano',
			nameurbancore:'vNomNucUrbano',
			viatypeId:'iCodTipVia',
			nametypevia:'vNomTipVia',
			numbervia:'iNroVia',
			lettervia:'vLetraVia',
			block:'vBloque',
			apple:'vManzana',
			lot:'vLote',
			numberfloor:'iNroPiso',
			inside:'iNroPiso',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
			codemuni:'COD_MUNI'
		},
		model: {
			name: 'govlocal',
			plural: 'govlocal',
			schema: {
				code: String,
				codeubigeo:String,
				governmenttypeId:{type: Schema.Types.ObjectId, ref: 'governmenttype'},
				namemuni:String,
				urbancoreId:{type: Schema.Types.ObjectId, ref: 'urbancore'},
				nameurbancore:String,
				viatypeId:{type: Schema.Types.ObjectId, ref: 'viatype'},
				nametypevia:String,
				numbervia:String,
				lettervia:String,
				block:String,
				apple:String,
				lot:String,
				numberfloor:String,
				inside:String,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,
				codemuni:String
			}
		},
		foreingKeys :{
			governmenttype: 'governmenttypeId',
			urbancore:'urbancoreId',
			viatype:'viatypeId'
		}
	},
	parameters: {
		query: `SELECT * FROM TabParametro`,
		transform : {
			code: 'iCodParametro',
			name:'vNombreParametro',
			description:'vDescParametro',
			value:'vValorParametro',
			msj:'vMsjParametro',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
			codemuni:'COD_MUNI'
		},
		model: {
			name: 'parameters',
			plural: 'parameters',
			schema: {
				code: String,
				name:String,
				description:String,
				value:Number,
				msj:String,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,
				codemuni:String
			}
		}
	},
	period: {
		query: `SELECT * FROM TabPeriodo`,
		transform : {
			code: 'iCodPeriodo',
			name:'iPeriodo',
			description:'vDescPeriodo',
			govlocalId:'iCodGobLocal',
			active: 'iEstaReg',
			documenttypeRespId:'iTipDocRespMuni',
			namberDocResp:'vNroDocRespMuni',
			lastname1Resp:'vApePatRespMuni',
			lastname2Resp:'vApeMatRespMuni',
			nameResp:'vNomRespMuni',
			emailResp:'vEmailRespMuni',
			tlfResp:'vTelefRespMuni',
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
				active: Boolean,
				documenttypeRespId:{type: Schema.Types.ObjectId, ref: 'documenttype'},
				namberDocResp:String,
				lastname1Resp:String,
				lastname2Resp:String,
				nameResp:String,
				emailResp:String,
				tlfResp:String,
				active: boolean,
				createdAt:Date,
				updatedAt: Date
			}
		},
		foreingKeys :{
			govlocal:'govlocalId',
			documenttypeRespId: 'documenttype'
		}
	},
	partner: {
		query: `SELECT * FROM TabSocio`,
		transform : {
			code: 'iCodSocio',
			codeperiod:'iCodPeriodo',
			periodId:'iPeriodo',			
			govLocalId:'iCodGobLocal',
			socialprogramId:'iCodProgSoc',
			codeCCPP:'iCodCCPP',
			nameCCPP:'vNomCCPP',
			urbancoreId:'iTipNucUrbano',
			nameurbancore:'vNomNucUrbano',
			viatypeId:'iCodTipVia',
			nametypevia:'vNomTipVia',
			numbervia:'iNroVia',
			lettervia:'vLetraVia',
			block:'vBloque',
			apple:'vManzana',
			lot:'vLote',
			numberfloor:'iNroPiso',
			inside:'vInterior',
			foodtypeId:'vTipAlimentoID',
			otherfoottype:'vOtroTipAlimento',
			documenttypefundcommitteeId:'iTipDocFunComite',
			numberfundcommittee:'vNroDocFunComite',
			lastname1fundcommittee:'vApePatFunComite',
			lastname2fundcommittee:'vApeMatFunComite',
			namefundcommittee:'vNomFunComite',
			isdataok:'iEsDataValida',
			active: 'iEstaReg',
			createdAt:'dtFecCreacion',
			updatedAt: 'dtFecUltMod',
			codemuni:'COD_MUNI',
			codeId:'ID_COMITE'
		},
		model: {
			name: 'committee',
			plural: 'committee',
			schema: {
				code: String,
				name:String,
				codeperiod:{type: Schema.Types.ObjectId, ref: 'period'},
				periodId:String,				
				govlocalId:{type: Schema.Types.ObjectId, ref: 'govlocal'},
				socialprogramId:{type: Schema.Types.ObjectId, ref: 'programsocial'},
				codeCCPP:String,
				nameCCPP:String,
				urbancoreId:{type: Schema.Types.ObjectId, ref: 'urbancore'},
				nameurbancore:String,
				viatypeId:String,
				nametypevia:String,
				numbervia:String,
				lettervia:String,
				block:String,
				apple:String,
				lot:String,
				numberfloor:String,
				inside:String,
				foodtypeId:String,
				otherfoottype:String,
				documenttypefundcommitteeId:{type: Schema.Types.ObjectId, ref: 'documenttype'},
				numberfundcommittee:String,
				lastname1fundcommittee:String,
				lastname2fundcommittee:String,
				namefundcommittee:String,
				isdataok:Boolean,
				active: Boolean,
				createdAt:Date,
				updatedAt: Date,
				codemuni:String,
				codeId:String
			}
		},
		foreingKeys :{
			period: 'codeperiod',
			govlocal:'govlocalId',
			socialprogram:'socialprogramId',
			urbancore:'urbancoreId',
			documenttype:'documenttypefundcommitteeId' //Verificar
		}
	}
};