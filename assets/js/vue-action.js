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
			anchor:"#cooperation"
		},{
			name:"联系我们",
			anchor:"#contactus"
		}],
	usa:[{
		name:'index',
		anchor:"#intro"
		},{
			name:"Product",
			anchor:"#productList"
		},{
			name:"cooperative",
			anchor:"#cooperation"
		},{
			name:"contact",
			anchor:"#contactus"
		}],
	russian:[{
		name:'индекс',
		anchor:"#intro"
		},{
			name:"продукция",
			anchor:"#productList"
		},{
			name:"продукция",
			anchor:"#cooperation"
		},{
			name:"связывать",
			anchor:"#contactus"
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
		type:"yunsan",
		name:"云杉",
		info:"常绿乔木；树皮薄，鳞片状；枝通常轮生；叶线形，螺旋排列，通常四角形；球花顶生或腋生。材质优良，纹理细致，可供工业原料使用。多数种类为今后造林和林业经营上的主要树种。",
		image:"images/yunsan/0.jpg",
		button:'查看相关产品图片'
	},{
		type:"chisong",
		name:"赤松",
		info:"乔木，高达30米，胸径达1.5米树皮桔红色，裂成不规则鳞状薄片脱落。一年生枝桔黄或红黄色，微被白粉，无毛。冬芽暗红褐色，长圆状卵圆形或圆柱形。中国多地有分布。可作抗风植物，可用作木材。",
		image:"images/chisong/0.jpg",
		button:'查看相关产品图片'
	},{
		type:"fushesong",
		name:"辐射松",
		info:"新西兰辐射松，又名新西兰松，英文名monterey pine ,原产于美国加州的一些海岛上。但它在原产地生长并不出色，干形差，生长速度慢，未受到人们的重视。",
		image:"images/fushesong/0.jpg",
		button:'查看相关产品图片'
	},{
		type:"huaqi",
		name:"花旗",
		info:"边材颜色浅、宽度窄。心材由黄色到红褐色不等。早木及晚木颜色分别明显，后者有更深、更尖的带状。这种颜色差别造成平锯时木纹形状不同。木材质地细微到中等，纹路笔直、非渗水性。花旗松是加拿大强度最大的商用软木之一，其硬度高、抗磨损力强，适用于磨损是一个因素的地方，如支架、桥部件、木屋和商业建筑物。",
		image:"images/huaqi/0.jpg",
		button:'查看相关产品图片'
	},{
		type:"spf",
		name:"SPF",
		info:"SPF明显为白木材,木材外观明亮、洁净，颜色由白色到浅黄色不等，纹路细微笔直、质地光滑。具有较高的强度重量比，以出色的操作性能而闻名。其受钉和握钉力非常好，并且手工和电动工具操作容易。粘合、涂漆和着色性能佳。窑干木材作为结构性框架材料用于所有类型的建筑中：住宅、商业、工业和农业。",
		image:"images/spf/0.jpg",
		button:'查看相关产品图片'
	},{
		type:"tiesan",
		name:"铁杉",
		info:"乔木，高达50m，胸径1.6m；冠塔形，大枝平展，枝梢下垂；树皮暗灰色，纵裂，成块状脱落；冬芽卵圆或球形；1年生枝细；淡黄、淡褐黄或淡灰黄色，叶枕凹槽内有短毛。",
		image:"images/tiesan/0.jpg",
		button:'查看相关产品图片'
	},{
		type:"osb",
		name:"OSB板",
		info:'"欧松板"(也称"爱格板")在家具上的应用得到了空前的发展，很多的大型家具企业都开始使用"OSB"制作家具，其备受消费者喜欢的原因就是无甲醛释放，并且结实耐用，且比中密度纤维板制作的家具重量轻，平整度更好。',
		image:"images/osb/0.jpg",
		button:'查看相关产品图片'
	}],
	usa:[{
		type:"yunsan",
		name: "spruce",
		info: "The evergreen trees are thin, scaly, and the branches are usually whorled. The leaves are linear, helical, usually quadrangular. The flowers are terminal or axillary. The material is fine and the texture is fine and can be used for industrial raw materials. The main tree species in the future afforestation and forestry management.",
		image: "images/yunsan/0.jpg",
		button: 'related pictures'
	},{
		type:"chisong",
		name: "red pine",
		info: "trees, up to 30 meters, the diameter of up to 1.5 meters of bark orange, cracked into irregular irregular foliage shed. Annual branches orange or red and yellow, slightly white powder, hairless. Winter buds dark reddish brown, Round or cylindrical. China has more distribution. Can be used for wind resistant plants, can be used as wood. ",
		image:"images/chisong/0.jpg",
		button: 'related pictures'
	},{
		type:"fushesong",
		name: "Radiation pine",
		info: "New Zealand Radiation Pine, also known as New Zealand pine, English name monterey pine, originated in California, some of the island, but it is not good in the origin of growth, dry shape, slow growth, not by the people's attention . ",
		image: "images/fushesong/0.jpg",
		button: 'related pictures'
	},{
		type:"huaqi",
		name: "Citi",
		info: "Sapwood is light in color and narrow in width. The heartwood is from yellow to reddish brown, and the colors of the early wood and the late wood are obvious, and the latter are deeper and sharper. This color difference causes the plain saw Citruson is one of Canada's largest commercial corks with high hardness and abrasion resistance, and is suitable for wear and tear where it is a factor, such as a stent, a bridge Parts, wooden houses and commercial buildings. ",
		image: "images/huaqi/0.jpg",
		button: 'related pictures'
	},{
		type:"spf",
		name: "SPF",
		info: "SPF is obviously white wood, the appearance of wood bright, clean, color from white to light yellow range, fine lines straight, smooth texture. Has a high strength and weight ratio, with excellent operating performance is known. And the grip force is very good, and the manual and power tools are easy to handle, and the bonding, painting and coloring properties are good. Kiln dry wood is used as a structural frame material for all types of buildings: residential, commercial, industrial and agricultural. ",
		image: "images/spf/0.jpg",
		button: 'related pictures'
	},{
		type:"tiesan",
		name: "hemlock",
		info: "The tree bark dark gray, longitudinal crack, into a block off; winter buds oval or spherical; 1 year old branches thin; yellowish, yellow, Light brown or light grayish yellow, leaves pillow groove with short hair. ",
		image: "images/tiesan/0.jpg",
		button: 'related pictures'
	},{
		type:"osb",
		name: "OSB board",
		info: '(Also known as "love board") in the application of the furniture has been an unprecedented development, many large furniture companies are beginning to use "OSB" production of furniture, its much consumers like the reasons Is formaldehyde-free release, and strong and durable, and made of medium-density fiberboard furniture, light weight, flatness better. ',
		image: "images/osb/0.jpg",
		button: 'related pictures'
	}],
	russian:[{
		type:"yunsan",
		name:"ель",
		info:"Вечнозеленое дерево, кора тонкая, чешуйчатый, ветви обычно мутовчатыми, листья линейные, спиральное расположение, обычно прямоугольной формы; конусы или подмышечные. Отличный материал, тонкая текстура, сырье для промышленного использования. Большинство видов по основным видам деревьев для будущего воспроизводства лесов и ведения лесного хозяйства.",
		image:"images/yunsan/0.jpg",
		button:'престиж продукции'
	},{
		type:"chisong",
		name:"японская красная сосна",
		info:"Дерева, до 30 м, диаметр 1,5 м коры оранжевого, плоскоклеточный раздроблены на нерегулярные хлопья прочь. Ежегодные ветви оранжевые или красные и желтые, слегка бургомистров, голые. Зимние почки темно-коричневые, цилиндрические или продолговато-овальные. Китай более распространен. Может использоваться для ветровых установок могут быть использованы в качестве древесины.",
		image:"images/chisong/0.jpg",
		button:'престиж продукции'
	},{
		type:"fushesong",
		name:"Pinus лучистой",
		info:"Новая Зеландия лучистой сосна, также известная как новозеландская сосна, английский Monterey сосна, произрастающую в некоторых из островов, Калифорнии. Он растет в стране происхождения, но не хорошо стволовой формы беден, медленный рост, никакого внимания не уделяется.",
		image:"images/fushesong/0.jpg",
		button:'престиж продукции'
	},{
		type:"huaqi",
		name:"Citigroup",
		info:"Заболонь мелкий, узкая ширина. Сердцевина колеблется от желтого до красновато-коричневого. Ранняя древесина и поздняя древесина цвет ясно, последние лучше, острее полоса. Различный результат формы зерна в этой цветовом уровне разницы пилы. Древесина тонкая до средней текстуры, текстуры прямо, проницаемость без воды. Ель Дугласа является одним из крупнейших коммерческих силы Канады пробки, высокая твердость, износостойкость, носить подходящее место является одним из факторов, таких как стенты, компоненты мостов, деревянных домов и коммерческих зданий.",
		image:"images/huaqi/0.jpg",
		button:'престиж продукции'
	},{
		type:"spf",
		name:"SPF",
		info:"SPF является отчетливо белая древесина, выглядят яркие, чистые цвета, начиная от белого до бледно-желтого цвета, тонкий прямой зерно, гладкую текстуру. Обладает высокую прочность к весу, с превосходными эксплуатационными характеристиками, как известны. По его ногтем и ногтевого удерживающей силы очень хорошо, и легко работать вручную и электроинструментами. Склеивание, покраска и хорошая способность к окрашиванию. Печная сушка древесины в качестве конструкционного материала рамы для всех типов зданий: жилых, коммерческих, промышленных и сельскохозяйственных.",
		image:"images/spf/0.jpg",
		button:'престиж продукции'
	},{
		type:"tiesan",
		name:"тсуга",
		info:"Дерева, до 50 м, диаметр 1,6 м; краун башня, большие плоские ветви, свисающие ветви советов, кора темно-серый, продольные, чтобы блокировать; зимние почки овальный или шаровидные; 1 год старые ветви тонкий, желтый, светло-желто-коричневыми или серовато-желтые, с короткими волосами в затылочной выемке.",
		image:"images/tiesan/0.jpg",
		button:'престиж продукции'
	},{
		type:"osb",
		name:"OSB доска",
		info:'«ОСБ» (называемая также «Любовь сетка пластина»), используемая в мебели была беспрецедентное событием, многие крупные мебельные компании начинают использовать «ОСБ» делают мебель, это потребители так много причин, как формальдегид релиз, и прочный, и легче, чем производство древесноволокнистых плит средней плотности массы мебели, плоскостности лучше.',
		image:"images/osb/0.jpg",
		button:'престиж продукции'
	}]
}
var galleryTop,galleryThumbs;
var productListComp = new Vue({
	el:"#productList",
	data:{
		language:productListData.ch
	},
	methods:{
		showProductImgList:function(type){
			var self = this;
			maskComp.language = maskData[type];
			maskComp.showMask = true;				
			setTimeout(function(){
				self.initSwiper();
			},200)
		},
		initSwiper:function(){
			if(!galleryTop){
				 galleryTop = new Swiper('.gallery-top', {
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        spaceBetween: 10
			    });
			    galleryThumbs = new Swiper('.gallery-thumbs', {
			        spaceBetween: 10,
			        centeredSlides: true,
			        slidesPerView: 'auto',
			        touchRatio: 0.2,
			        slideToClickedSlide: true
			    });
			    galleryTop.params.control = galleryThumbs;
			    galleryThumbs.params.control = galleryTop;				
			}else{
				galleryTop.update();
				galleryThumbs.update();
				galleryTop.slideTo(0,0);
			}
		}
	}
})

