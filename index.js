const Shopify = require("shopify-api-node");
const axios = require("axios");

const shopify = new Shopify({
    shopName: "wigscom",
   
  autoLimit: true,
  bucketSize: { calls: 5, interval: 1000, bucketSize: 35 },
});

const parentSku = [
  "JR745A",
  "JR744A",
  "JR743A",
  "JR741A",
  "JR740A",
  "JR739A",
  "JR742A",
  "JR748A",
  "JR747A",
  "JR746A",
  "JR5701A",
  "JR734A",
  "JR733A",
  "JR735A",
  "JR737A",
  "JR736A",
  "JR723A",
  "JR724A",
  "JR704A",
  "JR707A",
  "JR708A",
  "JR717A",
  "JR718A",
  "JR726A",
  "JR727A",
  "JR728A",
  "JR731A",
  "JR729A",
  "JR732A",
  "JR5983A",
  "JR5988A",
  "JR5990A",
];
const newSku = [
  "JR745",
  "JR744",
  "JR743",
  "JR741",
  "JR740",
  "JR739",
  "JR742",
  "JR748",
  "JR747",
  "JR746",
  "JR5701",
  "JR734",
  "JR733",
  "JR735",
  "JR737",
  "JR736",
  "JR723",
  "JR724",
  "JR704",
  "JR707",
  "JR708",
  "JR717",
  "JR718",
  "JR726",
  "JR727",
  "JR728",
  "JR731",
  "JR729",
  "JR732",
  "JR5983",
  "JR5988",
  "JR5990",
];

