import ContactListView from "@/components/ContactListView.vue";
import CallHistoryView from "@/components/CallHistoryView.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";

export const routes:RouteRecordRaw[] = [
  {
    path: "/",
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        redirect: "contact-list",
      },
      {
        name: "ContactList",
        path: "contact-list",
        component: ContactListView
      },
      {
        name: "CallHistory",
        path: "call-history",
        component: CallHistoryView
      }
    ]
  },
  {
    name: "Auth",
    path: "/auth",
    component: AuthLayout
  }
]