//setTimeout(function(){
//	productListComp.initSwiper();
//},3000)

//品牌合作
var cooperationData ={
	ch:{
		title:'品牌合作',
		brandList:[{
			logo:"images/company0.jpg",
			name:"Aracuo",
			info:"知名辐射松生产商"
		},{
			logo:"images/company1.jpg",
			name:"nterex",
			info:"加拿大SPF，铁杉，花旗松等北美木材供应商"
		}]
	},
	usa:{
		title: 'Brand cooperation',
		brandList: [{
			logo: "images/company0.jpg",
			name: "Aracuo",
			info: "Well-known Radiation Pine Manufacturer"
		}, {
			logo: "images/company1.jpg",
			name: "nterex",
			info: "Canada SPF, hemlock, Douglas fir and other North American timber suppliers"
		}]
	},
	russian:{
		title:'Бренды',
		brandList:[{
			logo:"images/company0.jpg",
			name:"Aracuo",
			info:"Известный производитель сосны лучистой"
		},{
			logo:"images/company1.jpg",
			name:"nterex",
			info:"Канадский SPF, болиголов, ель Дугласа и другие поставщики древесины в Северной Америке"
		}]
	}
}
var cooperationComp = new Vue({
	el:"#cooperation",
	data:{
		language:cooperationData.ch
	}
	
})