// axios
//   .get("http://web/tests/move-variant.php?store=wigs-store.myshopify.com")
//   .then((res) => {
    let products = {
        "JR-STEAMER": 2134917349487,
        "JR356": 9308062410,
        "JR357": 9308194442,
        "JR358": 9308110218,
        "JR359": 9308118026,
        "JR360": 9308126410,
        "JR365": 137749102612,
        "JR366": 137811099668,
        "JR367": 1566241947759,
        "JR368": 1567073927279,
        "JR375": 9289835594,
        "JR380": 9308096394,
        "JR381": 9308085578,
        "JR384A": 9289862794,
        "JR443": 9289750282,
        "JR444": 9289867530,
        "JR5123": 9289900682,
        "JR5127": 9289445194,
        "JR5131": 9289841738,
        "JR5133": 9289459274,
        "JR5134": 9289881738,
        "JR5136": 9289771338,
        "JR5138": 9289438026,
        "JR5139": 9289417802,
        "JR5140": 9289802634,
        "JR5142": 9289808458,
        "JR5143": 9289814026,
        "JR5144": 9289824138,
        "JR5145": 9289849738,
        "JR5147": 9289810378,
        "JR5148": 9289851146,
        "JR5149": 9289855818,
        "JR5150": 9289857034,
        "JR5151": 9289845834,
        "JR5153": 9289784138,
        "JR5154": 9289717002,
        "JR5155": 9289682762,
        "JR5156": 9289648522,
        "JR5157": 9289677514,
        "JR5158": 9289674122,
        "JR5160": 9289687434,
        "JR5312": 9289910794,
        "JR5341": 9289902602,
        "JR5348": 9289896202,
        "JR5350": 9289907082,
        "JR5357": 9289913290,
        "JR5358": 9289621002,
        "JR5360": 9289925130,
        "JR5361": 9289890570,
        "JR5362": 9289915850,
        "JR5363": 9289898954,
        "JR5364": 9289918218,
        "JR5366": 9289877770,
        "JR5370": 9289870602,
        "JR5373": 9289833930,
        "JR5374": 9289795850,
        "JR5376": 9289843850,
        "JR5380": 9289859274,
        "JR5381": 9289746826,
        "JR5382": 9289732810,
        "JR5383": 9289738378,
        "JR5384": 9289744586,
        "JR5385": 9289426698,
        "JR5386": 9289741706,
        "JR5399": 11594210900,
        "JR5400": 11589566164,
        "JR5401": 11577070804,
        "JR5402": 11588246100,
        "JR5403": 11594238420,
        "JR5404": 11594060116,
        "JR5410": 9289905418,
        "JR5701": 10335609418,
        "JR5701A": 10341481994,
        "JR5702": 10342287114,
        "JR5703": 10341698826,
        "JR5704": 10343466250,
        "JR5705": 10342891082,
        "JR5706": 90970652692,
        "JR5707": 91063156756,
        "JR5708": 93561651220,
        "JR5709": 93511188500,
        "JR5710": 91032059924,
        "JR5711": 93577740308,
        "JR5720": 136840544276,
        "JR5721": 136688140308,
        "JR5722": 136857583636,
        "JR5723": 1557072478319,
        "JR5724": 1559275241583,
        "JR5725": 1559527260271,
        "JR5726": 1559735664751,
        "JR5727": 2177118109807,
        "JR5728": 2210944647279,
        "JR5729": 2177435893871,
        "JR5730": 2177056800879,
        "JR5731": 2172086157423,
        "JR5732": 4118310551663,
        "JR5733": 4118572204143,
        "JR5734": 4118595862639,
        "JR5735": 4118197502063,
        "JR5870": 9289909130,
        "JR5874": 9289885514,
        "JR5875": 9289787018,
        "JR5877": 9289789578,
        "JR5878": 9289790730,
        "JR5959": 9289763978,
        "JR5960": 9289757258,
        "JR5963": 9289429770,
        "JR5968": 9289413642,
        "JR5969": 9289712650,
        "JR5970": 9289708618,
        "JR5971": 9289616522,
        "JR5972": 9289584522,
        "JR5973": 9289593866,
        "JR5974": 9289602058,
        "JR5975": 9289597898,
        "JR5976": 9289588618,
        "JR5978": 9289572042,
        "JR5979": 9289576138,
        "JR5980": 9289556490,
        "JR5981": 9289563978,
        "JR5982": 9289560778,
        "JR5983": 9289539146,
        "JR5983A": 9289536522,
        "JR5984": 9289541962,
        "JR5985": 9289550538,
        "JR5986": 9289546058,
        "JR5988": 9289531274,
        "JR5988A": 9289530506,
        "JR5989": 9289532874,
        "JR5990": 9289529546,
        "JR5990A": 9289528138,
        "JR5991": 9289407562,
        "JR5992": 9289524106,
        "JR5993": 9289523082,
        "JR5996": 9289400970,
        "JR5997": 9289526026,
        "JR6000": 1567479398511,
        "JR6001": 1567485263983,
        "JR611A": 9289879562,
        "JR700": 9289627530,
        "JR704": 9289831498,
        "JR704A": 9289838218,
        "JR707": 9289827402,
        "JR707A": 9289781642,
        "JR708": 9289826058,
        "JR708A": 9289779850,
        "JR717": 9289768266,
        "JR717A": 9289766794,
        "JR718": 9289765514,
        "JR718A": 9289751818,
        "JR723": 9308054730,
        "JR723A": 9308167754,
        "JR724": 9308049738,
        "JR724A": 9308171274,
        "JR726": 9289730442,
        "JR726A": 9289728906,
        "JR727": 9289704778,
        "JR727A": 9289696522,
        "JR728": 9289702474,
        "JR728A": 9289698826,
        "JR729": 9289690378,
        "JR729A": 9289689034,
        "JR731": 9289694090,
        "JR731A": 9289692426,
        "JR732": 9289668554,
        "JR732A": 9289662666,
        "JR733": 9308151114,
        "JR733A": 9308145674,
        "JR734": 9308163914,
        "JR734A": 9308158090,
        "JR735": 9308137930,
        "JR735A": 9308132042,
        "JR736": 9308069514,
        "JR736A": 9308079882,
        "JR737": 9308077066,
        "JR737A": 9308072202,
        "JR739": 11215490900,
        "JR739A": 11218083604,
        "JR740": 11219255188,
        "JR740A": 11218977556,
        "JR741": 11224035860,
        "JR741A": 11224098900,
        "JR742": 11204085012,
        "JR742A": 11214738836,
        "JR743": 11224181524,
        "JR743A": 11224266196,
        "JR744": 11224359508,
        "JR744A": 11224307476,
        "JR745": 11224402132,
        "JR745A": 11224452884,
        "JR746": 11195468564,
        "JR746A": 11196004436,
        "JR747": 11201665108,
        "JR747A": 11202213396,
        "JR748": 11202838804,
        "JR748A": 11203708308,
        "JR750": 84957233172,
        "JR750A": 84957233172,
        "JR751": 90885947412,
        "JR751A": 90885947412,
        "JR752": 757890351215,
        "JR752A": 757890351215,
        "JR753": 757915353199,
        "JR753A": 757915353199,
        "JR754": 757917286511,
        "JR754A": 757917286511,
        "JR755": 757877866607,
        "JR755A": 757877866607,
        "JR756": 757925937263,
        "JR756A": 757925937263,
        "JR757": 757932884079,
        "JR757A": 757932884079,
        "JR758": 1350297452655,
        "JR758A": 1350297452655,
        "JR759": 1350533316719,
        "JR759A": 1350533316719,
        "JR770": 4118641803375,
        "JR770A": 4118641803375,
        "JR771": 4118769369199,
        "JR771A": 4118769369199,
        "JRASTM": 9289464586,
        "JRBA": 9289462026,
        "JRBBM": 9289462154,
        "JRCRHDW": 9289488586,
        "JRCRL": 9289488842,
        "JRCRLHH": 9289488458,
        "JRCWL": 9289747338,
        "JREVKIT": 9289465482,
        "JRHDSD": 9289469770,
        "JRHDSD2": 9289469642,
        "JRHTTS": 9289461578,
        "JRLLG": 9289465162,
        "JRPS": 9289465226,
        "JRPT": 9289748682,
        "JRSBB": 9289581066,
        "JRSBBP": 9289579018,
        "JRSCL": 9289579786,
        "JRSIS5X7": 755623100527,
        "JRSIS8X10": 755624247407,
        "JRSOW": 9289580682,
        "JRSOWP": 9289578506,
        "JRTAPEM": 4307907706991,
        "JRTCS": 9289722058,
        "JRTES": 9289720074,
        "JRTESP": 9289720074,
        "JRTH": 9289747978,
        "JRTSAP": 4169004482671,
        "JRTSO": 9289723530,
        "JRTSOP": 31060656148,
        "JRTSS": 9289719242,
        "JRWBPB": 9289461386,
        "JRWBRB": 4529392615535,
        "JRWCP": 9289487754,
        "JRWCWT": 9289461450
        }


