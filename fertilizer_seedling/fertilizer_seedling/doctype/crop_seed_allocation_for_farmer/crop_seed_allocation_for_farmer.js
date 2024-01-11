// Copyright (c) 2023, tejal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Crop Seed Allocation For Farmer', {
	// refresh: function(frm) {

	// }
});


frappe.ui.form.on('Crop Seed Allocation For Farmer', {
	setup: function(frm) {
		frm.set_query("district", function(doc) {
			if (frm.doc.state) {
			return {
				filters: [
				    ['District', 'state', '=', frm.doc.state],
				]
			};
		}else{
			return {};
		}
		});
	},
})



frappe.ui.form.on('Crop Seed Allocation For Farmer', {
	setup: function(frm) {
		frm.set_query("taluka", function(doc) {
			if (frm.doc.state) {
			return {
				filters: [
				    ['Taluka', 'district', '=', frm.doc.district],
				]
			};
		}else{
			return {};
		}
		});
	},
})


frappe.ui.form.on('Crop Seed Allocation For Farmer', {
	setup: function(frm) {
		frm.set_query("village", function(doc) {
			if (frm.doc.taluka) {
			return {
				filters: [
				    ['Village', 'taluka', '=', frm.doc.taluka],
				]
			};
		}else{
			return {};
		}
		});
	},
})



frappe.ui.form.on('Crop Seed Allocation For Farmer', {
    setup: function(frm) {
        frm.set_query("crop_name", function(doc) {
            if (frm.doc.crop_type) {
                return {
                    filters: [
                        ['Item', 'custom_crop_type', '=', frm.doc.crop_type],
                    ]
                };
            } else {
                // If no crop_type selected, show all crop_name
                return {};
            }
        });
    },
});



frappe.ui.form.on('Crop Seed Allocation For Farmer', {
    setup: function(frm) {
        frm.set_query("crop_variety", function(doc) {
            if (frm.doc.crop_name) {
                return {
                    filters: [
                        ['Crop Variety', 'crop_name', '=', frm.doc.crop_name],
                    ]
                };
            } else {
                // If no crop_type selected, show all crop_name
                return {};
            }
        });
    },
});




frappe.ui.form.on('Crop Seed Allocation For Farmer', {
    setup: function(frm) {
        frm.set_query("plot_number", function(doc) {
            if (frm.doc.farmer_id) {
                return {
                    filters: [
                        ['Plot Number', 'farmer', '=', frm.doc.farmer_id],
                    ]
                };
            } else {
                // If no crop_type selected, show all crop_name
                return {};
            }
        });
    },
});




// frappe.ui.form.on('Transaction', {
// 	setup : function(frm) {
		
// 		let crop_type_list =[]
// 		let crop_name_list =[]
// 		if(frm.doc.crop_type ){
// 			crop_type_list =[['Foundation Seed','crop_type','=', frm.doc.crop_type]];
// 				}

// 		if(frm.doc.crop_name){
// 			crop_name_list =[['Foundation Seed','crop','=', frm.doc.crop_name]];
// 				}


// 		frm.set_query("batch_id", function(doc) {
// 				let c = crop_type_list.concat(crop_name_list);
// 				return {
// 					filters: c
// 				};
			
// 		});

// 	}
// });

frappe.ui.form.on('Crop Seed Allocation For Farmer', {
    setup: function(frm) {
        frm.set_query("batch_id", function(doc) {
            let filters = {};

            if (frm.doc.crop_type) {
                filters["crop_type"] = frm.doc.crop_type;
            }

            if (frm.doc.crop_name) {
                filters["crop"] = frm.doc.crop_name;
            }
			if(frm.doc.crop_variety){
				filters['crop_variety'] = frm.doc.crop_variety;
			}

            return {
                filters: filters
            };
        });
    }
});



frappe.ui.form.on('Crop Seed Allocation For Farmer', {
	batch_id: function(frm) {
		frm.clear_table("fertilizers");
		frm.refresh_field('fertilizers');
        frm.clear_table("pesticides");
		frm.refresh_field('pesticides');
        frm.clear_table("internal_operations");
		frm.refresh_field('internal_operations');
		frm.call({
			method:'get_fertilizer_data',
			doc:frm.doc
		})
	}
});

frappe.ui.form.on('Crop Seed Allocation For Farmer', {
		allocated_seed: function(frm) {
			if(frm.doc.batch_id != null && frm.doc.allocated_seed != null){
			frm.clear_table("allocated_seed_cost_price");
			frm.refresh_field('allocated_seed_cost_price');
			frm.call({
				method:'get_Allocated_Seed_Price',
				doc:frm.doc
			})
	}
	else{
        frappe.throw('Please Enter Foundation Batch ID First !')
	}
	}
});


// frappe.ui.form.on('Transaction', {
// 	crop_name: function(frm) {
		
// 		frm.refresh_field('batch_id');
// 		frm.call({
// 			method:'get_batch_id',
// 			doc:frm.doc,
// 			callback: function(r) {
// 				if (r.message) {
// 					var k = r.message;
// 					frm.set_query("batch_id", function(doc) {
// 						if (frm.doc.crop_name) {
// 							return {
// 								filters: [
// 									['Foundation Seed', 'name', 'in', k],
// 								]
// 							};
// 						} else {
// 							// If no crop_type selected, show all crop_name
// 							return {};
// 						}
// 					});
// 				}
// 			}
// 		})
// 	}
// });





// frappe.ui.form.on('Pattern Master', {
//     refresh: function(frm) {
//             frappe.call({
//                 method: 'set_filters_for_items',
//                 doc: frm.doc,
//                 callback: function(r) {
//                     if (r.message) {
//                         var k = r.message;
//                         frm.set_query("casting_item_code", "core_material_details", function(doc, cdt, cdn) {
//                             let d = locals[cdt][cdn];
//                             return {
//                                 filters: [
//                                     ['Item', 'name', 'in', k],
//                                 ]
//                             };
//                         });
//                     }
//                 }
// 			});
        
//     }
// });