//联系我们
var contactUsData = {
	ch:{
		title:"联系我们",
		subtitle:"联系我们一起合作.",
		addressName:"地址",
		emailName:"邮箱",
		phoneName:"电话",
		address:{pro:"上海市",city:"宝山区",district:"陆翔路111弄3号1209室"},
		email:[{
			name:"王浩宇",
			value:"steven@wooodfield-china.com",
			href:"mailto:steven@wooodfield-china.com"
		},{
			name:"撒兴建",
			value:"alex@woodfield-china.com",
			href:"mailto:alex@woodfield-china.com"
		}],
		phone:[{
			name:"王浩宇",
			value:"(+86) 156 1875 7908 ",
			href:"telto:+86 15618757908"
		},{
			name:"撒兴建",
			value:"(+86) 182 2127 9859 ",
			href:"telto:+86 18221279859"
		}]
	},
	usa:{
		title: "contact us",
		subtitle: "Contact us for cooperation.",
		addressName: "address",
		emailName: "mailbox",
		phoneName: "phone",
		address: {pro: "Shanghai", city: "Baoshan District", district: "Lu Xiang Road 111 Lane No. 3 Room 1209"},
		email: [{
				name: "Wang Haoyu",
				value: "steven@wooodfield-china.com",
				href:"mailto:steven@wooodfield-china.com"
			}, {
				name: "sprinkle construction",
				value: "alex@woodfield-china.com",
				href:"mailto:alex@woodfield-china.com"
		}],
		phone: [{
				name: "Wang Haoyu",
				value: "(+ 86) 156 1875 7908",
				href:"telto:+86 15618757908"
			}, {
				name: "sa xingjian",
				value: "(+ 86) 182 2127 9859",
				href:"telto:+86 18221279859"
		}]
	},
	russian:{
		title:"Связаться с Нами",
		subtitle:"Связаться с Нами работать вместе.",
		addressName:"адрес",
		emailName:"почтовый ящик",
		phoneName:"телефон",
		address: {pro: "Shanghai", city: "Baoshan District", district: "Lu Xiang Road 111 Lane No. 3 Room 1209"},
		email: [{
				name: "Wang Haoyu",
				value: "steven@wooodfield-china.com",
				href:"mailto:steven@wooodfield-china.com"
			}, {
				name: "sprinkle construction",
				value: "alex@woodfield-china.com",
				href:"mailto:alex@woodfield-china.com"
		}],
		phone: [{
				name: "Wang Haoyu",
				value: "(+ 86) 156 1875 7908",
				href:"telto:+86 15618757908"
			}, {
				name: "sa xingjian",
				value: "(+ 86) 182 2127 9859",
				href:"telto:+86 18221279859"
		}]
	}
}
var contactUsComp = new Vue({
	el:"#contactus",
	data:{
		language:contactUsData.ch
	}
})

