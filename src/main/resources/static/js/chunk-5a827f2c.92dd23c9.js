(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a827f2c"],{"4e1e":function(e,t,r){},"4ec3":function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return c})),r.d(t,"f",(function(){return d}));r("751a");var o=r("4328"),n=r.n(o),a=r("b775"),i="/api";function l(e){return Object(a["a"])({url:i+"/user/list",method:"get",params:n.a.parse(e)})}function s(e){return Object(a["a"])({url:i+"/user/selectUserPage",method:"get",params:n.a.parse(e)})}function u(e){return Object(a["a"])({url:i+"/user/createUser",method:"post",data:n.a.parse(e)})}function p(e){return Object(a["a"])({url:i+"/user/deleteUserById",method:"get",params:n.a.parse(e)})}function c(e){return Object(a["a"])({url:i+"/user/deleteUserByIdList",method:"get",params:n.a.parse(e)})}function d(e){return Object(a["a"])({url:i+"/user/updateUserById",method:"post",data:n.a.parse(e)})}},"4ec9":function(e,t,r){r("6f48")},"4fad":function(e,t,r){var o=r("d039"),n=r("861d"),a=r("c6b6"),i=r("d86b"),l=Object.isExtensible,s=o((function(){l(1)}));e.exports=s||i?function(e){return!!n(e)&&((!i||"ArrayBuffer"!=a(e))&&(!l||l(e)))}:l},"5e72":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var o=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig,hidden:e.hidden},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-status",fn:function(r){return[t("span",[e._v(e._s("0"==r.row.status?"在单":"1"==r.row.status?"生产":"2"==r.row.status?"在途":"3"==r.row.status?"入库":"4"==r.row.status?"占用":"5"==r.row.status?"出库":"-"))])]}},{key:"column-type",fn:function(r){return[0==r.row.type?t("span",[e._v("采购入库")]):e._e(),1==r.row.type?t("span",[e._v("调货入库")]):e._e()]}},{key:"column-createTime",fn:function(r){return[r.row.createTime?t("span",[e._v(e._s(e._f("datefmt")(r.row.createTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-deadlineTime",fn:function(r){return[r.row.deadlineTime?t("span",[e._v(e._s(e._f("datefmt")(r.row.deadlineTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-isDeleted",fn:function(r){return[t("span",[e._v(e._s("0"==r.row.isDeleted?"否":"1"==r.row.isDeleted?"是":"-"))])]}},{key:"column-todo",fn:function(r){return[t("el-button",{staticStyle:{visibility:"hidden"},attrs:{type:"text"}},[e._v("空")]),6!=r.row.status?t("el-button",{staticClass:"prohibitclick",attrs:{type:"text",size:"small",icon:"el-icon-document"},on:{click:function(t){return e.deleteRow(r.row)}}},[e._v("删除")]):e._e()]}}])})],1),e.drawer?t("detailsEdit",{attrs:{drawer:e.drawer,rowData:e.rowData},on:{close:function(t){e.drawer=!1},success:function(t){return e.success()}}}):e._e()],1)},n=[],a=(r("d3b7"),r("159b"),r("14d9"),r("4ec9"),r("3ca3"),r("ddb0"),r("4de4"),r("972b")),i=r("c367"),l=r("ffd4"),s=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增":"编辑",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[t("el-select",{ref:"selection",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店",clearable:""},model:{value:e.ruleForm.shopCode,callback:function(t){e.$set(e.ruleForm,"shopCode",t)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(r){return t("el-option",{key:r.shopKey,attrs:{label:r.shopName,value:r.shopCode},nativeOn:{click:function(t){return e.setShopName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[t("el-select",{ref:"goodsSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:""},model:{value:e.ruleForm.goodsCode,callback:function(t){e.$set(e.ruleForm,"goodsCode",t)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(r){return t("el-option",{key:r.goodsCode,attrs:{label:r.goodsName,value:r.goodsCode},nativeOn:{click:function(t){return e.setGoodsName.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"供应商",prop:"supplierCode"}},[t("el-select",{ref:"supplierSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"供应商",clearable:""},model:{value:e.ruleForm.supplierCode,callback:function(t){e.$set(e.ruleForm,"supplierCode",t)},expression:"ruleForm.supplierCode"}},e._l(e.supplierOptions,(function(r){return t("el-option",{key:r.supplierKey,attrs:{label:r.supplierName,value:r.supplierCode},nativeOn:{click:function(t){return e.setSupplierName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库",prop:"inventoryCode"}},[t("el-select",{ref:"inventorySelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库",clearable:""},model:{value:e.ruleForm.inventoryCode,callback:function(t){e.$set(e.ruleForm,"inventoryCode",t)},expression:"ruleForm.inventoryCode"}},e._l(e.inventoryOptions,(function(r){return t("el-option",{key:r.inventoryKey,attrs:{label:r.inventoryName,value:r.inventoryCode,disabled:1!=r.status},nativeOn:{click:function(t){return e.setPosition.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"库位",prop:"positionCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"库位",clearable:""},model:{value:e.ruleForm.positionCode,callback:function(t){e.$set(e.ruleForm,"positionCode",t)},expression:"ruleForm.positionCode"}},e._l(e.positionOptions,(function(e){return t("el-option",{key:e.positionCode,attrs:{label:e.positionCode,value:e.positionCode,clearable:"",placeholder:"库位"}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"计划入库数",prop:"inputPlan"}},[t("el-input",{attrs:{clearable:"",placeholder:"计划入库数",min:0,type:"Number"},model:{value:e.ruleForm.inputPlan,callback:function(t){e.$set(e.ruleForm,"inputPlan",t)},expression:"ruleForm.inputPlan"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库价格",prop:"inputPrice"}},[t("el-input",{attrs:{clearable:"",placeholder:"入库价格",min:0,type:"Number"},model:{value:e.ruleForm.inputPrice,callback:function(t){e.$set(e.ruleForm,"inputPrice",t)},expression:"ruleForm.inputPrice"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"实际数",prop:"inputActual"}},[t("el-input",{attrs:{clearable:"",placeholder:"实际数",min:0,type:"Number"},model:{value:e.ruleForm.inputActual,callback:function(t){e.$set(e.ruleForm,"inputActual",t)},expression:"ruleForm.inputActual"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库类型",prop:"type"}},[t("el-select",{attrs:{size:"small",placeholder:"入库类型",clearable:""},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[t("el-option",{attrs:{label:"采购入库",value:0}}),t("el-option",{attrs:{label:"调货入库",value:1}})],1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"状态",clearable:""},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},e._l(e.statusOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店操作员",prop:"shopPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店操作员",clearable:""},model:{value:e.ruleForm.shopPeopleCode,callback:function(t){e.$set(e.ruleForm,"shopPeopleCode",t)},expression:"ruleForm.shopPeopleCode"}},e._l(e.userOptions,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库操作员",prop:"inventoryPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库操作员",clearable:""},model:{value:e.ruleForm.inventoryPeopleCode,callback:function(t){e.$set(e.ruleForm,"inventoryPeopleCode",t)},expression:"ruleForm.inventoryPeopleCode"}},e._l(e.userOptions1,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"车辆",prop:"vehicleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"车辆",clearable:""},model:{value:e.ruleForm.vehicleCode,callback:function(t){e.$set(e.ruleForm,"vehicleCode",t)},expression:"ruleForm.vehicleCode"}},e._l(e.vehicleOptions,(function(e){return t("el-option",{key:e.vehicleKey,attrs:{label:e.vehicleCode,value:e.vehicleCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("span",{staticStyle:{"margin-left":"8%"}},[e._v("起止日期")]),t("el-date-picker",{staticStyle:{width:"310px","margin-left":"10px"},attrs:{type:"daterange",align:"right",size:"large","unlink-panels":"","range-separator":"至","start-placeholder":"预计日期","end-placeholder":"最迟日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.setTime},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"申请退货数",prop:"returnNum"}},[t("el-input",{attrs:{clearable:"",placeholder:"申请退货数",type:"Number"},model:{value:e.ruleForm.returnNum,callback:function(t){e.$set(e.ruleForm,"returnNum",t)},expression:"ruleForm.returnNum"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"退货原因",prop:"returnReason"}},[t("el-input",{attrs:{clearable:"",placeholder:"退货原因",min:0,type:"textarea"},model:{value:e.ruleForm.returnReason,callback:function(t){e.$set(e.ruleForm,"returnReason",t)},expression:"ruleForm.returnReason"}})],1)],1)],1)],1),t("div",{staticClass:"dialog_footer"},[0==e.ifCreate?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("ruleForm")}}},[e._v("保存")]):t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("关闭")])],1)],1)},u=[],p=r("7e1e"),c=r("64dc"),d=r("4ec3"),h={name:"guestEdit",data:function(){return{direction:"btt",ifCreate:!1,ruleForm:{inputWarehouseKey:"",shopCode:"",shopName:"",goodsCode:"",goodsName:"",supplierCode:"",supplierName:"",inputPlan:"",inputPrice:"",inputActual:"",inventoryCode:"",positionCode:"",createTime:"",deadlineTime:"",vehicleCode:"",status:"",type:"",shopPeopleCode:"",inventoryPeopleCode:"",isDeleted:"",returnNum:"",returnReason:"",inputShopCode:"",inputShopName:""},statusOptions:[{label:"在单",value:0},{label:"生产",value:1},{label:"在途",value:2},{label:"入库",value:3}],shopOptions:[],goodsOptions:[],positionOptions:[],supplierOptions:[],inventoryOptions:[],userOptions:[],userOptions1:[],vehicleOptions:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[r,t])}}]},value2:"",rules:{shopCode:[{required:!0,message:"请选择门店",trigger:"blur"}],goodsCode:[{required:!0,message:"请选择商品",trigger:"blur"}],supplierCode:[{required:!0,message:"请选择供应商",trigger:"blur"}],inputPlan:[{required:!0,message:"请设置计划入库数",trigger:"blur"}],inputPrice:[{required:!0,message:"请设置入库价格",trigger:"blur"}],type:[{required:!0,message:"请设置入库类型",trigger:"blur"}],status:[{required:!0,message:"请设置入库状态",trigger:"blur"}]}}},props:{drawer:{default:!0},rowData:{}},watch:{},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getUserList(),this.getvehicleList(),this.getinventorylist(),this.rowData.inputWarehouseKey?(this.ruleForm.inputWarehouseKey=this.rowData.inputWarehouseKey,this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.shopName=this.rowData.shopName,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.goodsName=this.rowData.goodsName,this.ruleForm.supplierCode=this.rowData.supplierCode,this.ruleForm.supplierName=this.rowData.supplierName,this.ruleForm.inputPlan=this.rowData.inputPlan,this.ruleForm.inputPrice=this.rowData.inputPrice,this.ruleForm.inputActual=this.rowData.inputActual,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.isDeleted=this.rowData.isDeleted,this.ruleForm.returnNum=this.rowData.returnNum,this.ruleForm.createTime=this.rowData.createTime,this.ruleForm.deadlineTime=this.rowData.deadlineTime,this.ruleForm.vehicleCode=this.rowData.vehicleCode,this.ruleForm.status=this.rowData.status,this.ruleForm.type=this.rowData.type,this.ruleForm.shopPeopleCode=this.rowData.shopPeopleCode,this.ruleForm.inventoryPeopleCode=this.rowData.inventoryPeopleCode,this.ruleForm.returnReason=this.rowData.returnReason,this.ruleForm.inputShopCode=this.rowData.inputShopCode,this.ruleForm.inputShopName=this.rowData.inputShopName,this.value2=[this.rowData.createTime,this.rowData.deadlineTime]):this.ifCreate=!0},methods:{getvehicleList:function(){var e=this;Object(p["yb"])().then((function(t){200==t.data.code?e.vehicleOptions=t.data.data:e.$message.error("获取失败!")}))},getUserList:function(){var e=this;Object(d["a"])({userType:2}).then((function(t){e.userOptions=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)})),Object(d["a"])({userType:1}).then((function(t){e.userOptions1=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)}))},getshoplist:function(){var e=this;Object(p["ob"])().then((function(t){200==t.data.code?e.shopOptions=t.data.data:e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(p["W"])().then((function(t){200==t.data.code?e.goodsOptions=t.data.data:e.$message.error("获取失败!")}))},getSupplierlist:function(){var e=this;Object(p["o"])().then((function(t){200==t.data.code?e.supplierOptions=t.data.data:e.$message.error("获取失败!")}))},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopKey)&&t.set(e.shopKey,1)}))},getShopInventoryList:function(e){var t=this;Object(c["d"])({shopCode:e}).then((function(e){200==e.data.code?t.shopOptions=t.unique(e.data.data):t.$message.error("获取失败!")}))},getinventorylist:function(){var e=this;Object(p["cb"])().then((function(t){200===t.data.code?e.inventoryOptions=t.data.data:e.$message.error(t.msg)})).catch((function(e){console.log(e)}))},setShopName:function(){this.getShopInventoryList(this.ruleForm.shopCode),this.ruleForm.shopName=this.$refs.selection.selectedLabel},setSupplierName:function(){this.ruleForm.supplierName=this.$refs.supplierSelect.selectedLabel},setGoodsName:function(){this.ruleForm.goodsName=this.$refs.goodsSelect.selectedLabel},setPosition:function(){var e=this;this.ruleForm.inventoryName=this.$refs.inventorySelect.selectedLabel;var t=this.inventoryOptions.filter((function(t){return t.inventoryCode==e.ruleForm.inventoryCode}));this.getpositionList(t[0].inventoryKey)},getpositionList:function(e){var t=this;Object(p["hb"])({inventoryKey:e}).then((function(e){200==e.data.code?t.positionOptions=e.data.data:t.$message.error("获取失败!")}))},setTime:function(){this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1]},close:function(){this.$parent.drawer=!1},save:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,isDeleted:t.ruleForm.isDeleted,returnNum:t.ruleForm.returnNum,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName,inputWarehouseKey:t.ruleForm.inputWarehouseKey};Object(a["f"])(r).then((function(e){200==e.data.code?(t.$message.success("编辑成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("编辑失败!")}))}))},create:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,isDeleted:t.ruleForm.isDeleted,returnNum:t.ruleForm.returnNum,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName,inputWarehouseKey:t.ruleForm.inputWarehouseKey};Object(a["a"])(r).then((function(e){200==e.data.code?(t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("新增失败!")}))}))}}},m=h,f=(r("8b37"),r("2877")),b=Object(f["a"])(m,s,u,!1,null,null,null),v=b.exports,g={name:"slist",data:function(){return{total:null,drawer:!1,hidden:!0,rowData:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},userType:"",shopOptions:[],goodsOptions:[],inventoryOptions:[],supplierOptions:[],statusOptions:[{label:"在单",value:0},{label:"生产",value:1},{label:"在途",value:2}],typeOptions:[{label:"采购入库",value:0},{label:"调货入库",value:1}],deletedOptions:[{label:"否",value:0},{label:"是",value:1}]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码",width:"120px",sortable:!0},{prop:"shopName",label:"门店名称",width:"200px",sortable:!0},{prop:"goodsCode",label:"商品编码",width:"120px",sortable:!0},{prop:"goodsName",label:"商品名称",width:"200px",sortable:!0},{prop:"supplierCode",label:"供应商编码",width:"150px",sortable:!0},{prop:"supplierName",label:"供应商名称",width:"200px",sortable:!0},{prop:"inputPlan",label:"计划数",width:"100px",sortable:!0},{prop:"inputPrice",label:"入库价格",width:"120px",sortable:!0},{prop:"inputActual",label:"实际数",width:"100px",sortable:!0},{prop:"inventoryCode",label:"仓库编码"},{prop:"positionCode",label:"货位编码"},{prop:"vehicleCode",label:"车辆编码"},{slots:{name:"column-status"},label:"状态"},{slots:{name:"column-type"},label:"入库类型"},{prop:"shopPeopleCode",label:"门店操作员",width:"100px"},{prop:"inventoryPeopleCode",label:"仓库操作员",width:"100px"},{prop:"inputPlan",label:"计划数",width:"100px",sortable:!0},{prop:"inputPrice",label:"入库价格",width:"120px",sortable:!0},{prop:"inputActual",label:"实际数",width:"100px",sortable:!0},{prop:"returnNum",label:"退货数",width:"100px",sortable:!0},{prop:"returnReason",label:"退货原因"},{slots:{name:"column-createTime"},label:"预计日期",width:"150px",sortable:!0},{slots:{name:"column-deadlineTime"},label:"最迟日期",width:"150px",sortable:!0},{slots:{name:"column-todo"},label:"操作",fixed:"right",width:"150px"}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions},{label:"请选择",placeholder:"请选择商品",field:"goodsCode",value:"",type:"select",options:this.goodsOptions},{label:"请选择",placeholder:"请选择仓库",field:"inventoryCode",value:"",type:"select",options:this.inventoryOptions},{label:"请选择",placeholder:"请选择供应商",field:"supplierCode",value:"",type:"select",options:this.supplierOptions},{label:"请选择",placeholder:"请选择状态",field:"status",value:"",type:"select",options:this.statusOptions},{label:"请选择",placeholder:"请选择类型",field:"type",value:"",type:"select",options:this.typeOptions},{label:"请选择",placeholder:"是否删除",field:"isDeleted",value:"",type:"select",options:this.deletedOptions}]}},props:{},components:{TableList:i["a"],detailsEdit:v,reloadAndsearch:l["a"]},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getinventorylist();var e=JSON.parse(localStorage.getItem("userInfo"));this.userType=e.userType},methods:{getSupplierlist:function(){var e=this;Object(p["o"])().then((function(t){200==t.data.code?(e.supplierOptions=[],t.data.data.forEach((function(t){e.supplierOptions.push({label:t.supplierName,value:t.supplierCode})}))):e.$message.error("获取失败!")}))},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopKey)&&t.set(e.shopKey,1)}))},getinventorylist:function(){var e=this;Object(c["d"])().then((function(t){200==t.data.code?(e.inventoryOptions=[],t.data.data.forEach((function(t){e.inventoryOptions.push({label:t.inventoryName,value:t.inventoryCode})}))):e.$message.error("获取失败!")}))},getshoplist:function(){var e=this;Object(p["ob"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.shopOptions.push({label:t.shopName,value:t.shopCode})})):e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(p["W"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.goodsOptions.push({label:t.goodsName,value:t.goodsCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r),this.loadings.table=!0;var o={page:this.query.pageNo,size:this.query.pageSize,shopCode:"",goodsCode:"",supplierCode:"",inventoryCode:"",status:"",isDeleted:"",type:""};Object(a["e"])(o).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r);var o=this.$refs.search.search;Object(a["e"])({page:this.query.pageNo,size:this.query.pageSize,shopCode:o.shopCode,goodsCode:o.goodsCode,supplierCode:o.supplierCode,inventoryCode:o.inventoryCode,status:o.status,type:o.type,isDeleted:o.isDeleted}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},editRow:function(e){this.rowData=e,this.drawer=!0},deleteRow:function(e){var t=this;this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["b"])({inputWarehouseKey:e.inputWarehouseKey,isDeleted:1}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},success:function(){this.drawer=!1,this.rowData={},this.getTableData()},reload:function(){this.getTableData()},add:function(){this.rowData={},this.drawer=!0},handleSelectionDelete:function(e){this.multipleSelection=e},handleDeleteList:function(){var e=this;if(this.multipleSelection.length>0){var t=[];this.multipleSelection.forEach((function(e){t.push({inputWarehouseKey:e.inputWarehouseKey,isDeleted:1})})),console.log(t),this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["c"])(t).then((function(){e.getTableData(),e.$message({type:"success",message:"删除成功!"})})).catch((function(e){console.log(e)}))})).catch((function(){e.$message({type:"info",message:"已取消删除"}),e.multipleSelection=[]}))}else this.$message({type:"error",message:"至少选择一项"})}}},y=g,C=(r("6928"),Object(f["a"])(y,o,n,!1,null,"401d0537",null));t["default"]=C.exports},"64dc":function(e,t,r){"use strict";r.d(t,"x",(function(){return a})),r.d(t,"y",(function(){return i})),r.d(t,"u",(function(){return l})),r.d(t,"g",(function(){return s})),r.d(t,"v",(function(){return u})),r.d(t,"w",(function(){return p})),r.d(t,"m",(function(){return c})),r.d(t,"e",(function(){return d})),r.d(t,"d",(function(){return h})),r.d(t,"a",(function(){return m})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return v})),r.d(t,"o",(function(){return g})),r.d(t,"s",(function(){return y})),r.d(t,"r",(function(){return C})),r.d(t,"n",(function(){return O})),r.d(t,"t",(function(){return F})),r.d(t,"p",(function(){return w})),r.d(t,"q",(function(){return S})),r.d(t,"k",(function(){return x})),r.d(t,"h",(function(){return D})),r.d(t,"l",(function(){return P})),r.d(t,"i",(function(){return T})),r.d(t,"j",(function(){return k}));var o=r("b775"),n=(r("4328"),"/api");function a(e){return Object(o["a"])({url:n+"/SupplierInventory/list",method:"get",params:e})}function i(e){return Object(o["a"])({url:n+"/SupplierInventory/list-page",method:"get",params:e})}function l(e){return Object(o["a"])({url:n+"/SupplierInventory/add",method:"POST",data:e})}function s(e){return Object(o["a"])({url:n+"/SupplierInventory/update",method:"POST",data:e})}function u(e){return Object(o["a"])({url:n+"/SupplierInventory/delete",method:"POST",data:e})}function p(e){return Object(o["a"])({url:n+"/SupplierInventory/delete-list",method:"POST",data:e})}function c(e){return Object(o["a"])({url:n+"/ShopInventory/getByshopCode",method:"get",params:e})}function d(e){return Object(o["a"])({url:n+"/ShopInventory/list-page",method:"get",params:e})}function h(e){return Object(o["a"])({url:n+"/ShopInventory/list",method:"get",params:e})}function m(e){return Object(o["a"])({url:n+"/ShopInventory/add",method:"POST",data:e})}function f(e){return Object(o["a"])({url:n+"/ShopInventory/update",method:"POST",data:e})}function b(e){return Object(o["a"])({url:n+"/ShopInventory/delete",method:"POST",data:e})}function v(e){return Object(o["a"])({url:n+"/ShopInventory/delete-list",method:"POST",data:e})}function g(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/getByShopCode",method:"get",params:e})}function y(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/list-page",method:"get",params:e})}function C(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/list",method:"get",params:e})}function O(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/add",method:"POST",data:e})}function F(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/update",method:"POST",data:e})}function w(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/delete",method:"POST",data:e})}function S(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/delete-list",method:"POST",data:e})}function x(e){return Object(o["a"])({url:n+"/detailWarehouse/list-page",method:"get",params:e})}function D(e){return Object(o["a"])({url:n+"/detailWarehouse/add",method:"POST",data:e})}function P(e){return Object(o["a"])({url:n+"/detailWarehouse/update",method:"POST",data:e})}function T(e){return Object(o["a"])({url:n+"/detailWarehouse/delete",method:"POST",data:e})}function k(e){return Object(o["a"])({url:n+"/detailWarehouse/delete-list",method:"POST",data:e})}},6566:function(e,t,r){"use strict";var o=r("9bf2").f,n=r("7c73"),a=r("6964"),i=r("0366"),l=r("19aa"),s=r("7234"),u=r("2266"),p=r("c6d2"),c=r("4754"),d=r("2626"),h=r("83ab"),m=r("f183").fastKey,f=r("69f3"),b=f.set,v=f.getterFor;e.exports={getConstructor:function(e,t,r,p){var c=e((function(e,o){l(e,d),b(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),h||(e.size=0),s(o)||u(o,e[p],{that:e,AS_ENTRIES:r})})),d=c.prototype,f=v(t),g=function(e,t,r){var o,n,a=f(e),i=y(e,t);return i?i.value=r:(a.last=i={index:n=m(t,!0),key:t,value:r,previous:o=a.last,next:void 0,removed:!1},a.first||(a.first=i),o&&(o.next=i),h?a.size++:e.size++,"F"!==n&&(a.index[n]=i)),e},y=function(e,t){var r,o=f(e),n=m(t);if("F"!==n)return o.index[n];for(r=o.first;r;r=r.next)if(r.key==t)return r};return a(d,{clear:function(){var e=this,t=f(e),r=t.index,o=t.first;while(o)o.removed=!0,o.previous&&(o.previous=o.previous.next=void 0),delete r[o.index],o=o.next;t.first=t.last=void 0,h?t.size=0:e.size=0},delete:function(e){var t=this,r=f(t),o=y(t,e);if(o){var n=o.next,a=o.previous;delete r.index[o.index],o.removed=!0,a&&(a.next=n),n&&(n.previous=a),r.first==o&&(r.first=n),r.last==o&&(r.last=a),h?r.size--:t.size--}return!!o},forEach:function(e){var t,r=f(this),o=i(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:r.first){o(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!y(this,e)}}),a(d,r?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),h&&o(d,"size",{get:function(){return f(this).size}}),c},setStrong:function(e,t,r){var o=t+" Iterator",n=v(t),a=v(o);p(e,t,(function(e,t){b(this,{type:o,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?c("keys"==t?r.key:"values"==t?r.value:[r.key,r.value],!1):(e.target=void 0,c(void 0,!0))}),r?"entries":"values",!r,!0),d(t)}}},6928:function(e,t,r){"use strict";r("cd2f")},6964:function(e,t,r){var o=r("cb2d");e.exports=function(e,t,r){for(var n in t)o(e,n,t[n],r);return e}},"6d61":function(e,t,r){"use strict";var o=r("23e7"),n=r("da84"),a=r("e330"),i=r("94ca"),l=r("cb2d"),s=r("f183"),u=r("2266"),p=r("19aa"),c=r("1626"),d=r("7234"),h=r("861d"),m=r("d039"),f=r("1c7e"),b=r("d44e"),v=r("7156");e.exports=function(e,t,r){var g=-1!==e.indexOf("Map"),y=-1!==e.indexOf("Weak"),C=g?"set":"add",O=n[e],F=O&&O.prototype,w=O,S={},x=function(e){var t=a(F[e]);l(F,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(y&&!h(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return y&&!h(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!h(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})},D=i(e,!c(O)||!(y||F.forEach&&!m((function(){(new O).entries().next()}))));if(D)w=r.getConstructor(t,e,g,C),s.enable();else if(i(e,!0)){var P=new w,T=P[C](y?{}:-0,1)!=P,k=m((function(){P.has(1)})),N=f((function(e){new O(e)})),j=!y&&m((function(){var e=new O,t=5;while(t--)e[C](t,t);return!e.has(-0)}));N||(w=t((function(e,t){p(e,F);var r=v(new O,e,w);return d(t)||u(t,r[C],{that:r,AS_ENTRIES:g}),r})),w.prototype=F,F.constructor=w),(k||j)&&(x("delete"),x("has"),g&&x("get")),(j||T)&&x(C),y&&F.clear&&delete F.clear}return S[e]=w,o({global:!0,constructor:!0,forced:w!=O},S),b(w,e),y||r.setStrong(w,e,g),w}},"6f48":function(e,t,r){"use strict";var o=r("6d61"),n=r("6566");o("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},"751a":function(e,t,r){"use strict";r("b775")},"8b37":function(e,t,r){"use strict";r("4e1e")},"972b":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p}));var o=r("b775"),n=(r("4328"),"/api");function a(e){return Object(o["a"])({url:n+"/inputWarehouse/list",method:"get",params:e})}function i(e){return Object(o["a"])({url:n+"/inputWarehouse/list-page",method:"get",params:e})}function l(e){return Object(o["a"])({url:n+"/inputWarehouse/add",method:"POST",data:e})}function s(e){return Object(o["a"])({url:n+"/inputWarehouse/update",method:"POST",data:e})}function u(e){return Object(o["a"])({url:n+"/inputWarehouse/delete",method:"POST",data:e})}function p(e){return Object(o["a"])({url:n+"/inputWarehouse/delete-list",method:"POST",data:e})}},bb2f:function(e,t,r){var o=r("d039");e.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cd2f:function(e,t,r){},d86b:function(e,t,r){var o=r("d039");e.exports=o((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,r){var o=r("23e7"),n=r("e330"),a=r("d012"),i=r("861d"),l=r("1a2d"),s=r("9bf2").f,u=r("241c"),p=r("057f"),c=r("4fad"),d=r("90e3"),h=r("bb2f"),m=!1,f=d("meta"),b=0,v=function(e){s(e,f,{value:{objectID:"O"+b++,weakData:{}}})},g=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!l(e,f)){if(!c(e))return"F";if(!t)return"E";v(e)}return e[f].objectID},y=function(e,t){if(!l(e,f)){if(!c(e))return!0;if(!t)return!1;v(e)}return e[f].weakData},C=function(e){return h&&m&&c(e)&&!l(e,f)&&v(e),e},O=function(){F.enable=function(){},m=!0;var e=u.f,t=n([].splice),r={};r[f]=1,e(r).length&&(u.f=function(r){for(var o=e(r),n=0,a=o.length;n<a;n++)if(o[n]===f){t(o,n,1);break}return o},o({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:p.f}))},F=e.exports={enable:O,fastKey:g,getWeakData:y,onFreeze:C};a[f]=!0}}]);
//# sourceMappingURL=chunk-5a827f2c.92dd23c9.js.map