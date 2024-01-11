// Copyright (c) 2024, tejal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Seed Procurement', {
	// refresh: function(frm) {

	// }
});


frappe.ui.form.on('Seed Procurement', {
    after_save: function (frm) {
        frm.fields_dict['farm_inspection_id'].df.read_only = 1;
    }
});