//产品轮播组件数据
var maskData = {
	chisong:[{
			image:'images/chisong/0.jpg'
		},{
			image:'images/chisong/1.jpg'
		},{
			image:'images/chisong/2.jpg'
		},{
			image:'images/chisong/3.jpg'
		}],
	fushesong:[{
			image:'images/fushesong/0.jpg'
		},{
			image:'images/fushesong/1.jpg'
		},{
			image:'images/fushesong/2.jpg'
		},{
			image:'images/fushesong/3.jpg'
		}],
	huaqi:[{
			image:'images/huaqi/0.jpg'
		},{
			image:'images/huaqi/1.jpg'
		},{
			image:'images/huaqi/2.jpg'
		},{
			image:'images/huaqi/3.jpg'
		}],
	osb:[{
		image:'images/osb/0.jpg'
		},{
			image:'images/osb/1.jpg'
		},{
			image:'images/osb/2.jpg'
		},{
			image:'images/osb/3.jpg'
		},{
			image:'images/osb/4.jpg'
		}],
	spf:[{
		image:'images/spf/0.jpg'
		},{
			image:'images/spf/1.jpg'
		},{
			image:'images/spf/2.jpg'
		}],
	tiesan:[{
			image:'images/tiesan/0.jpg'
		},{
			image:'images/tiesan/1.jpg'
		},{
			image:'images/tiesan/2.jpg'
		},{
			image:'images/tiesan/3.jpg'
		}],
	yunsan:[{
		image:'images/yunsan/0.jpg'
		},{
			image:'images/yunsan/1.jpg'
		},{
			image:'images/yunsan/2.jpg'
		},{
			image:'images/yunsan/3.jpg'
		}]
}
var maskComp = new Vue({
	el:"#mask",
	data:{
		language:maskData.chisong,
		showMask:false
	},
	methods:{
		closeMask:function(){
			this.showMask = false;
		}
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
			productListComp.language = productListData[opt];
			cooperationComp.language = cooperationData[opt];
			contactUsComp.language = contactUsData[opt];
		}
	}
})