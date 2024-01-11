// Copyright (c) 2023, tejal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Foundation Seed', {
	// refresh: function(frm) {

	// }
});


// frappe.ui.form.on('Foundation Seed', {
// 	setup: function(frm) {
// 		frm.set_query("crop", function(doc) {
// 			return {
// 				filters: [
// 				    ['Crop', 'crop_type', '=', frm.doc.crop_type],
// 				]
// 			};
// 		});
// 	},
// })


frappe.ui.form.on('Foundation Seed', {
    setup: function(frm) {
        frm.set_query("crop", function(doc) {
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


// frappe.ui.form.on('Foundation Seed', {
// 	setup: function(frm) {
// 		frm.set_query("crop_variety", function(doc) {
// 			return {
// 				filters: [
// 				    ['Crop Variety', 'crop_name', '=', frm.doc.crop],
// 				]
// 			};
// 		});
// 	},
// })


frappe.ui.form.on('Foundation Seed', {
    setup: function(frm) {
        frm.set_query("crop_variety", function(doc) {
            if (frm.doc.crop) {
                return {
                    filters: [
                        ['Crop Variety', 'crop_name', '=', frm.doc.crop],
                    ]
                };
            } else {
                // If no crop_type selected, show all crop_name
                return {};
            }
        });
    },
});
