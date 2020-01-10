module.exports = {
  Brand: {
    createBrand: `
      mutation CreateBrand($mrc_codigo: Int!, $mrc_descricao: String!, $company: Int!) {
      createBrand(input:{
        mrc_codigo: $mrc_codigo 
        mrc_descricao: $mrc_descricao
        empresa:$company
      }){
        id
        mrc_codigo
        mrc_descricao
      }
    }`,
    bulkBrandCreate: ` mutation bulkBrandCreate(
        $input: [BrandCreateInput!] !
      ) {
        bulkBrandCreate(input: $input)
    }`,
    updateBrand: `
      mutation UpdateBrand($code: Int, $mrc_descricao: String!, $from: String, $company: Int) {
       updateBrand(
         code: $code,
         from: $from,
         company: $company,
         input:{
           mrc_descricao: $mrc_descricao 
         }
       ){
        id
        mrc_codigo
        mrc_descricao
       }
    }`,
    deleteBrand:`mutation DeleteBrand(
      $code: Int,
      $from: String,
      $company: Int
    ) {
      deleteBrand(
        code: $code from: $from company: $company
      )
    }`,
    fetchBrand: `query Brand($code: Int, $company: Int!, $from: String) {
      brand(code:$code, company: $company, from: $from){
          mrc_codigo mrc_descricao
      }
    }`,
    allBrands: `query Brands($company: Int!) {
      brands(company: $company){
        mrc_codigo
        mrc_descricao
      }
    }`,
  },
  Cfop: {
    createCfop: `
      mutation CreateCfop($cfop_codigo: Int!, $cfop_descricao: String!, $company: Int!) {
        createCfop(input: {
          cfop_codigo: $cfop_codigo
          cfop_descricao: $cfop_descricao
          empresa: $company
        }) {
          id
          cfop_codigo
          cfop_descricao
        }
    }`,
    bulkCfopCreate: `  mutation bulkCfopCreate(
        $input: [CfopCreateInput!]!
      ){
        bulkCfopCreate(input:$input)
      }`,
    updateCfop: `
      mutation UpdateCfop(
        $code: Int, $cfop_descricao: String!, $from: String, $company: Int) {
        updateCfop(code: $code, from: $from, company: $company, input: {
          cfop_descricao: $cfop_descricao
        }) {
          id
          cfop_codigo
          cfop_descricao
        }
      }
      `,
    deleteCfop: `
      mutation DeleteCfop( $code: Int, $from: String, $company: Int ) {
        deleteCfop(
          code: $code
          from: $from
          company: $company
        )
    }`,
    fetchCfop: `query Cfop($code: Int, $company: Int!, $from: String) {
      cfop(code:$code, company: $company, from: $from){
          cfop_codigo cfop_descricao
      }
    }`,
    allCfops: `query Cfops($company: Int!) {
      cfops(company: $company){
        cfop_codigo
        cfop_descricao
      }
    }`,
  },
  CostCenter: {
    createCostCenter: `mutation CreateCostCenter(
        $cc_codigo: Int!,
        $cc_descricao: String!,
        $cc_receitadespesa: String!,
        $cc_relatoriocc: Boolean!,
        $cc_relatorioadm: Boolean!,
        $company: Int!
      ) {
        createCostCenter(input: {
          cc_codigo: $cc_codigo,
          cc_descricao: $cc_descricao,
          cc_receitadespesa: $cc_receitadespesa,
          cc_relatoriocc: $cc_relatoriocc,
          cc_relatorioadm: $cc_relatorioadm,
          empresa: $company
      }) {
        id
        cc_codigo
        cc_descricao
        cc_receitadespesa
        cc_relatoriocc
        cc_relatorioadm
        empresa {
          id
        }
      }
    }`,
    bulkCostCenterCreate: `mutation bulkCostCenterCreate(
        $input: [CostCenterCreateInput!]!
      ){
        bulkCostCenterCreate(input:$input)
    }`,
    updateCostCenter: ` mutation UpdateCostCenter(
      $code: Int,
      $from: String,
      $company: Int,
      $cc_descricao: String!,
      $cc_receitadespesa: String!,
      $cc_relatoriocc: Boolean!,
      $cc_relatorioadm: Boolean!
    ) {
      updateCostCenter(code: $code, from: $from, company: $company, input: {
        cc_descricao: $cc_descricao,
        cc_receitadespesa: $cc_receitadespesa,
        cc_relatoriocc: $cc_relatoriocc,
        cc_relatorioadm: $cc_relatorioadm
      }) {
        id
        cc_codigo
        cc_descricao
        cc_receitadespesa
        cc_relatoriocc
        cc_relatorioadm
      }
    }`,
    deleteCostCenter: `
      mutation DeleteCostCenter(
        $code: Int,
        $from: String,
        $company: Int
      ) {
      deleteCostCenter(
        code: $code from: $from company: $company
      )
    }`,
    fetchCostCenter: `query CostCenter($code: Int, $company: Int!, $from: String) { 
      costCenter(code:$code, company: $company, from: $from) { 
        cc_codigo 
        cc_descricao 
        cc_receitadespesa 
        cc_relatoriocc 
        cc_relatorioadm
    }}`,
    allCostCenters: `query CostCenters($company: Int!) { 
      costCenters(company: $company) { 
        cc_codigo 
        cc_descricao 
        cc_receitadespesa 
        cc_relatoriocc 
        cc_relatorioadm
      }
    }`,
  },
  CustomerType: {
    createCustomerType: `
      mutation CreateCustomerType($tpc_codigo: Int!, $tpc_descricao: String!, $company: Int!) {
        createCustomerType(input: {
          tpc_codigo: $tpc_codigo
          tpc_descricao: $tpc_descricao
          empresa: $company
        }) {
          tpc_codigo
          tpc_descricao
        }
      }`,
      bulkCustomerTypeCreate: `mutation bulkCustomerTypeCreate(
      $input: [CustomerTypeCreateInput!]!
      ){
        bulkCustomerTypeCreate(input:$input)
    }`,
    updateCustomerType: `
      mutation UpdateCustomerType(
        $code: Int, $tpc_descricao: String!, $from: String, $company: Int
      ) {
        updateCustomerType(code: $code, from: $from, company: $company, input: {
          tpc_descricao: $tpc_descricao
        }) {
          id
          tpc_codigo
          tpc_descricao
        }
    }`,
    deleteCustomerType: `
      mutation DeleteCustomerType(
        $code: Int,
        $from: String,
        $company: Int
      ) {
      deleteCustomerType(
        code: $code from: $from company: $company
      )
    }`,
    fetchCustomerType: `
      query CustomerType($code: Int, $company: Int!, $from: String) {
        customerType(code: $code, company: $company, from: $from) {
        tpc_codigo 
        tpc_descricao
      }
    }`,
    allCustomerTypes: `query CustomerTypes($company: Int!) {
      customerTypes(company: $company){
        tpc_codigo 
        tpc_descricao
      }
    }`,
  },
  Historic: {
    createHistoric: `mutation CreateHistoric(
      $hst_codigo: Int!,
      $hst_descricao: String!,
      $hst_fixovariavel: String!,
      $hst_previsao: Float,
      $company: Int!
    ) {
    createHistoric(input: {
      hst_codigo: $hst_codigo
      hst_descricao: $hst_descricao
      hst_fixovariavel: $hst_fixovariavel
      hst_previsao: $hst_previsao
      empresa: $company
    }) {
      id
      hst_codigo
      hst_descricao
      hst_fixovariavel
      hst_previsao
    }
  }`,
  bulkHistoricCreate: `mutation bulkHistoricCreate(
    $input: [HistoricCreateInput!]!
  ){
    bulkHistoricCreate(input:$input)
  }`,
  updateHistoric: `
   mutation UpdateHistoric(
     $code: Int,
     $from: String,
     $company: Int $hst_descricao: String!,
     $hst_fixovariavel: String!,
     $hst_previsao: Float
   ) {
     updateHistoric(
       code: $code, from: $from, company: $company,
       input: {
         hst_descricao: $hst_descricao,
         hst_fixovariavel: $hst_fixovariavel,
         hst_previsao: $hst_previsao
       }
     ) {
      id
      hst_codigo
      hst_descricao
      hst_fixovariavel
      hst_previsao
      }
   }`,
  deleteHistoric: `mutation DeleteHistoric(
    $code: Int,
    $from: String,
    $company: Int
    ) {
    deleteHistoric(
      code: $code from: $from company: $company
    )
  }`,
  fetchHistoric: `query Historic($code: Int, $company: Int!, $from: String) {
    historic(code: $code, company: $company, from: $from) {
       hst_codigo
       hst_descricao
       hst_fixovariavel
       hst_previsao
    }
  }`,
  allHistorics: `query Historics($company: Int!) {
    historics(company: $company) {
       hst_codigo
       hst_descricao
       hst_fixovariavel
       hst_previsao
    }
  }`,
  },
  Line:{
    createLine: `
      mutation CreateLine($lin_codigo: Int!, $lin_descricao: String!, $company: Int!) {
      createLine(input:{
        lin_codigo: $lin_codigo 
        lin_descricao: $lin_descricao
        empresa:$company
      }){
      lin_codigo
      lin_descricao
      }
    }`,
    bulkLineCreate: `mutation bulkLineCreate(
        $input: [LineCreateInput!] !
      ) {
        bulkLineCreate(input: $input)
    }`,
    updateLine: `
      mutation UpdateLine($code: Int, $lin_descricao: String!, $from: String, $company: Int) {
       updateLine(
         code: $code,
         from: $from,
         company: $company,
         input:{
           lin_descricao: $lin_descricao 
         }
       ){
        lin_codigo
        lin_descricao
       }
    }`,
    deleteLine:`mutation DeleteLine(
      $code: Int,
      $from: String,
      $company: Int
      ) {
      deleteLine(
        code: $code from: $from company: $company
      )
    }`,
    fetchLine: `query Line($code: Int, $company: Int!, $from: String) {
      line(code:$code, company: $company, from: $from){
        lin_codigo lin_descricao
      }
    }`,
    allLines: `query Lines($company: Int!) {
      lines(company: $company){
        lin_codigo
        lin_descricao
      }
    }`,
  },
  Ncm: {
    createNcm: `
      mutation CreateNcm(
        $ncm_codigo: Int!,
        $ncm_ncm: String!,
        $ncm_cest: String,
        $ncm_descricao_interna: String!,
        $ncm_descricao_tipi: String $ncm_mva_interna: Float,
        $ncm_mva_externa: Float,
        $ncm_ltf_nacional: Float,
        $ncm_ltf_importada: Float $ncm_pis: Float,
        $ncm_cofins: Float,
        $ncm_ipi: Float,
        $ncm_origem: Int,
        $company: Int!
      ) {
        createNcm(input: {
          ncm_codigo: $ncm_codigo,
          ncm_ncm: $ncm_ncm,
          ncm_cest: $ncm_cest,
          ncm_descricao_interna: $ncm_descricao_interna,
          ncm_descricao_tipi: $ncm_descricao_tipi
          ncm_mva_interna: $ncm_mva_interna,
          ncm_mva_externa: $ncm_mva_externa,
          ncm_ltf_nacional: $ncm_ltf_nacional,
          ncm_ltf_importada: $ncm_ltf_importada
          ncm_pis: $ncm_pis,
          ncm_cofins: $ncm_cofins,
          ncm_ipi: $ncm_ipi,
          ncm_origem: $ncm_origem
          empresa: $company
        }) {
          ncm_codigo
          ncm_ncm
          ncm_cest
          ncm_descricao_interna
          ncm_descricao_tipi
          ncm_mva_interna
          ncm_mva_externa
          ncm_ltf_nacional
          ncm_ltf_importada
          ncm_pis
          ncm_cofins
          ncm_ipi ncm_origem
        }
      }`,
    bulkNcmCreate: `mutation bulkNcmCreate(
      $input: [NcmCreateInput!] !
    ){
      bulkNcmCreate(input: $input)
    }`,
    updateNcm: `
      mutation UpdateNcm(
        $code: Int,
        $from: String,
        $company: Int $ncm_ncm: String!,
        $ncm_cest: String,
        $ncm_descricao_interna: String!,
        $ncm_descricao_tipi: String $ncm_mva_interna: Float,
        $ncm_mva_externa: Float,
        $ncm_ltf_nacional: Float,
        $ncm_ltf_importada: Float $ncm_pis: Float,
        $ncm_cofins: Float,
        $ncm_ipi: Float,
        $ncm_origem: Int
        ){
        updateNcm(code: $code, from: $from, company: $company, input: {
          ncm_ncm: $ncm_ncm,
          ncm_cest: $ncm_cest,
          ncm_descricao_interna: $ncm_descricao_interna,
          ncm_descricao_tipi: $ncm_descricao_tipi
          ncm_mva_interna: $ncm_mva_interna,
          ncm_mva_externa: $ncm_mva_externa,
          ncm_ltf_nacional: $ncm_ltf_nacional,
          ncm_ltf_importada: $ncm_ltf_importada
          ncm_pis: $ncm_pis,
          ncm_cofins: $ncm_cofins,
          ncm_ipi: $ncm_ipi,
          ncm_origem: $ncm_origem
        }) {
          ncm_codigo
          ncm_ncm
          ncm_cest
          ncm_descricao_interna
          ncm_descricao_tipi
          ncm_mva_interna
          ncm_mva_externa
          ncm_ltf_nacional
          ncm_ltf_importada
          ncm_pis
          ncm_cofins
          ncm_ipi ncm_origem
      }
    }`,
    deleteNcm: `mutation DelteNcm(
        $code: Int,
        $from: String,
        $company: Int
      ) { 
      deleteNcm(
        code: $code
        from: $from
        company: $company
      )
    }`,
    fetchNcm: `query Ncm($code: Int, $company: Int!, $from: String) {
      ncm(code: $code, company: $company, from: $from) {
        ncm_codigo
        ncm_ncm
        ncm_cest
        ncm_descricao_interna
        ncm_descricao_tipi
        ncm_mva_interna
        ncm_mva_externa
        ncm_ltf_nacional
        ncm_ltf_importada
        ncm_pis
        ncm_cofins
        ncm_ipi ncm_origem
      }
    }`,
    allNcms: `query Ncms($company: Int!){
      ncms(company: $company) {
        ncm_codigo 
        ncm_ncm 
        ncm_cest 
        ncm_descricao_interna 
        ncm_descricao_tipi
        ncm_mva_interna 
        ncm_mva_externa 
        ncm_ltf_nacional 
        ncm_ltf_importada 
        ncm_pis
        ncm_cofins 
        ncm_ipi ncm_origem 
      }
    }`,
  },
  SubType: {
    createSubType: `
      mutation CreateSubType($stp_codigo: Int!, $stp_descricao: String!, $company: Int!) {
      createSubType(input:{
        stp_codigo: $stp_codigo 
        stp_descricao: $stp_descricao
        empresa:$company
      }){
        stp_codigo
        stp_descricao
      }
    }`,
    bulkSubTypeCreate: ` mutation bulkSubTypeCreate(
        $input: [SubTypeCreateInput!] !
      ) {
        bulkSubTypeCreate(input: $input)
    }`,
    updateSubType: `
      mutation UpdateSubType($code: Int, $stp_descricao: String!, $from: String, $company: Int) {
       updateSubType(
         code: $code,
         from: $from,
         company: $company,
         input:{
           stp_descricao: $stp_descricao 
         }
      ){
      stp_codigo
      stp_descricao
      }
    }`,
    deleteSubType:`mutation DeleteSubType(
      $code: Int,
      $from: String,
      $company: Int
    ) {
      deleteSubType(
        code: $code from: $from company: $company
      )
    }`,
    fetchSubType: `query SubType($code: Int, $company: Int!, $from: String) {
      subtype(code:$code, company: $company, from: $from){
        stp_codigo stp_descricao
      }
    }`,
    allSubTypes: `query SubTypes($company: Int!) {
      subtypes(company: $company){
        stp_codigo
        stp_descricao
      }
    }`,
  },
  Type: {
    createType: `
      mutation CreateType($tp_codigo: Int!, $tp_descricao: String!, $company: Int!) {
      createType(input:{
        tp_codigo: $tp_codigo 
        tp_descricao: $tp_descricao
        empresa:$company
      }){
        tp_codigo
        tp_descricao
        }
    }`,
    bulkTypeCreate: ` mutation bulkTypeCreate(
        $input: [TypeCreateInput!] !
      ) {
        bulkTypeCreate(input: $input)
      }`,
    updateType: `
      mutation UpdateType($code: Int, $tp_descricao: String!, $from: String, $company: Int) {
       updateType(
         code: $code,
         from: $from,
         company: $company,
         input:{
           tp_descricao: $tp_descricao 
         }
       ){
        tp_codigo
        tp_descricao
       }
      }`,
    deleteType:`mutation DeleteType(
        $code: Int,
        $from: String,
        $company: Int
      ) {
        deleteType(
          code: $code from: $from company: $company
        )
    }`,
    fetchType: `query Type($code: Int, $company: Int!, $from: String) {
        type(code:$code, company: $company, from: $from){
            tp_codigo tp_descricao
        }
    }`,
    allTypes: `query Types($company: Int!) {
        types(company: $company){
          tp_codigo
          tp_descricao
        }
    }`,
  },
  TypePrice: {
    createTypePrice: `
      mutation CreateTypePrice(
        $prc_codigo: Int!, 
        $prc_descricao: String!, 
        $prc_descontotabela:Boolean!, 
        $company: Int!
      ){
        createTypePrice( input:{
          prc_codigo: $prc_codigo 
          prc_descricao: $prc_descricao 
          prc_descontotabela: $prc_descontotabela 
          empresa:$company
      }){
        prc_codigo
        prc_descricao
        prc_descontotabela
      }
    }`,
    bulkTypePriceCreate: ` mutation bulkTypePriceCreate(
        $input: [TypePriceCreateInput!]!
      ){
        bulkTypePriceCreate(input:$input)
    }`,
    updateTypePrice: `
      mutation UpdateTypePrice(
        $code: Int,
        $from: String,
        $company: Int,
        $prc_descricao: String!,
        $prc_descontotabela: Boolean!
      ) {
      updateTypePrice(
        code: $code, from: $from, company: $company, input: {
          prc_descricao: $prc_descricao
          prc_descontotabela: $prc_descontotabela
        }) {
        prc_codigo
        prc_descricao
        prc_descontotabela
      }
    }`,
    deleteTypePrice: `mutation DeleteTypePrice(
        $code: Int,
        $from: String,
        $company: Int
      ) {
      deleteTypePrice(
        code: $code from: $from company: $company
      )
    }`,
    fetchTypePrice: `query TypePrice($code: Int, $company: Int!, $from: String) {
      typeprice(code:$code, company: $company, from: $from){
          prc_codigo prc_descricao prc_descontotabela
      }
    }`,
    allTypePrices: `query TypePrices($company: Int!) {
      typeprices(company: $company){
        prc_codigo prc_descricao prc_descontotabela
      }
    }`,
  },
  UnitMeas: {
    createUnitMeas: `mutation CreateUnitMeas(
      $med_codigo: Int!,
      $med_descricao: String!,
      $med_abreviado: String!,
      $med_tipocalculo: Int!,
      $company: Int!
      ) {
      createUnitMeas(input: {
        med_codigo: $med_codigo
        med_descricao: $med_descricao
        med_abreviado: $med_abreviado
        med_tipocalculo: $med_tipocalculo
        empresa: $company
      }) {
      med_descricao
      med_abreviado
      med_tipocalculo
      }
    }`,
    bulkUnitMeasCreate: `mutation bulkUnitMeasCreate(
      $input: [UnitMeasCreateInput!]!){
      bulkUnitMeasCreate(input:$input)
    }`,
    updateUnitMeas: `
      mutation UpdateUnitMeas(
        $code: Int,
        $from: String,
        $company: Int,
        $med_descricao: String!,
        $med_abreviado: String!,
        $med_tipocalculo: Int!
      ) {
      updateUnitMeas(
        code: $code, from: $from, company: $company, input: {
          med_descricao: $med_descricao
          med_abreviado: $med_abreviado
          med_tipocalculo: $med_tipocalculo
        }) {
        med_descricao
        med_abreviado
        med_tipocalculo
      }
    }`,
    deleteUnitMeas: `mutation DeleteUnitMeas($code: Int, $from: String, $company: Int) {
      deleteUnitMeas(code: $code from: $from company: $company)
    }`,
    fetchUnitMeas: `query UnitMeas($code: Int, $company: Int!, $from: String) {
      unitmeas(code:$code, company: $company from: $from){
        med_codigo 
        med_descricao 
        med_abreviado 
        med_tipocalculo
      }
    }`,
    alUnitMeass: ` query UnitMeass($company: Int!) {
      unitmeass(company: $company){
          med_codigo 
          med_descricao 
          med_abreviado 
          med_tipocalculo
      }
    }`,
  },
  Zone: {
    createZone: `mutation CreateZone(
      $area_codigo: Int!, 
      $area_descricao: String!,
      $area_bairros:String!, 
      $company: Int!
      ){
      createZone(input:{
        area_codigo: $area_codigo,
        area_descricao: $area_descricao,
        area_bairros:$area_bairros, 
        empresa:$company
      }){
        area_codigo
        area_descricao
        area_bairros
      }
    }`,
    bulkZoneCreate: `mutation bulkZoneCreate($input: [ZoneCreateInput!]!){
      bulkZoneCreate(input:$input)
    }`,
    updateZone: `mutation UpdateZone(
      $code: Int,
      $from: String,
      $company: Int,
      $area_descricao: String,
      $area_bairros: String, 
      ) {
      updateZone(code: $code, from: $from, company: $company, input:{
        area_descricao: $area_descricao,
        area_bairros:$area_bairros,  
      }){ 
        area_codigo
        area_descricao
        area_bairros
      }
    }`,
    deleteZone: `mutation DeleteZone(
      $code: Int,
      $from: String,
      $company: Int
      ) {
      deleteZone(
        code: $code
        from: $from
        company: $company
      )
    }`,
    fetchZone: `query Zone($code: Int, $company: Int!, $from: String) {
      zone(code:$code, company: $company, from: $from){
        area_codigo
        area_descricao
        area_bairros
      }
    }`,
    allZones: `query Zones($company: Int!) {
      zones(company: $company){
        area_codigo
        area_descricao
        area_bairros
      }
    }`,
  }
}