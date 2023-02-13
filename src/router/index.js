import { createRouter, createWebHistory } from 'vue-router'

import Dashbord from "../views/Dashbord.vue"
///admission
import AddStudent from "../views/admission/AddStudent.vue"
import AllStudent from "../views/admission/AllStudents.vue"

import Graduates from "../views/admission/Graduates.vue"
import Class from "../views/accademic/Class.vue"
import Subjects from "../views/accademic/Subjects.vue"

import StudentFees from "../views/finance/StudentFees.vue"
import StudentPayments from "../views/finance/StudentPayments.vue"
import PaymentReports from "../views/finance/PaymentReports.vue"

const routes = [
  {
    path: '/',
    name: 'dashbord',
    component: Dashbord
  },
  {
    path: '/addstudent',
    name: 'Addstudent',
    component: AddStudent
  },
  {
    path: '/allstudents',
    name: 'Allstudent',
    component: AllStudent
  },
  {
    path: '/graduates',
    name: 'Graduates',
    component: Graduates
  },
  {
    path: '/classroom',
    name: 'Class',
    component: Class
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: Subjects
  },
  {
    path: '/student-fees',
    name: 'StudentFees',
    component: StudentFees
  },
  {
    path: '/student-payments',
    name: 'StudentPayments',
    component: StudentPayments
  },
  {
    path: '/payment-reports',
    name: 'PaymentReports',
    component: PaymentReports
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
