// Copyright (c) 2026, Elie and contributors
// For license information, please see license.txt

// frappe.ui.form.on("To Do List", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('To Do List', {
    refresh(frm) {
        if (frm.doc.status !== 'Done') {
            frm.add_custom_button('Mark Done', function() {
                frm.set_value('status', 'Completed');
                frm.save();
            });
        }
    }
});