//     parentSku.slice(0,1).forEach((item, i)=>{
//         let images = []
//        let array_of_ids = []
//       let id = products[item]
//       let id2 = products[newSku[i]]
//       shopify.productVariant
//       .list(id)
//       .then((res2) => {
         
//         let newData = [];
//         res2.sort((a, b) => {
//             let fa = a.sku,
//                 fb = b.sku;
        
//             if (fa < fb) {
//                 return -1;
//             }
//             if (fa > fb) {
//                 return 1;
//             }
//             return 0;
//         });
//         Promise.all(res2.map(async (x, i) => {

//             // shopify.productImage
//             // .get(x.product_id, x.image_id)
//             // .then((res5) => {
//             //   images.push({[i]: res5.src})
//             // })
//             // .catch((err) => console.error(err));
//  let res5 = await shopify.productImage
//             .get(x.product_id, x.image_id)
//             images.push({[i]: res5.src})
//           let obj = x;
//           x.tax_code = res5.src
//           let key1 = "id";
//           let key2 = "product_id";
//           let key4 = "created_at";
//           let key3 = "updated_at";
//           let key5 = "position"
//           let key6 = "admin_graphql_api_id"
//           let key7 = "fulfillment_service"
//           let key8 = "inventory_management"
//           let key9 = 'inventory_item_id'
//           let key10 = 'image_id'
//           let key11 = 'inventory_quantity'
//           let key12 = 'old_inventory_quantity'
//           let key13 = 'inventory_policy'
//           delete obj[key1];
//           delete obj[key2];
//           delete obj[key3];
//           delete obj[key4];
//           delete obj[key5];
//           delete obj[key6];
//           delete obj[key7];
//           delete obj[key8];
//           delete obj[key9];
//           delete obj[key10];
//           delete obj[key11];
//           delete obj[key12];
//           delete obj[key13];
//           newData.push(obj);
         
