# Copyright (c) 2026, Elie and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator


class ToDoList(WebsiteGenerator):
    def validate(self):
        if not self.title:
            frappe.throw("Title cannot be empty")
    def before_save(self):
     if not self.route:
        self.route = frappe.utils.slug(self.title)