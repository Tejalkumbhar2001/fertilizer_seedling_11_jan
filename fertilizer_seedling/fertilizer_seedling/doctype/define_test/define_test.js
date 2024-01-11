// Copyright (c) 2024, tejal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Define Test', {
	// refresh: function(frm) {

	// }
});



frappe.ui.form.on('Define Test', {
	refresh: function(frm) {
		frm.call({
			method:'fixed_child_entries',
			doc:frm.doc
		})
	}
});



frappe.ui.form.on('Define Test', {
	select_all: function(frm) {
		frm.call({
			method:'checkall',
			doc:frm.doc
		})
	}
});


frappe.ui.form.on('Define Test', {
    after_save: function (frm) {
        frm.fields_dict['seed_procurement_id'].df.read_only = 1;
    }
});