//         })).then((values) => {
//             console.log(newData);
//             console.log("finish");
//            newData.forEach((y, ind) => {
//           shopify.productVariant
//             .create(id2, y)
//             .then((res4) => {
//                 // console.log('RESSSS', images?.filter((x) =>  ind in x)[0]?.[ind])

//                 array_of_ids.push(res4.id)
//                 shopify.productImage
//                 .create(res4.product_id, {"variant_ids": [res4.id], 
//                     "src": y.tax_code
//                   })  .then(
//                     (img) => console.log(img),
//                     (err) => console.error(err)
//                   );
//               console.log(res4);
//             console.log(images)
//             })
//             .catch((err) => console.error(err));
 
//         });
            
//           });
  
//         console.log('Res', images.length, array_of_ids.length)
        
//     //   .catch((err) => console.error(err));
      
//   })
// })







// parentSku.slice(0,1).forEach((item, i)=>{
//   let id = products[item]
//   shopify.productVariant
//   .list(id)
//   .then((res2) => {
//       console.log(res2)
//       res2.map(x =>{
//         shopify.productVariant.delete(id, x.id).then(
//             (del) => console.log(del),
//             (err) => console.error(err)
//           );
//       },
//       (err) => console.error(err)
//       )
//   })
// })



// newSku.slice(0,1).forEach((item, i)=>{
//   let id = products[item]
//   shopify.productVariant
//   .list(id)
//   .then((res2) => {
//       console.log(res2)
//       res2.map(x =>{
//         shopify.productVariant.update(x.id, {tax_code: ''}).then(
//             (res) => console.log(res),
//             (err) => console.error(err)
//           );
//       },
//       (err) => console.error(err)
//       )
//   })
// })







//     parentSku.slice(0, 1).map((item, i)=>{
//       let id = products[item]
//       let id2 = products[newSku[i]]
//       shopify.productVariant
//       .list(id)
//       .then((res2) => {
//         let arr = []
//         Promise.all(res2.map(async x =>{
//         let invent = await shopify.inventoryItem.get(x.inventory_item_id)
//          arr.push({[invent.sku] : {country_code_of_origin: invent.country_code_of_origin, harmonized_system_code: invent.harmonized_system_code}})
                      
    
                     
//         })).then(values =>{
//             console.log(arr)
//             shopify.productVariant
//             .list(id2)

//             .then((res3) => { 
//                 res3.map(y =>{
//                     // console.log('sku', y.sku)
//                     let newData = arr?.filter((x2) =>  y.sku in x2)[0]?.[y.sku]
//                     // console.log('New data', newData)
//                     if(newData !== undefined) {
//                         shopify.inventoryItem.update(y.inventory_item_id, {
//                             country_code_of_origin: newData.country_code_of_origin, harmonized_system_code: newData.harmonized_system_code
//                         })
//                         .then(
//                                         (final) => console.log(final),
//                                         (err) => console.error(err)
//                                       );
//                     }
                   
//                 })
//             })

//         })
//     //    console.log('Product', res2)
   
//   })
// })
