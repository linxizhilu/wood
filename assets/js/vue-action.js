//console.log(Vue)

var companyNameData = {
	ch:'上海木忆商务咨询有限公司',
	usa:'Shanghai woodfield co ltd',
	russian:'Shanghai woodfield co ltd'	
}
var logoComp = new Vue({
	el:"#logo",
	data:{
		language:companyNameData.ch
	}
})
var sideBarData={
	ch:[{
		name:'首页',
		anchor:"#intro"
		},{
			name:"产品介绍",
			anchor:"#productList"
		},{
			name:"合作品牌",
			anchor:"#two"
		},{
			name:"联系我们",
			anchor:"#three"
		}],
	usa:[{
		name:'index',
		anchor:"#intro"
		},{
			name:"Product",
			anchor:"#productList"
		},{
			name:"cooperative",
			anchor:"#two"
		},{
			name:"contact",
			anchor:"#three"
		}],
	russian:[{
		name:'индекс',
		anchor:"#intro"
		},{
			name:"продукция",
			anchor:"#productList"
		},{
			name:"продукция",
			anchor:"#two"
		},{
			name:"связывать",
			anchor:"#three"
		}]
}
var sideBarComp = new Vue({
	el:'#sidebar',
	data:{
		language:sideBarData.ch
	}
})

var introData ={
	ch:{info:"上海木忆是一家木材销售服务公司，为国外的锯木厂提供中国市场的销售服务。公司主要经营欧洲云杉、赤松、俄罗斯樟子松，落叶松，北美SPF、花旗、铁杉，新西兰辐射松等松木板材。公司与欧洲、北美、南美、澳洲等多家针叶材锯木厂签有战略合作协议，并与国内用户保持良好的合作关系。公司销售网络遍及大连，天津，青岛，上海，太仓，深圳，南康，成都等全国各地。为家具，木屋，装潢条，桑拿板，防腐木，碳化木，建筑木方等不同种类的客户提供优质的服务。",'button':"查看产品"},
	usa:{info:"Shanghai wood field is a lumber sales and service company provides foreign lumber market sales and services in China. Our company mainly engaged in whitewood and redwood of Europe, pine and larch of Russia, SPF, DF and HF of North America, radiate pine of New Zealand. We had signed strategic agreements with many softwood sawmills around the word, and maintained good relation of cooperation with domestic clients as well. Our company network sales to Dalian, Tianjin, Qingdao, Shanghai, Taicang, Shenzhen, Chengdu and other parts of China. We provide excellent service for various kinds of clients, like furniture, wooden house, decoration, sauna board, treated wood, thermos wood, construction wood, etc.",'button':"product"},
	russian:{info:"Shanghai woodfield co ltd. Занимается продажей пиломатериалов, оказывает помощь  иностранным лесопильным заводам  в реализации их продукции в китае.Основная продукция нашей компании: сухие пиломатериалы из ели, сосны, ангарской сосны, лиственницы , spf , df,  тсуга канадская (hemlock fir), новозеландская сосна (radiata) и другие материалы .Мы подписали соглашение с поставщиками из европы, северной америки, южной америки, а также у нас установлены контакты с китайскими покупателями. Наша сеть сбыта охватывает  весь  китай , включая такие города, как далянь (dalian), тяньцзинь (tianjin), циндао (qingdao) , шанхай (shanghai) тайцан (taicang),шеньчжень  (shengzhen), нанькан(nankang), чэнду (chengdu) .Мы предоставляем качественные услуги различным клиентам, которые производят мебель, вагонку, брус, работают с термообработанным деревом, конструктивной древесиной, занимаются строительными и отделочными работами.",'button':"продукция"}
}
var introComp = new Vue({
	el:"#intro",
	data:{
		language:introData.ch
	}
})

var productListData={
	ch:[{
		name:"云杉",
		info:"常绿乔木；树皮薄，鳞片状；枝通常轮生；叶线形，螺旋排列，通常四角形；球花顶生或腋生。材质优良，纹理细致，可供工业原料使用。多数种类为今后造林和林业经营上的主要树种。",
		image:"images/yunshan/1.jpg",
		images:4,
		button:'查看相关产品'
	},{
		name:"赤松",
		info:"乔木，高达30米，胸径达1.5米树皮桔红色，裂成不规则鳞状薄片脱落。一年生枝桔黄或红黄色，微被白粉，无毛。冬芽暗红褐色，长圆状卵圆形或圆柱形。中国多地有分布。可作抗风植物，可用作木材。",
		image:"images/chisong/0.jpg",
		images:4,
		button:'查看相关产品'
	},{
		name:"辐射松",
		info:"新西兰辐射松，又名新西兰松，英文名monterey pine ,原产于美国加州的一些海岛上。但它在原产地生长并不出色，干形差，生长速度慢，未受到人们的重视。",
		image:"images/fushesong/0.jpg",
		images:4,
		button:'查看相关产品'
	},{
		name:"花旗",
		info:"边材颜色浅、宽度窄。心材由黄色到红褐色不等。早木及晚木颜色分别明显，后者有更深、更尖的带状。这种颜色差别造成平锯时木纹形状不同。木材质地细微到中等，纹路笔直、非渗水性。花旗松是加拿大强度最大的商用软木之一，其硬度高、抗磨损力强，适用于磨损是一个因素的地方，如支架、桥部件、木屋和商业建筑物。",
		image:"images/huaqi/0.jpg",
		images:4,
		button:'查看相关产品'
	},{
		name:"SPF",
		info:"SPF明显为白木材,木材外观明亮、洁净，颜色由白色到浅黄色不等，纹路细微笔直、质地光滑。具有较高的强度重量比，以出色的操作性能而闻名。其受钉和握钉力非常好，并且手工和电动工具操作容易。粘合、涂漆和着色性能佳。窑干木材作为结构性框架材料用于所有类型的建筑中：住宅、商业、工业和农业。",
		image:"images/spf/0.jpg",
		images:4,
		button:'查看相关产品'
	},{
		name:"铁杉",
		info:"乔木，高达50m，胸径1.6m；冠塔形，大枝平展，枝梢下垂；树皮暗灰色，纵裂，成块状脱落；冬芽卵圆或球形；1年生枝细；淡黄、淡褐黄或淡灰黄色，叶枕凹槽内有短毛。",
		image:"images/tieshan/0.jpg",
		images:4,
		button:'查看相关产品'
	}],
	usa:[{}],
	russian:[{}]
}
var productListComp = new Vue({
	el:"#productList",
	data:{
		language:productListData.ch
	}
})



var langComp = new Vue({
	el:'#languagechange',
	data:{
		languages:[{
			path:"assets/css/images/ch.jpg",
			className:"lang_ch",
			type:'ch'
		},{
			path:"assets/css/images/usa.jpg",
			className:"lang_usa",
			type:'usa'			
		},{
			path:"assets/css/images/russian.jpg",
			className:"lang_russian",
			type:'russian'
		}]
	},
	methods:{
		changeLang: function(opt){
			logoComp.language = companyNameData[opt];
			sideBarComp.language = sideBarData[opt];
			introComp.language = introData[opt];
		}
	}
})